sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/InputBase",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, MessageBox, MessageToast, InputBase, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.ui.eventregistration.form.controller.Registration", {

		onInit: function () {

			// keep the reference to the OData model
			this.oDataModel = this.getOwnerComponent().getModel();

			// load previous data
			var oBinding = this.oDataModel.bindList("/Person");
			var oIsDraftFilter = new Filter("IsActiveEntity", FilterOperator.EQ, false);
			var oHasNoDraftSiblingFilter = new Filter("SiblingEntity/IsActiveEntity", FilterOperator.EQ, null);
			var oDraftORNoDraftSiblingFilter = new Filter({
				filters: [oIsDraftFilter, oHasNoDraftSiblingFilter], 
				and: false
			});
			oBinding.filter(oDraftORNoDraftSiblingFilter);
			oBinding.requestContexts(0, 2).then(function(aContexts) { // there should be only one. Request two to detect error situations.
				this.onExistingDataLoaded(aContexts);
			}.bind(this)).catch(function(oError) {
				if (oError.status === 401 || oError.status === 403) { // 401 Unauthorized when user cancels login dialog, 403 Forbidden, when giving wrong credentials
					// navigate without hash change
					this.getOwnerComponent().getRouter().getTargets().display("notAuthorized");
				}
			}.bind(this));

			// store the reference to the i18n model
			this.oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

			// listen to focusleave and enter on the fields to validate the user input
			var aControls = sap.ui.getCore().byFieldGroupId("RegForm");
			aControls.forEach(function(oControl) {
				oControl.addEventDelegate({
					onsapfocusleave: this.validateControl.bind(this, oControl),
					onsapenter: this.validateControl.bind(this, oControl)
				});
			}.bind(this));

			// put focus in firstName and scroll to top again
			this.getView().addEventDelegate({
				onAfterShow: function() {
					this.byId("firstName").focus();
					this.byId("page").scrollTo(0);
				}.bind(this)
			})

		},

		onExistingDataLoaded: function(aContexts) {
			// CREATE
			if (!aContexts || aContexts.length === 0) { // no data for this user yet
				var oBinding = this.oDataModel.bindList("/Person");
				oBinding.attachCreateCompleted(function(oEvent) {
					if (oEvent.getParameter("success")) {
						this.getView().setBindingContext(oEvent.getParameter("context"));
					} else {
						var sText = this.oBundle.getText("emptyCreateErrorText");
						var sTitle = this.oBundle.getText("emptyCreateErrorTitle");
						MessageBox.error(sText, {
							title: sTitle
						});
					}
				}.bind(this));
				oBinding.create({}, true /* bSkipRefresh */); // automatically in draft mode

				MessageToast.show(this.oBundle.getText("existingDataNotFound"), {duration: 5000});

			// UPDATE
			} else { // data found which can be accessed
				// detect error situation with multiple datasets for one person
				if (aContexts.length > 1) {
					if (aContexts[0].getObject().Email !== aContexts[1].getObject().Email) { // only admins can see data of other users
						MessageBox.error(this.oBundle.getText("adminsStayOut"), {duration: 5000});
					} else {
						MessageBox.error(this.oBundle.getText("moreThanOneDatasetFound"), {duration: 5000});
					}
					return;
				}
				var oContext = aContexts[0];

				// ensure it is in draft state
				var isActive = oContext.getProperty("IsActiveEntity"); // = non-draft
				if (isActive) { // bring to draft/edit mode
					var oOperation = this.oDataModel.bindContext(
						"EventRegistrationService.draftEdit(...)",
						oContext
					);
					oOperation.execute()
					.then(function (oUpdatedContext) {
						this.getView().setBindingContext(oUpdatedContext);
						MessageToast.show(this.oBundle.getText("existingDataLoaded"), {duration: 5000});
					}.bind(this))
					.catch(function() {
						alert("draft edit failure");
					});
				} else { // already in draft/edit mode
					this.getView().setBindingContext(oContext);
					MessageToast.show(this.oBundle.getText("existingDraftLoaded"), {duration: 5000});
				}

				this.byId("submitButton").setText(this.oBundle.getText("updateButtonText"));
			}
		},

		contextAvailable: function(sPath) {
			this.getView().bindElement({path: sPath});
		},

		addFamilyMember: function (oEvent) {
			var oListBinding = this.byId("familyMembersTable").getBinding("items");
			oListBinding.create({});
		},

		deleteFamilyMember: function(oEvent) {
			oEvent.getSource().getBindingContext().delete("$auto").then(function () {
				// deletion success
			}.bind(this), function (oError) {
				// TODO: ignore deletion failure?
			});
		},

		validateControl: function(oControl) {
			if (oControl instanceof InputBase) {
				if (oControl.getRequired() && !oControl.getValue()) {
					oControl.fireValidationError({
						element: oControl,
						property: "value",
						message: this.oBundle.getText("enterValue")
					});
				}
			}
		},

		validateData: function() {
			var oNewObject = this.getView().getBindingContext().getObject();

			// determine field names for validation dialog
			var oBundle = this.oBundle;
			var mFields = {
				LastName: oBundle.getText("name"),
				FirstName: oBundle.getText("firstName"),
				Birthday: oBundle.getText("dateOfBirth")
			}

			// check for missing fields
			var aMissing = [];
			for (var prop in mFields) {
				if (!oNewObject[prop]) {
					aMissing.push(mFields[prop]);
				}
			}

			// loop FamilyMembers
			for (var i = 0; i < oNewObject.FamilyMembers.length; i++) {
				var oFamilyMember = oNewObject.FamilyMembers[i]
				var bSomethingThere = !!(oFamilyMember.LastName || oFamilyMember.FirstName || oFamilyMember.Birthday);
				var bSomethingMissing = !(oFamilyMember.LastName && oFamilyMember.FirstName && oFamilyMember.Birthday);
				if (bSomethingThere && bSomethingMissing) {
					aMissing.push(oBundle.getText("validationFamilyMember", [i + 1]));
				}
			}

			// show validation errors (red borders) for all registration form controls with missing data
			if (aMissing.length > 0) {
				var aControls = sap.ui.getCore().byFieldGroupId("RegForm");
				aControls.forEach(function(oControl) {
					this.validateControl(oControl);
				}.bind(this));
			}

			return aMissing;
		},

		onSubmit: function() {
			// run validation and report validation errors
			var aMissing = this.validateData();
			if (aMissing.length > 0) {
				var sText = this.oBundle.getText("validationText");
				var sTitle = this.oBundle.getText("validationTitle");
				MessageBox.alert(sText + "\n- " + aMissing.join("\n- "), {title: sTitle});
				return;
			}

			var oContext = this.getView().getBindingContext();

			/* omit this block as failing "draftActivate" is not expected (no data checks in backend) aand a failing PATCH would not be dramatic
			// ensure there are no pending changes (because otherwise with a failing "save" the last PATCH which might be in the same batch would also fail)
			if (oContext.hasPendingChanges()) {
				this.oDataModel.submitBatch("$auto"); // TODO: would we have to wait for the result?
			}
			*/

			// disable the "Submit" button to prevent double clicks from saving data twice
			this.byId("submitButton").setEnabled(false);

			// trigger OData operation for persisting the draft as real data
			var oOperation = this.oDataModel.bindContext(
				"EventRegistrationService.draftActivate(...)",
				oContext
			);
			oOperation.execute()
			.then(function () {
				// navigate without hash change
				this.getOwnerComponent().getRouter().getTargets().display("confirmation");
			}.bind(this))
			.catch(function(err) {
				this.showErrorDialog()
			}.bind(this));
		},

		showErrorDialog: function() {
			var sText = this.oBundle.getText("submitErrorText");
			var sTitle = this.oBundle.getText("submitErrorTitle");
			this.byId("submitButton").setEnabled(true);
			MessageBox.error(sText, {
				title: sTitle
			});
		}

	});

});