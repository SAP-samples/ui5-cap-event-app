/**
 * A helper class for creating the device model
 * @typedef models
 * @type {object}
 * @property {function} createDeviceModel
 */
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

	return {

		createDeviceModel : function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};

});