sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
/**
 * @param {typeof import('sap/ui/core/mvc/Controller').default} Controller 
 */
function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.eventregistration.form.controller.App", {

		onInit : function () {
			// apply content density mode to root view
			var appComponent = /** @type {sap.ui.eventregistration.form.AppComponent} */ (this.getOwnerComponent());
			this.getView().addStyleClass(appComponent.getContentDensityClass());
		}
	});

});