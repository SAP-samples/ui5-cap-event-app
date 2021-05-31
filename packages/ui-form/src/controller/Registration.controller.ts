import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import InputBase from "sap/m/InputBase";
import Page from "sap/m/Page";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import ODataListBinding from "sap/ui/model/odata/v4/ODataListBinding";
import V4Context from "sap/ui/model/odata/v4/Context";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import Core from "sap/ui/core/Core";
import Control from "sap/ui/core/Control";
import Button from "sap/m/Button";
import UIComponent from "sap/ui/core/UIComponent";
import UI5Event from "sap/ui/base/Event";
import ODataContextBinding from "sap/ui/model/odata/v4/ODataContextBinding";


// some type definitions for data structures used within the app

type Person = {
	LastName: string,
	FirstName: string,
	Birthday: string
};

type PersonProp = keyof Person;

type Employee = {
	LastName: string,
	FirstName: string,
	Birthday: string,
	FamilyMembers: Person[]
};


/**
 * @namespace sap.ui.eventregistration.form.controller
 */
export default class RegistrationController extends Controller {

	private oBundle : ResourceBundle;
	private oDataModel : ODataModel;

	public onInit() : void {

		// keep the reference to the OData model
		this.oDataModel = this.getOwnerComponent().getModel() as ODataModel;

		// load previous data
		const oBinding = this.oDataModel.bindList("/Person");
		const oIsDraftFilter = new Filter({path: "IsActiveEntity", operator: FilterOperator.EQ, value1: false});
		const oHasNoDraftSiblingFilter = new Filter({path: "SiblingEntity/IsActiveEntity", operator: FilterOperator.EQ, value1: null});
		const oDraftORNoDraftSiblingFilter = new Filter({
			filters: [oIsDraftFilter, oHasNoDraftSiblingFilter],
			and: false
		});
		oBinding.filter(oDraftORNoDraftSiblingFilter);
		oBinding.requestContexts(0, 2).then((aContexts) => { // there should be only one. Request two to detect error situations.
			this.onExistingDataLoaded(aContexts);
		}).catch(() => {
			MessageToast.show(this.oBundle.getText("errorWhenLoadingData"));
		});

		// store the reference to the i18n model
		this.oBundle = (this.getOwnerComponent().getModel("i18n") as ResourceModel).getResourceBundle() as ResourceBundle;

		// listen to focusleave on the fields to validate the user input
		const aControls = Core.byFieldGroupId("RegForm");
		aControls.forEach((oControl) => {
			oControl.addEventDelegate({
				onsapfocusleave: this.validateControl.bind(this, oControl),
				onsapenter: this.validateControl.bind(this, oControl)
			});
		});

		// put focus in firstName and scroll top again
		this.getView().addEventDelegate({
			onAfterShow: () => {
				this.byId("firstName").focus();
				(this.byId("page") as Page).scrollTo(0);
			}
		})

	}

	public onExistingDataLoaded(aContexts : V4Context[]) : void {
		// CREATE
		if (!aContexts || aContexts.length === 0) { // no data for this user yet
			const oBinding = this.oDataModel.bindList("/Person");
			oBinding.attachCreateCompleted((oEvent : UI5Event) => {
				if (oEvent.getParameter("success")) {
					const path : string = (oEvent.getParameter("context") as ODataContextBinding).getPath();
					this.getView().bindObject({path: path});
				} else {
					const sText = this.oBundle.getText("emptyCreateErrorText");
					const sTitle = this.oBundle.getText("emptyCreateErrorTitle");
					MessageBox.error(sText, {
						title: sTitle
					});
				}
			});
			oBinding.create({}, true /* bSkipRefresh */);

			MessageToast.show(this.oBundle.getText("existingDataNotFound"), {duration: 5000});

		// UPDATE
		} else { // data found which can be accessed
			// detect error situation with multiple datasets for one person
			if (aContexts.length > 1) {
				MessageBox.error(this.oBundle.getText("moreThanOneDatasetFound"));
				return; // TODO: what?
			}
			const oContext = aContexts[0];

			// ensure it is in draft state
			const isActive = oContext.getProperty("IsActiveEntity") as boolean;
			if (isActive) { // bring to draft/edit mode
				const oOperation = this.oDataModel.bindContext(
					"EventRegistrationService.draftEdit(...)",
					oContext
				);
				oOperation.execute()
				.then((oUpdatedContext : V4Context) => {
					this.getView().bindObject({
						path: oUpdatedContext.getPath(),
						parameters: {
							$expand: "FamilyMembers"
						}
					});
					MessageToast.show(this.oBundle.getText("existingDataLoaded"), {duration: 5000});
				})
				.catch(() => {
					alert("draft edit failure");
				});
			} else { // already in draft/edit mode
				this.getView().bindObject({
					path: oContext.getPath(),
					parameters: {
						$expand: "FamilyMembers"
					}
				});
				MessageToast.show(this.oBundle.getText("existingDraftLoaded"), {duration: 5000});
			}

			(this.byId("submitButton") as Button).setText(this.oBundle.getText("updateButtonText"));
		}
	}

