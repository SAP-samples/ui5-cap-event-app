/* global hasher */
sap.ui.define(['sap/fe/core/AppComponent'], function(AppComponent) {
    'use strict';

    return AppComponent.extend('sap.ui.eventregistration.admin.Component', {
        metadata: {
            manifest: 'json'
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * The base AppComponent does most common things, we only add a listener for the Shell's logout button.
         * @public
         * @override
         */
        init : function () {
            // call the AppComponent's init function
            AppComponent.prototype.init.apply(this, arguments);

            // register for the Ushell's logout event
            sap.ushell.Container.attachLogoutEvent(this.doLogout);
        },

        /**
         * Logs out the current user
         */
        doLogout: function() {
            jQuery.ajax({
                type: "POST",
                url: "/odata/v4/event-registration/logout",
                async: false,
                headers: { "Authorization": "Basic xxx" }
            })
            .done(function() {
                // this should not happen, as the server returns a 4401 error code
            })
            .fail(function(err) {
                // 401 Unauthorized error means we are successfully logged out.
                // This causes the browser to forget the credentials.
                // Redirect to get a login box again.
                window.location = "/index.html";
            });
            return false;
        }
    });

});
