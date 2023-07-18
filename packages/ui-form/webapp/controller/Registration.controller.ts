import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import InputBase from "sap/m/InputBase";
import Page from "sap/m/Page";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import ODataListBinding, { ODataListBinding$CreateCompletedEvent } from "sap/ui/model/odata/v4/ODataListBinding";
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
export default class Registration extends Controller {

	private bundle : ResourceBundle;
	private oDataModel : ODataModel;

	public onInit() : void {

		// keep the reference to the OData model
		this.oDataModel = this.getOwnerComponent().getModel() as ODataModel;

		// load previous data
		const binding = this.oDataModel.bindList("/Person");
		const isDraftFilter = new Filter({path: "IsActiveEntity", operator: FilterOperator.EQ, value1: false});
		const hasNoDraftSiblingFilter = new Filter({path: "SiblingEntity/IsActiveEntity", operator: FilterOperator.EQ, value1: null});
		const draftORNoDraftSiblingFilter = new Filter({
			filters: [isDraftFilter, hasNoDraftSiblingFilter],
			and: false
		});
		binding.filter(draftORNoDraftSiblingFilter);
		binding.requestContexts(0, 2).then((contexts) => { // there should be only one. Request two to detect error situations.
			this.onExistingDataLoaded(contexts);
		}).catch(() => {
			MessageToast.show(this.bundle.getText("errorWhenLoadingData"));
		});

		// store the reference to the i18n model
		this.bundle = (this.getOwnerComponent().getModel("i18n") as ResourceModel).getResourceBundle() as ResourceBundle;

		// listen to focusleave on the fields to validate the user input
		const controls = Core.byFieldGroupId("RegForm");
		controls.forEach((control) => {
			control.addEventDelegate({
				onsapfocusleave: this.validateControl.bind(this, control),
				onsapenter: this.validateControl.bind(this, control)
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

	public onExistingDataLoaded(contexts : V4Context[]) : void {
		// CREATE
		if (!contexts || contexts.length === 0) { // no data for this user yet
			const binding = this.oDataModel.bindList("/Person");
			binding.attachCreateCompleted((event: ODataListBinding$CreateCompletedEvent & /* FIXME */ {getParameter: (parameter: string) => object}) => { // FIXME: due to a bug in the 1.116.0 types the parameters in the ODataListBinding$CreateCompletedEvent and a few others are missing
				if (event.getParameter("success")) {
					const path : string = (event.getParameter("context") as ODataContextBinding).getPath();
					this.getView().bindObject({path: path});
				} else {
					const text = this.bundle.getText("emptyCreateErrorText");
					const title = this.bundle.getText("emptyCreateErrorTitle");
					MessageBox.error(text, {
						title: title
					});
				}
			});
			binding.create({}, true /* bSkipRefresh */);

			MessageToast.show(this.bundle.getText("existingDataNotFound"), {duration: 5000});

		// UPDATE
		} else { // data found which can be accessed
			// detect error situation with multiple datasets for one person
			if (contexts.length > 1) {
				MessageBox.error(this.bundle.getText("moreThanOneDatasetFound"));
				return; // TODO: what?
			}
			const context = contexts[0];

			// ensure it is in draft state
			const isActive = context.getProperty("IsActiveEntity") as boolean;
			if (isActive) { // bring to draft/edit mode
				const operation = this.oDataModel.bindContext(
					"EventRegistrationService.draftEdit(...)",
					context
				);
				operation.execute()
				.then((oUpdatedContext : V4Context) => {
					this.getView().bindObject({
						path: oUpdatedContext.getPath(),
						parameters: {
							$expand: "FamilyMembers"
						}
					});
					MessageToast.show(this.bundle.getText("existingDataLoaded"), {duration: 5000});
				})
				.catch(() => {
					alert("draft edit failure");
				});
			} else { // already in draft/edit mode
				this.getView().bindObject({
					path: context.getPath(),
					parameters: {
						$expand: "FamilyMembers"
					}
				});
				MessageToast.show(this.bundle.getText("existingDraftLoaded"), {duration: 5000});
			}

			(this.byId("submitButton") as Button).setText(this.bundle.getText("updateButtonText"));
		}
	}

	public contextAvailable(path : string) : void {
		this.getView().bindElement({path: path});
	}

	public addFamilyMember() : void {
		const listBinding = this.byId("familyMembersTable").getBinding("items") as ODataListBinding;
		listBinding.create({});
	}

	public deleteFamilyMember(oEvent : UI5Event) : void {
		((oEvent.getSource() as Control).getBindingContext() as V4Context).delete("$auto").then(() => {
			// deletion success
		}, () => {
			// TODO: ignore deletion failure?
		});
	}

	public validateControl(control : Control) : void {
		if (control instanceof InputBase) {
			if (control.getRequired() && !control.getValue()) {
				control.fireValidationError({
					element: control,
					property: "value",
					message: this.bundle.getText("enterValue")
				});
			}
		}
	}

	public validateData() : string[] {
		const newObject = this.getView().getBindingContext().getObject() as Employee;

		// determine field names for validation dialog
		const bundle = this.bundle;
		const fields : Person = {
			LastName: bundle.getText("name"),
			FirstName: bundle.getText("firstName"),
			Birthday: bundle.getText("dateOfBirth")
		};

		// check for missing fields
		const missing = [];
		let prop : PersonProp;
		for (prop in fields) {
			if (!newObject[prop]) {
				missing.push(fields[prop]);
			}
		}

		// loop FamilyMembers
		for (let i = 0; i < newObject.FamilyMembers.length; i++) {
			const familyMember = newObject.FamilyMembers[i]
			const somethingThere = !!(familyMember.LastName || familyMember.FirstName || familyMember.Birthday);
			const somethingMissing = !(familyMember.LastName && familyMember.FirstName && familyMember.Birthday);
			if (somethingThere && somethingMissing) {
				missing.push(bundle.getText("validationFamilyMember", [i + 1]));
			}
		}

		// show validation errors (red borders) for all registration form controls with missing data
		if (missing.length > 0) {
			const controls = Core.byFieldGroupId("RegForm");
			controls.forEach((control) => {
				this.validateControl(control);
			});
		}

		return missing;
	}

	public onSubmit() : void {
		// run validation and report validation errors
		const missing = this.validateData();
		if (missing.length > 0) {
			const text = this.bundle.getText("validationText");
			const title = this.bundle.getText("validationTitle");
			MessageBox.alert(text + "\n- " + missing.join("\n- "), {title: title});
			return;
		}

		const context = this.getView().getBindingContext() as V4Context;

		/* omit this block as failing "draftActivate" is not expected (no data checks in backend) aand a failing PATCH would not be dramatic
		// ensure there are no pending changes (because otherwise with a failing "save" the last PATCH which might be in the same batch would also fail)
		if (oContext.hasPendingChanges()) {
			this.oDataModel.submitBatch("$auto"); // TODO: would we have to wait for the result?
		}
		*/

		// submit the person data
		(this.byId("submitButton") as Button).setEnabled(false);

		// trigger OData operation for persisting the draft as real data

		const operation = this.oDataModel.bindContext(
			"EventRegistrationService.draftActivate(...)",
			context
		);
		operation.execute()
		.then(() => {
			// navigate without hash change
			void UIComponent.getRouterFor(this).getTargets().display("confirmation"); // the "void" keyword indicates to ESLint that the promise result is intentionally not handled
		})
		.catch(() => {
			this.showErrorDialog()
		});
	}

	public showErrorDialog() : void {
		const text = this.bundle.getText("submitErrorText");
		const title = this.bundle.getText("submitErrorTitle");
		(this.byId("submitButton") as Button).setEnabled(true);
		MessageBox.error(text, {
			title: title
		});
	}

}