	public contextAvailable(sPath : string) : void {
		this.getView().bindElement({path: sPath});
	}

	public addFamilyMember() : void {
		const oListBinding = this.byId("familyMembersTable").getBinding("items") as ODataListBinding;
		oListBinding.create({});
	}

	public deleteFamilyMember(oEvent : UI5Event) : void {
		((oEvent.getSource() as Control).getBindingContext() as V4Context).delete("$auto").then(() => {
			// deletion success
		}, () => {
			// TODO: ignore deletion failure?
		});
	}

	public validateControl(oControl : Control) : void {
		if (oControl instanceof InputBase) {
			if (oControl.getRequired() && !oControl.getValue()) {
				oControl.fireValidationError({
					element: oControl,
					property: "value",
					message: this.oBundle.getText("enterValue")
				});
			}
		}
	}

	public validateData() : string[] {
		const oNewObject = this.getView().getBindingContext().getObject() as Employee;

		// determine field names for validation dialog
		const oBundle = this.oBundle;
		const mFields : Person = {
			LastName: oBundle.getText("name"),
			FirstName: oBundle.getText("firstName"),
			Birthday: oBundle.getText("dateOfBirth")
		};

		// check for missing fields
		const aMissing = [];
		let prop : PersonProp;
		for (prop in mFields) {
			if (!oNewObject[prop]) {
				aMissing.push(mFields[prop]);
			}
		}

		// loop FamilyMembers
		for (let i = 0; i < oNewObject.FamilyMembers.length; i++) {
			const oFamilyMember = oNewObject.FamilyMembers[i]
			const bSomethingThere = !!(oFamilyMember.LastName || oFamilyMember.FirstName || oFamilyMember.Birthday);
			const bSomethingMissing = !(oFamilyMember.LastName && oFamilyMember.FirstName && oFamilyMember.Birthday);
			if (bSomethingThere && bSomethingMissing) {
				aMissing.push(oBundle.getText("validationFamilyMember", [i + 1]));
			}
		}

		// show validation errors (red borders) for all registration form controls with missing data
		if (aMissing.length > 0) {
			const aControls = Core.byFieldGroupId("RegForm");
			aControls.forEach((oControl) => {
				this.validateControl(oControl);
			});
		}

		return aMissing;
	}

	public onSubmit() : void {
		// run validation and report validation errors
		const aMissing = this.validateData();
		if (aMissing.length > 0) {
			const sText = this.oBundle.getText("validationText");
			const sTitle = this.oBundle.getText("validationTitle");
			MessageBox.alert(sText + "\n- " + aMissing.join("\n- "), {title: sTitle});
			return;
		}

		const oContext = this.getView().getBindingContext() as V4Context;

		/* omit this block as failing "draftActivate" is not expected (no data checks in backend) aand a failing PATCH would not be dramatic
		// ensure there are no pending changes (because otherwise with a failing "save" the last PATCH which might be in the same batch would also fail)
		if (oContext.hasPendingChanges()) {
			this.oDataModel.submitBatch("$auto"); // TODO: would we have to wait for the result?
		}
		*/

		// submit the person data
		(this.byId("submitButton") as Button).setEnabled(false);

		// trigger OData operation for persisting the draft as real data

		const oOperation = this.oDataModel.bindContext(
			"EventRegistrationService.draftActivate(...)",
			oContext
		);
		oOperation.execute()
		.then(() => {
			// navigate without hash change
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			(this.getOwnerComponent() as UIComponent).getRouter().getTargets().display("confirmation");
		})
		.catch(() => {
			this.showErrorDialog()
		});
	}

	public showErrorDialog() : void {
		const sText = this.oBundle.getText("submitErrorText");
		const sTitle = this.oBundle.getText("submitErrorTitle");
		(this.byId("submitButton") as Button).setEnabled(true);
		MessageBox.error(sText, {
			title: sTitle
		});
	}

}
