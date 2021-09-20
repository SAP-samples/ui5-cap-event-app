sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
],
/**
 * @param {typeof import('sap/ui/model/json/JSONModel').default} JSONModel
 * @param {import('sap/ui/Device').default} Device
 */
function (JSONModel, Device) {
	"use strict";

	/**
	 * @module sap/ui/eventregistration/form/models
	 */
	return {

		createDeviceModel : function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};

});