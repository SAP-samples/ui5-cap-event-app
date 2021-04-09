import Controller from "sap/ui/core/mvc/Controller";
import AppComponent from "../Component";

/**
 * @namespace sap.ui.eventregistration.form.controller
 */
export default class AppController extends Controller {

	public onInit() {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent<AppComponent>().getContentDensityClass());
	};

};
