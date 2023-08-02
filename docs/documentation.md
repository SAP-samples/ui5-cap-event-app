# ui5-cap-event-app Documentation

A look at the most important implementation aspects of this sample app.

## Content

* [What's in for you?](#Whats-in-for-you)
* [Project Overview](#Project-Overview)
* [The Server (the CAP Service)](#The-Server-the-CAP-Service)
  * [Schema](#Schema)
  * [Registration Service](#Registration-Service)
  * [Sample Data](#Sample-Data)
  * [Login/Logout](#LoginLogout)
* [The Form UI (Freestyle App for End-User Registration)](#The-Form-UI-Freestyle-App-for-End-User-Registration)
  * [App Structure / Flow / Routing (and Other Manifest Settings)](#App-Structure--Flow--Routing-and-Other-Manifest-Settings)
  * [The Heart of the App: the Registration Controller](#The-Heart-of-the-App-the-Registration-Controller)
    * [Loading Data (Draft Handling)](#Loading-Data-Draft-Handling)
    * [Family Members](#Family-Members)
    * [Data Validation](#Data-Validation)
    * [Saving Data (Persisting the Draft)](#Saving-Data-Persisting-the-Draft)
* [The Admin UI (Fiori Elements Registration List)](#The-Admin-UI-Fiori-Elements-Registration-List)
* [Project Structure and Lifecycle](#Project-Structure-and-Lifecycle)
  * [Workspace Root](#Workspace-Root)
  * [CAP Server](#CAP-Server)
  * [Form UI](#Form-UI)
  * [Admin UI](#Admin-UI)
  * [Deployment](#Deployment)

## What's in for you?

This sample app helps you understanding how SAPUI5 and Node.js-based CAP can be used in a full-stack app, in particular with respect to the usage of OData V4 and its draft mode in a freestyle SAPUI5 user interface.

The scenario is an event registration app where people can register themselves and their family members for an imaginary event. Administrators can see and edit the registration list in a metadata-driven Fiori elements user interface.

## Project Overview

The project contains three packages: one for each of the two UIs, and one for the CAP server. Each package is self-contained and has its own `package.json`. The root `package.json` is managing the workspace and adds combined build and run scripts.

```text
package.json
packages
├── server                // the Node.js-based CAP server
│   └── package.json
├── ui-admin              // the admin UI based on SAP Fiori elements
│   └── package.json
└── ui-form               // the form UI based on freestyle SAPUI5
    └── package.json
```

Further details can be found in the [Project Structure](#Project-Structure) chapter.

## The Server (the CAP Service)

### Schema

The file [schema.cds](../packages/server/db/schema.cds) defines two simple managed entities: `Person` and `FamilyMember`.

It is important to model the `FamilyMember`s as a composition, not an association, to make sure that in draft mode they are all created and saved together. Compositions are self-contained and cannot exist without their parent.

```js
entity Person : managed {
  key ID         : UUID;
  FirstName      : String(100);
  LastName       : String(100);
  Email          : String(120);
  Birthday       : Date;
  FamilyMembers  : Composition of many FamilyMember on FamilyMembers.MainPerson = $self;
}
```

### Registration Service

[`eventregistration-service.cds`](../packages/server/srv/eventregistration-service.cds) exposes both entities from the schema and grants appropriate privileges to the two roles (`Admin` and `Employee`).

Employees can only read and update their own datasets (the e-mail address must be theirs). So their `READ` and `UPDATE` privileges are guarded with a `where` condition that compares the current user e-mail with the `Email` field of the dataset. Some operations, like `CREATE`, cannot have such dynamic conditions. In addition to the well-known CRUD operations, there are others which are specific for drafts: `NEW`, `EDIT`, `PATCH`, and `SAVE`. Note that we do not guarantee that the configured set of privileges is secure.

```js
    {
      grant : [   // Some privileges cannot be assigned with a dynamic "where" condition (or do not need to be)
        'CREATE',
        'NEW',    // for creating a draft from scratch
        'EDIT',   // for creating a draft from an existing element
        'PATCH',  // for modifying fields in a draft
        'SAVE'    // for persisting a draft into a real data element
      ],
      to : 'Employee'
    },
    {
      grant : [
        'READ',
        'UPDATE'
      ],
      to : 'Employee',
      where : 'Email = $user.id' // users can only see and modify their own data
    },

```

Administrators simply get all privileges (note the `WRITE` shortcut):
```js
    {
      grant : [
        'READ',
        'WRITE' // includes CREATE, UPDATE, DELETE, and all draft mode privileges
      ],
      to : 'Admin'
    }
```

The e-mail address is not entered by the user (and not editable in the UI), but added from user data on server side when a new dataset is created. This is happening in custom code in [`eventregistration-service.js`](../packages/server/srv/eventregistration-service.js):

```js
srv.on('NEW', 'Person', (req, next) => {
  req.data.Email = req.user.id; // add user e-mail to the dataset (not entered in the UI, but derived from logged-in user)
});
```

Mock authentication is used in this sample. The roles and users are defined in the file [`.csrc.json`](../packages/server/.cdsrc.json). Never use mock authentication (plaintext passwords!) in production scenarios! Only use [token-based authentication](https://cap.cloud.sap/docs/node.js/authentication#jwt) in production!

There are plenty of annotations describing the data in [`eventregistration-service-annotations.cds`](../packages/server/srv/eventregistration-service-annotations.cds). The most important ones:

* Translatable UI texts are referenced as `'{i18n>translationKey}'` and fetched from the respective language file in the [`_i18n`](../packages/server/_i18n) subdirectory.
* Draft mode is enabled by the statement: `annotate EventRegistrationService.Person with @odata.draft.enabled;`
* The `@Core.Computed` annotation for the Person ID prevents a popup (that asks for the ID)  from appearing in the metadata-driven UI when a person is created.
* Several UI annotations configure the appearance of the metadata-driven Fiori elements UI further. The `LineItem` section, for example, defines which properties appear in the Person list, and in which order. 

### Sample Data

In [sap.ui5.eventregistration-Person.csv](../packages/server/db/data/sap.ui5.eventregistration-Person.csv) and [sap.ui5.eventregistration-FamilyMember.csv](../packages/server/db/data/sap.ui5.eventregistration-FamilyMember.csv) some mock data is defined and automatically loaded on startup by CAP.
`Person`s and `FamilyMember`s are connected via the `MainPerson_ID` column in the latter CSV file, which points back to the ID of the person they belong to.

### Login/Logout

The mock authentication automatically causes browsers to open the basic authentication login dialog where users enter username and password. But logging out of basic authentication is not that easy - end-users even cannot do so using the standard browser UI elements.

To make browsers forget that the user is authenticated, the server needs to send an HTTP 401/Unauthorized error code for a request to the same directory level where the user actually *is* authorized.

To achieve this, a custom [`server.js`](../packages/server/server.js) file was created, which hooks into the CDS bootstrap and registers an additional route for [Express.js](https://expressjs.com/) (which is used by CAP under the hood):

```js
cds.on('bootstrap',(app) => {
    app.post("/odata/v4/event-registration/logout", (req, res) => {
        // Send 401 Unauthorized to tell the browser to forget the credentials.
        // NOTE: while this works for the sample app, it is not double-checked for 100% security! 
        res.status(401);
        res.send();
    });
});
```

A request to this URL can now be sent by the UI to logout the user.

Providing a custom `server.js` file normally requires the custom code to take over the entire startup of CDS. This can be avoided by returning the original `cds.server` as module exports:

```js
// Delegate bootstrapping to built-in server.js of CDS
module.exports = cds.server
```

## The Form UI (Freestyle App for End-User Registration)

The freestyle SAPUI5 app in the [`packages/ui-form`](../packages/ui-form) directory is meant for end-users to register themselves and their families for the event.

### App Structure / Flow / Routing (and Other Manifest Settings)

The "Registration" view and controller are the heart of this app. This view is displayed initially and it is where the user enters all the data.

Upon sending the data to the server, the `Confirmation` View is shown, containing just a success message and a logout button. The Confirmation controller implementation is empty, but needed for the logout button, which does `press=".getOwnerComponent().doLogout()"`, calling a method on the controller's base class.

In case there is an authentication problem, the `NotAuthorized` view is navigated to. It also offers a way to log out, as a new login can be attempted this way. The navigation is triggered in `Registration.controller.js` after the server response has been received. Just like the navigation to the confirmation page, this one navigates without changing the URL hash, because there is no point in making the `NotAuthorized` or `Confirmation` page bookmarkable:

```js
if (oError.status === 401 || oError.status === 403) { // 401 Unauthorized when user cancels login dialog, 403 Forbidden, when giving wrong credentials
	// navigate without hash change
	this.getOwnerComponent().getRouter().getTargets().display("notAuthorized");
}
```

The [manifest.json](../packages/ui-form/manifest.json) file contains the routing configuration with the mentioned targets: `Registration`, `Confirmation`, and `NotAuthorized`. There is only one route pattern registered, though: the one with empty URL hash pattern, pointing to the `Registration` view. This is because the navigation to those pages is done via API, with no hash change, because the user should not be able to enter the application at these pages.

The other interesting configuration in `manifest.json` is the `models` section, which after the resource model for translation texts configures the main model of the app, the OData V4 Model pointing to the CAP server.

```json
"models": {

	...

	"": {
		"dataSource": "eventregistration",
		"preload": true,
		"settings": {
			"groupId": "$auto",
			"synchronizationMode": "None",
			"operationMode": "Server",
			"autoExpandSelect": true
		}
	}
},
```

It points to the `eventregistration` datasource also defined in the manifest file, where the model type and version is defined and the URL `/event-registration/` is given, at which the server can be reached:

```json
"eventregistration": {
	"uri": "/event-registration/",
	"type": "OData",
	"settings": {
		"odataVersion": "4.0"
	}
}
```

But... why can the server be reached at this server-absolute URL? After all, the CAP server is running on a different port (`4004`)!  
The reason is this setting in [ui5.yaml](../packages/ui-form/ui5.yaml), where a forwarding proxy is registered for this url as custom middleware:

```yaml
server:
  customMiddleware:
  - name: ui5-middleware-simpleproxy
    mountPath: /event-registration/
    afterMiddleware: compression
    configuration:
      baseUri: http://localhost:4004/odata/v4/event-registration/ 
```

> Note that the proxy resides directly at the server root (`/event-registration`) to keep URLs in the UI5 application simple, while the forwarding target is the actual path (`/odata/v4/event-registration`) which is the default path prefix for v4 services since CAP version 7. Everything on the server uses the latter path, everything on the client side can talk to the shorter path.

The [Component.js](../packages/ui-form/Component.js) file only has typical boilerplate code, except for the `doLogout` function. This function is triggered by buttons in different views and sends a POST request to the custom Express.js route we registered earlier to send a `401` response and make the browser forget the current login. On error, which is the expected case here, the browser is redirected to `index.html`, which will restart the app and prompt the user to log in anew.

```js
doLogout: function() {
	jQuery.ajax({
		type: "POST",
		url: "/odata/v4/event-registration/logout",
		async: false,
		headers: { "Authorization": "Basic xxx" }
	})
	.done(function() {
		// this should not happen, as the server returns a 401 error code
	})
	.fail(function(err) {
		// 401 Unauthorized error means we are successfully logged out.
		// This causes the browser to forget the credentials.
		// Redirect to get a login box again.
		window.location = "/index.html";
	});
	return false;
}
```

### The Heart of the App: the Registration Controller

The Registration controller fulfills the following main tasks:

* Loading and saving data (incl. draft handling)
* Validating user input
* Some special support while entering data (aggregated family members)

#### Loading Data (Draft Handling)

With draft mode, any data entry can be either fully persisted or in "draft" state. When it is fully persisted and then edited again, both the persisted and the draft version exist in parallel on the server.

A normal data request to the server does not return any draft elements: only when the data is explicitly filtered for elements in draft state, it does. However, when this app is started, it is not known whether the current user has a persisted data element, one in draft mode, one element in each of these states, or no data yet at all. What the app needs is the data in draft mode, if it exists, or in persisted mode, if no draft version of the data element exists. Hence, loading the correct data element is not entirely trivial.

The solution is to use two filters:

1. A filter that only returns draft-mode elements (`IsActiveEntity === false`)
1. A filter that only returns data elements which have no sibling in draft mode (`SiblingEntity/IsActiveEntity === null` - `SiblingEntity` is a pointer to the other version of the data element within a persisted-and-draft pair of data)
When these filters are OR-combined, any matching data element is the one in the needed state.

```js
var oBinding = this.oDataModel.bindList("/Person");
var oIsDraftFilter = new Filter("IsActiveEntity", FilterOperator.EQ, false);
var oHasNoDraftSiblingFilter = new Filter("SiblingEntity/IsActiveEntity", FilterOperator.EQ, null);
var oDraftORNoDraftSiblingFilter = new Filter({
	filters: [oIsDraftFilter, oHasNoDraftSiblingFilter],
	and: false
});
oBinding.filter(oDraftORNoDraftSiblingFilter);
```

Then, the data element (context) is loaded. Note that on server side the access rules determine that each user may only see/load the data element(s) where the e-mail address is the user's e-mail address (which is filled automatically when data is created).

In theory there should be at most one matching element because the user can only create new data when there is no data saved by him/her yet. Otherwise the existing data is edited.
However, the app right now requests two data elements, just to be sure nothing went wrong.
Any `401` or `403` error during data access, which means the user is not properly logged in or is not allowed to access data, will navigate to the `notAuthorized` view, from where the user can re-login.

```js
oBinding.requestContexts(0, 2).then(function(aContexts) { // there should be only one. Request two to detect error situations.
	this.onExistingDataLoaded(aContexts);
}.bind(this)).catch(function(oError) {
	if (oError.status === 401 || oError.status === 403) { // 401 Unauthorized when user cancels login dialog, 403 Forbidden, when giving wrong credentials
		this.getOwnerComponent().getRouter().getTargets().display("notAuthorized");
	}
}.bind(this));
```

When the request for data returns successfully, another decision has to be taken: if there is no data for the user yet, a new data element has to be created. Otherwise, the existing data element needs to be used for editing. Editing a data element means yet another decision: if the data element is already in draft mode, it can be bound to the UI right away. If it is not in draft mode, it first has to be changed to draft mode.
Also, there is the mentioned check whether the server returns two data elements, which means something hasn't worked as expected. This is not really needed in a well-tested app, but a sort of relict from the original app scenario, where users could create multiple data elements initially.

Let's look at the different cases one by one:

When no data element was loaded, `oBinding.create()` is called to create a new data entry and the user is informed. The `create()` function only exists on a ListBinding in OData V4 model, so a ListBinding is created as the first step (without being actually used to bind a table or list-like UI against it). In the `createCompleted` event handler, the view is bound against the newly created data element in success case. In case of an error, the user is informed.

```js
// CREATE
if (!aContexts || aContexts.length === 0) { // no data for this user yet
	var oBinding = this.oDataModel.bindList("/Person");
	oBinding.attachCreateCompleted(function(oEvent) {
		if (oEvent.getParameter("success")) {
			this.getView().bindObject({path: oEvent.getParameter("context").getPath()});
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
```

In case existing data was successfully loaded, there is first the check whether more than one data element was loaded. For normal users this would be a problem with the app, but administrators can see all datasets. As the app UI does not explicitly set a filter for the current user's e-mail address (the e-mail address is not even known on client side), administrators will always get the two first of all datasets and get a special error message. The fact that they are admins is deduced from getting datasets with different e-mail addresses - only admins can see all.

```js
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
```

If only one data context is loaded, it's the one to edit. If in "active" mode (= not in draft mode), it has to switched to draft mode (inside the server this means a sibling copy in draft mode is created). This is done by executing an OData operation, named "draftEdit" by convention. Such an operation can be created by binding a new context named `EventRegistrationService.draftEdit(...)` on the loaded data element. The `execute()` method on such an operation returns a promise that resolves with the data context in draft mode, which then can be bound to the View.

```js
// ensure it is in draft state
var isActive = oContext.getProperty("IsActiveEntity"); // = non-draft
if (isActive) { // bring to draft/edit mode
	var oOperation = this.oDataModel.bindContext(
		"EventRegistrationService.draftEdit(...)",
		oContext
	);
	oOperation.execute()
	.then(function (oUpdatedContext) {
		this.getView().bindObject({path: oUpdatedContext.getPath()});
		MessageToast.show(this.oBundle.getText("existingDataLoaded"), {duration: 5000});
	}.bind(this))
	.catch(function() {
		alert("draft edit failure");
	});
} else { // already in draft/edit mode
	this.getView().bindObject({path: oContext.getPath()});
	MessageToast.show(this.oBundle.getText("existingDraftLoaded"), {duration: 5000});
}
```

#### Family Members

While data entry for the registering person him-/herself is trivial (the Input controls are just bound to the model), a bit of extra code is needed for handling the addition (and removal) of family members.

There is one button for adding more family members (= adding rows to the table), which is done with a straightforward call to the `create` function on the ListBinding:

```js
addFamilyMember: function (oEvent) {
	var oListBinding = this.byId("familyMembersTable").getBinding("items");
	oListBinding.create({});
},
```

For removing family members, there is a button in each row of the family member table, which triggers the removal of the family member this row contains. Because `oEvent.getSource()` returns the button residing in the respective row, one can simply call `getBindingContext` to get the binding context of this row, which is nothing else than the data element to remove. Calling `delete` on this context is everything to update the data and the bound UI. Error handling *could* be added here.

```js
deleteFamilyMember: function(oEvent) {
	oEvent.getSource().getBindingContext().delete("$auto").then(function () {
		// deletion success
	}.bind(this), function (oError) {
		// TODO: ignore deletion failure?
	});
},
```

#### Data Validation

Very basic client-side validation is applied to the entered data: each field must contain some data. An entry for family members is also accepted when NO data has been entered into any field for this specific family member (it is assumed that the user just pressed "add family member" once too much).

There are two triggers for validation:

1. When any of the fields looses focus, it is checked whether this field contains data. If not, the field gets a red border.
2. When the user submits the data, all fields are checked. If any fields are lacking data, they all get a red border, plus there is a dialog listing all the missing data.

The focus registration for each field happens in the `onInit()` method of the controller by adding an event delegate to each control, which listens to the "`sapfocusleave`" and "`sapenter`" pseudo events:

```js
// listen to focusleave and enter on the fields to validate the user input
var aControls = sap.ui.getCore().byFieldGroupId("RegForm");
aControls.forEach(function(oControl) {
	oControl.addEventDelegate({
		onsapfocusleave: this.validateControl.bind(this, oControl),
		onsapenter: this.validateControl.bind(this, oControl)
	});
}.bind(this));
```

The red border is activated in the `validateControl` method by firing a validation error after a sanity check for the control type and a check whether the field is required and empty:

```js
if (oControl instanceof InputBase) {
	if (oControl.getRequired() && !oControl.getValue()) {
		oControl.fireValidationError({
			element: oControl,
			property: "value",
			message: this.oBundle.getText("enterValue")
		});
	}
}
```

The overall validation method called on submit (`validateData`) method also calls this method for all controls to get all needed red borders. But it also loops all needed fields on its own (yes, there is some redundancy...) with appropriate descriptions of each field to display to the user. Note that it looks at the data in the model, not in the control instances (unlike `validateControl`). There is no particular reason for this, though. The data is just a bit easier to access from the respective starting point. A map is initialized with the data fields to check and the respective text to display from the translation file in case the data is missing:

```js
var mFields = {
	LastName: oBundle.getText("name"),
	FirstName: oBundle.getText("firstName"),
	Birthday: oBundle.getText("dateOfBirth")
}
```

For a family member, as mentioned, there is only an error when *some* data has been entered, but *some* is missing for a particular row. There is also not a specific text for each field, but just one for the entire row:

```js
// loop FamilyMembers
for (var i = 0; i < oNewObject.FamilyMembers.length; i++) {
	var oFamilyMember = oNewObject.FamilyMembers[i]
	var bSomethingThere = !!(oFamilyMember.LastName || oFamilyMember.FirstName || oFamilyMember.Birthday);
	var bSomethingMissing = !(oFamilyMember.LastName && oFamilyMember.FirstName && oFamilyMember.Birthday);
	if (bSomethingThere && bSomethingMissing) {
		aMissing.push(oBundle.getText("validationFamilyMember", [i + 1]));
	}
}
```

`aMissing` is finally an array containing a well-understandable desription for each missing piece of data. If any text is returned in this array, after `validateData` has been called at the beginning of `onSubmit`, the data submission is aboted and the error texts are shown in a MessageBox:

```js
// run validation and report validation errors
var aMissing = this.validateData();
if (aMissing.length > 0) {
	var sText = this.oBundle.getText("validationText");
	var sTitle = this.oBundle.getText("validationTitle");
	MessageBox.alert(sText + "\n- " + aMissing.join("\n- "), {title: sTitle});
	return;
}
```

#### Saving Data (Persisting the Draft)

When the user has pressed the "Submit" button and validation has succeeded, the data is saved.

Well, actually that's wrong: the data has been saved all the time, as the user entered field by field, each change was sent to the server with a PATCH request. All those changes have been applied to the draft element of the data. This means the user could close the browser window at any time, without loosing data, and resume data entry later. So what actually happens when the user presses the "Submit" button is that the draft data is "activated" - transferreed from the draft data element into a new or already existing fully persisted data element.

Like switching data to draft mode, this again happens by creating an OData operation and executing it. This time it's `EventRegistrationService.draftActivate(...)`.

```js
// submit the person data
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
```

Upon success, the router is navigating to the "confirmation" page. In case of error, a Dialog is shown and the user remains on the data entry page, so there is a chance to try again without loosing all the entered data.

In the original app which served as inspiration for this sample app, the very first issue observed in productive use was lots of identical data sets being received by the server within fractions of a second. This was likely caused by people double-clicking the "Submit" button. As there is no standard mechanism in UI5 to prevent very quick subsequent clicks, the `onSubmit` method was just called twice. As this original app did not use draft mode, but created a new data element in `onSubmit`, this triggered the creation of two separate data elements in the backend.
Hence, in the beginning of the code snippet above, the "Submit" button is disabled to prevent such a double-click effect. In case of an error (in `showErrorDialog`) the button is re-enabled, so the users has a chance to re-try.

## The Admin UI (Fiori Elements Registration List)

The admin UI is based on [SAP Fiori elements for OData V4](https://blogs.sap.com/2020/03/17/fiori-elements-floorplans-for-odata-v4-coming-soon/). The application is generated with the [SAP Fiori tools](https://blogs.sap.com/2020/06/22/sap-fiori-tools-is-generally-available.-increase-the-efficiency-of-developing-sap-fiori-elements-apps/) which can be used in [SAP Business Application Studio](https://blogs.sap.com/2020/02/27/sap-business-application-studio-is-generally-available/) (the successor of SAP Web IDE) or in Visual Studio Code. The result is a minimal set of files with the configuration needed by the generic floorplan implementation. All other information is derived from the CAP service metadata.

The few files comprising the app are:

* just two translatable texts in the [`i18n`](../packages/server/ui-admin/webapp/i18n) directory
* an almost empty [`Component.js`](../packages/server/ui-admin/webapp/Component.js) file (only the logout method explained earlier in the Form UI app has some lines of code)
* an [`index.html`](../packages/server/ui-admin/webapp/index.html) file which is  needed for running the app locally in a sandbox
* the [`the manifest.json`](../packages/server/ui-admin/webapp/manifest.json) file. Even this content looks largely standard, pointing to the data service as described before for the Form UI app.

Some parts of `manifest.json` are worth a look, though, to understand how the generic floorplan is configured:  
The default routing target, the "PersonList", is not a View, but a Component. And it's not a Component provided as part of the app, but one named "sap.fe.templates.ListReport", which comes with SAPUI5 and is the generic ListReport floorplan. In the "options" block of the manifest, there are some floorplan-specific settings, most importantly the entity set to display ("Person").  
In the "controlConfiguration" section, there are even settings configuring the appearance of a single SAPUI5 control: the main table in the floorplan should be a responsive one (the `sap.m.Table`, not the `sap.ui.table.Table` grid table) and spreadsheet export in this Table should be enabled.

```json
"targets": {
	"PersonList": {
		"type": "Component",
		"id": "PersonList",
		"name": "sap.fe.templates.ListReport",
		"options": {
			"settings": {
				"entitySet": "Person",
				"variantManagement": "Page",
				"initialLoad": true, 
				"controlConfiguration": {
					"@com.sap.vocabularies.UI.v1.LineItem": {
						"tableSettings": {
							"type": "ResponsiveTable",
							"enableExport": "true"
						}
					}
				},   
				"navigation": {
					"Person": {
						"detail": {
							"route": "PersonObjectPage"
						}
					}
				}
			}
		}
	}
```

All other needed information to compose the UI comes from the CAP service metadata, e.g. the list of fields to display and their data types, the translated texts maintained in the annotations, etc. 

Behind the scenes, it's the controls of the still-under-development "[sap.ui.mdc](https://github.com/SAP/openui5/tree/master/src/sap.ui.mdc)" ("metadata-driven controls") library, together with OData-V4-specific delegates doing all the interpretation of the OData metadata and annotations.

## Project Structure and Lifecycle

The project is organized as mono repository using [Yarn 1.x](https://classic.yarnpkg.com/) workspaces. This allows to have multiple packages in a single GitHub repository, manage, and link them via Yarn. The project structure looks like this:

```text
package.json
packages
├── server                // the Node.js-based CAP server
│   ├── app               //   - UI resources
│   ├── db                //   - schema and mock data
│   ├── srv               //   - service definitions
│   ├── .cdsrc.json
│   ├── package.json
│   └── server.js
├── ui-admin              // the admin UI based on SAP Fiori elements
│   ├── webapp            //   - UI5 application resources
│   ├── package.json
│   └── ui5.yaml
└── ui-form               // the form UI based on freestyle SAPUI5
│   ├── webapp            //   - UI5 application resources
│   ├── package.json
│   └── ui5.yaml
```

There is a `package.json` in the workspace root and each package is located in the `packages` folder, is self-contained, and has its own `package.json`.

### Workspace Root

In the workspace root a `package.json` is located which contains the metadata for the Yarn workspace. Looking into the `package.json` besides the regular metadata (`name`, `version`, ...) and the `dependencies` section, the `workspaces` section defines the packages which belong to the workspace. This project follows the best-practices of Yarn workspaces and maintains the packages inside the `packages`folder.

```json
{
  "name": "ui5-cap-event-app",
  "version": "0.0.0",
  "description": "UI5 CAP Event Application",
  "private": true,
  "scripts": {
    [...]
  },
  "workspaces": [
    "packages/*"
  ],
  "dependencies": {
    [...]
  }
}
```

Additionally, the workspace root is a *private* package which must not be published on the npm registry. Therefore, the package is marked as `private`.

To simplify the handling of the mono repository, the `package.json` in the workspace root provides npm scripts to build, to debug, or to start the project.

```json
{
  [...]
  "scripts": {
    "build": [...],
    "start": [...],
    "debug": [...]
  },
  [...]
}
```

The npm scripts can be called with Yarn via: `yarn build`, `yarn start`, or `yarn debug`. All those npm scripts are using [npm-run-all](https://www.npmjs.com/package/npm-run-all) to run *sub-scripts* sequential or in parallel.

Most of the *subscripts* are using the `yarn workspace` command to run the npm scripts of the concrete package, e.g. `yarn workspace ui5-cap-event-app-ui-form start` runs the `yarn start` script in the `ui5-cap-event-app-ui-form` which is the package name of the `packages/ui-form` package.

The following snippet visualizes the **`build`** script execution:

```text
                                                      build:server:copy-app
                                build:server          build:server:copy-cdsrc
build   >>   build:clean   >>   build:ui-form    >>   build:server:copy-gen
                                build:ui-admin        build:ui-form:copy
                                                      build:ui-admin:copy
```

First, the `build` script cleans the `dist` folder, then it builds the CAP server, the form UI, and the admin UI in parallel and finally it copies the build results from the individual packages into the `dist` folder.

The build result in the `dist` folder looks like this:

```text
dist
├── app                // application resources
│   ├── admin          //   - admin UI
│   │   └── ...        //     -> UI5 resources
│   ├── form           //   - form UI
│   │   └── ...        //     -> UI5 resources
│   └── index.html     // sandbox Fiori launchpad
├── srv                // service resources
│   └── ...            //   - schema, annotations, i18n texts
├── .cdsrc.json        // runtime configuration for CDS
├── package.json
└── server.js          // extensions to the CDS server
```

The following snippet visualizes the **`start`** script execution:

```text
             start:server
start   >>   start:ui-form
             start:ui-admin
```

First, the `start` script just starts the CAP server, the form UI, and the admin UI in parallel. The form UI is then running on http://localhost:8080/index.html, the admin UI on http://localhost:8081/index.html, and the CDS server on http://localhost:4004/.

The following snippet visualizes the **`debug`** script execution:

```text
             debug:server
debug   >>   start:ui-form
             start:ui-admin
```

First, the `debug` script just starts the CAP server in debug mode, the form UI, and the admin UI in parallel. The form UI is then running on http://localhost:8080/index.html, the admin UI on http://localhost:8081/index.html, and the CDS server on http://localhost:4004/.

### CAP Server

The CAP server package follows the basic structures of CAP projects. More details about CAP development can be found [here](https://cap.cloud.sap/docs/).

The following snippet shows the structure of the CAP server package:

```text
packages/server
├── _i18n              // i18n resources for the service annotations
├── app                // application resources
│   └── sandbox.html   // sandbox Fiori launchpad
├── srv                // service resources
│   └── ...            //   - schema, service annotations, service extensions
├── .cdsrc.json        // runtime configuration for CDS
├── package.json
└── server.js          // extensions to the CDS server
```

As the project is setup as a mono repository the overall project will be run with the `package.json` scripts from the workspace root. But the workspace root scripts are calling the scripts from the local `package.json` with the `yarn workspace` command. The CAP server package contains the following scripts:

```json
{
  "name": "ui5-cap-event-app-server",
  [...]
  "scripts": {
    "cds:build": "cds build",
    "cds:start": "cds run",
    "cds:watch": "cds watch",
    "cds:debug": "node --inspect bin/cds run",
    "cds:debug-brk": "node --inspect-brk bin/cds run",
    "start": "npm run cds:start"
  },
  [...]
}
```

The `package.json` contains scripts to build, start, watch or debug the CAP server. In the workspace root, only the build and start script it beeing used.

To run just a single script (e.g. `cds watch` for development) of the CAP server project from within the workspace root, just run `yarn workspace ui5-cap-event-app-server cds:watch`.

### Form UI

The Form UI package follows the best practices for UI5 freestyle development and has been created with the [Yeoman SAPUI5 templates](https://www.npmjs.com/package/@sapui5/generator-sapui5-templates) as explained in the blog post [UI5 Tooling: a modern development experience for UI5](https://blogs.sap.com/2020/04/07/ui5-tooling-a-modern-development-experience-for-ui5/). The UI projects require the [UI5 Tooling](https://sap.github.io/ui5-tooling/) to start the development server to run the UI5 applications during development time and to finally build the projects to prepare them for deployment.

The following snippet shows the structure of the Form UI package:

```text
packages/ui-form
├── webapp              // UI5 application resources:
│   ├── controller      //   -> controller code
│   ├── i18n            //   -> i18n resources
│   ├── model           //   -> model-related code
│   ├── view            //   -> views
│   ├── Component.js    //   -> Component controller
│   ├── index.html      //   -> entry point
│   └── manifest.json   //   -> Component manifest
├── package.json
└── ui5.yaml            // UI5 Tooling metadata
```

More details about the project structure can be found in the UI5 demokit section: [Folder Structure: Where to Put Your Files](https://ui5.sap.com/#/topic/003f755d46d34dd1bbce9ffe08c8d46a).

The Form UI package also contains a `package.json` defining the basic scripts needed to build and run the UI5 application:

```json
{
  "name": "ui5-cap-event-app-ui-form",
  [...]
  "scripts": {
    "build": "ui5 build --clean-dest",
    "start": "ui5 serve --port 8080"
  },
  [...]
}
```

The build script is running the `ui5 build` command with the option `--clean-dest` to ensure having a clean `dist` folder into which the UI5 Tooling by default builds the project. The `ui5 build` command is creating a preload bundle for the component which is essential for productive usage to improve the loading performance. To just run the build step individually you can use the `yarn workspace` command `yarn workspace ui5-cap-event-app-ui-form build` from the workspace root. This produces the following output:

```text
packages/ui-form
└── dist                        // UI5 application resources:
    ├── controller
    ├── i18n
    ├── model
    ├── resources
    │   └── sap-ui-version.json //   -> Version metadata
    ├── view
    ├── Component-dbg.js        //   -> Component controller (sources)
    ├── Component-preload.js    //   -> Component preload bundle
    ├── Component.js            //   -> Component controller (minifed)
    ├── index.html
    └── manifest.json
```

*Remark:* for the sake of simplicity, UI5 is loaded from CDN rather than using the local UI5 resources which are available as npm dependencies via the development server of the UI5 Tooling. To use the local UI5 resources you can change the `src` attribute of the UI5 bootstrap tag to `resources/sap-ui-core.js`.

```html
<!DOCTYPE html>
<html>
<head>

  [...]

  <script id="sap-ui-bootstrap"
          src="https://ui5.sap.com/1.116.0/resources/sap-ui-core.js"
```

Another important aspect is the development server of the UI5 Tooling used to serve the UI5 applications at development time. The UI5 Tooling can be extended with custom middlewares to improve the development experience or to proxy OData services. For the Form UI project we are using the [ui5-middleware-livereload](https://www.npmjs.com/package/ui5-middleware-livereload) to improve the development experience by getting a save and update behavior (once a resource has been changed and saved in your editor, the UI5 application is reloaded) and [ui5-middleware-simpleproxy](https://www.npmjs.com/package/ui5-middleware-simpleproxy) to proxy the CAP server running on port `4004` to avoid [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues.

To use those custom middlewares, they need to be imported in the `package.json` and declared as UI5 dependencies:

```json
{
  "name": "ui5-cap-event-app-ui-form",
  [...]
  "devDependencies": {
    "ui5-middleware-livereload": "^0.4.3",
    "ui5-middleware-simpleproxy": "^0.5.1"
  },
  "ui5": {
    "dependencies": [
      "ui5-middleware-simpleproxy",
      "ui5-middleware-livereload"
    ]
  }
}
```

In addition, they need to be added to the development server by declaring the custom middlewares in the UI5 project metadata `ui5.yaml`:

```yaml
specVersion: "2.0"
metadata:
  name: sap.ui.eventregistration.form
type: application
[...]
server:
  customMiddleware:
  - name: ui5-middleware-simpleproxy
    mountPath: /event-registration/
    afterMiddleware: compression
    configuration:
      baseUri: http://localhost:4004/odata/v4/event-registration/
      removeETag: true
  - name: ui5-middleware-livereload
    afterMiddleware: compression
    configuration:
      debug: true
      extraExts: "xml,json,properties"
      port: 35729
      path: "webapp"
```

The `ui5-middleware-simpleproxy` is proxying all requests to `/event-registration` to `http://localhost:4004/odata/v4/event-registration`. With the option `removeETag` we ensure that the express server running behind the scenes is not adding an ETag to the response, which causes issues at runtime.

The `ui5-middleware-livereload` is monitoring the `webapp` folder for changes. The option `extraExts` extends the monitoring for some additional file extensions which are not monitored by default but used for UI5 application development.

### Admin UI

The Admin UI package follows the best practices for SAP Fiori elements development and has been created with the [SAP Fiori tools](https://blogs.sap.com/2020/06/22/sap-fiori-tools-is-generally-available.-increase-the-efficiency-of-developing-sap-fiori-elements-apps/).

The following snippet shows the structure of the Admin UI package:

```text
packages/ui-admin
├── webapp              // UI5 application resources:
│   ├── i18n            //   -> i18n resources
│   ├── Component.js    //   -> Component controller
│   ├── index.html      //   -> entry point
│   └── manifest.json   //   -> Component manifest
├── package.json
└── ui5.yaml            // UI5 Tooling metadata
```

The Admin UI has no MVC artifacts, as it is completely driven by the OData metadata and annotations. It is based on the [List Report Floorplan](https://experience.sap.com/fiori-design-web/list-report-floorplan-sap-fiori-element/).

The Admin UI package also contains a `package.json` defining the basic scripts needed to build and run the SAP Fiori elements application:

```json
{
  "name": "ui5-cap-event-app-ui-admin",
  [...]
  "scripts": {
    "build": "ui5 build --clean-dest",
    "start": "ui5 serve --port 8081"
  },
  [...]
}
```

The build script is running the `ui5 build` command with the option `--clean-dest` to ensure having a clean `dist` folder into which the UI5 Tooling by default builds the project. The `ui5 build` command is creating a preload bundle for the component which is essential for productive usage to improve the loading performance. To just run the build step individually you can use the `yarn workspace` command `yarn workspace ui5-cap-event-app-ui-admin build` from the workspace root. This produces the following output:

```text
packages/ui-admin
└── dist                        // UI5 application resources:
    ├── i18n
    ├── resources
    │   └── sap-ui-version.json //   -> Version metadata
    ├── Component-dbg.js        //   -> Component controller (sources)
    ├── Component-preload.js    //   -> Component preload bundle
    ├── Component.js            //   -> Component controller (minifed)
    ├── index.html
    └── manifest.json
```

Similar like for the Form UI, the Admin UI is bootstrapping from CDN for the sake of simplicity and uses custom middlewares to improve the development experience and to proxy the OData service to overcome cross-domain issues.


### Deployment

The deployment, e.g. to CloudFoundry, is not in scope of this sample app - we had to stop somewhere and the focus is on the interaction between UI5 and CAP and on using OData V4 with draft mode.
Helpful information around the deployment can be found in many blog posts like this one: [Developing a Fiori elements app with CAP and Fiori Tools](https://blogs.sap.com/2020/09/06/developing-a-fiori-elements-app-with-cap-and-fiori-tools/).
If you want to extend the sample, making it ready for deployment, you are welcome to contribute!
There are several aspects to consider, e.g. the database and the authentication (incl. logout). 
