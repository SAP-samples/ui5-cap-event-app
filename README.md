# ui5-cap-event-app - JavaScript with TypeScript Support

This `js-with-typescript-support` branch of the "UI5 CAP Event App" repository demonstrates how the UI5 TypeScript type definitions can provide type checking and code assist even when developing your UI5 app in regular JavaScript.

<b>Overall, the central entry point for all TypeScript-related information, documentation, samples, tutorials etc. about UI5 can be found at [https://sap.github.io/ui5-typescript](https://sap.github.io/ui5-typescript/).</b>

For general information about the app and for setup instructions and requirements, please check the [main branch](../../tree/main).

# Table of Content

- [Overview](#overview)
- [Applying TypeScript Benefits to a JavaScript Application](#applying-typescript-benefits-to-a-javascript-application)
  * [Requirements](#requirements)
  * [Basic Setup](#basic-setup)
    + [Add Needed Dependencies](#add-needed-dependencies)
    + [Add the `tsconfig.json` File](#add-the-tsconfigjson-file)
    + [Try the Setup](#try-the-setup)
    + [Add a Check Script](#add-a-check-script)
  * [Get Rid of the Initial Errors](#get-rid-of-the-initial-errors)
  * [Provide Type Information for Loaded Dependencies](#provide-type-information-for-loaded-dependencies)
  * [Fix the First Real Type Errors](#fix-the-first-real-type-errors)
    + [Cast Generic Return Types](#cast-generic-return-types)
    + [Define Custom Data Structures](#define-custom-data-structures)
    + [Define Types for App Classes/Modules](#define-types-for-app-classes-modules)
    + [Fix Actual App Code Issues](#fix-actual-app-code-issues)
    + [Ignore the Rest](#ignore-the-rest)
  * [A Moment of Reflection](#a-moment-of-reflection)
  * [Tighter Typing](#tighter-typing)
    + [Type the Method Parameters](#type-the-method-parameters)
    + [Refine the Custom Types](#refine-the-custom-types)
    + [Fix Further Issues](#fix-further-issues)
  * [Even Stricter Type Checking](#even-stricter-type-checking)
    + [Fix the 'this' Context Errors](#fix-the--this--context-errors)
    + [Fix the 'arguments' Errors](#fix-the--arguments--errors)
  * [Make the Checks Even Stricter](#make-the-checks-even-stricter)
    + [Fix the Member Variable Errors](#fix-the-member-variable-errors)
    + [Fix the Other "possibly 'undefined'" Errors](#fix-the-other--possibly--undefined---errors)
  * [Done!](#done-)
- [Running the Project](#running-the-project)
- [How to obtain support](#how-to-obtain-support)
- [License](#license)

# Overview

This document contains step-by-step instructions how even a standard JavaScript application project can benefit from TypeScript features like type checking and automatic code completion as you type.

Editors like [Visual Studio Code](https://code.visualstudio.com/) (the one used in this document) can apply knowledge from type definition files (like the ones describing the UI5 APIs) even to standard JavaScript code. For a very limited subset of the JS code, these benefits are available immediately after simply importing the type definitions. But the coverage can be greatly increased by giving hints about variable types to the editor, using JSDoc comments.

By tweaking the TypeScript check strictness, application developers can choose how much type safety they want - and how much effort they are willing to invest in turn, to let the editor know about the used types. Therefore, this document starts with loose settings requiring minimal effort and increases the strictness in several steps. It then explains the typical changes needed to get rid of the new TypeScript errors popping up in the stricter level.

In essence, this is a way to gradually apply almost full type safety, starting from a pure untyped JavaScript application. Without the need for a build step like the one required with actual TypeScript.

As additional benefit, the resulting JavaScript application could also be easily converted to real TypeScript if desired: just convert the added JSDoc type comments to the respective TypeScript syntax and [set up the transpilation step](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md).


# Applying TypeScript Benefits to a JavaScript Application

## Requirements

1. A [nodeJS](https://nodejs.org/) develoment environment and a modern code editor which supports typing JavaScript using TypeScript information, like e.g. MS [Visual Studio Code](https://code.visualstudio.com/)
2. A JavaScript application you want to develop with additional help from TypeScript. You can either use your own app of choice or clone the original "[UI5 CAP Event App](https://github.com/SAP-samples/ui5-cap-event-app)" (`main` branch, which is still in JavaScript). This sample app provided by the UI5 team is used in this document:<br>
`git clone https://github.com/SAP-samples/ui5-cap-event-app.git`<br>
This app uses [yarn](https://yarnpkg.com/) for dependency management, so yarn is used below, but for npm-based apps, the same can of course be done with [npm](https://www.npmjs.com/).

## Basic Setup

### Add Needed Dependencies

First, to have the TypeScript engine available, the `typescript` package needs to be installed as dev dependency.

Depending on your project structure, this can happen at top-level, or in a single sub-project of a monorepo if TypeScript-based code assist should only be used there. In case of the UI5 CAP event app, the latter is the case, so first:
```sh
cd packages/ui-form
```

Or if you not have entered the project directory yet after cloning from GitHub, do this instead:
```sh
cd ui5-cap-event-app/packages/ui-form
```

Then trigger the actual dev dependency installation:

```sh
yarn add typescript --dev
```

The [UI5 type definitions](https://www.npmjs.com/package/@sapui5/types) need to be installed as dev dependency as well. You should choose the same major/minor version of the type definitions as used by your application code. (If this is not possible because you are working with an older version of UI5 at runtime, you can also try using a higher version of the type definitions, but be aware that some of the proposed APIs might not exist in your actually used UI5 version.)

```sh
yarn add @sapui5/types@1.116.0 --dev
```

NOTE: we are working with the new "-esm" flavor of the type definitions. This has advantages but also disadvantages when developing in JavaScript, so you might also choose the `@sapui5/ts-types` package instead:
 * Advantage: the `types` packages are the best-quality type definition files, the ones the UI5 team is focusing on. While the `ts-types` packages are also automatically updated with every new UI5 release, there might be some TypeScript glitches inside which are not fixed with priority.
 * Disadvantage: The "-esm" definitions define only ES6 modules, not the legacy global names of UI5 classes (like "sap.m.Button" in the global namespace). This makes referencing types in the JSDoc comments a bit ugly. Instead of `@type {sap.m.Button}` one has to write `@type {import('sap/m/Button').default}`.

We are using the SAPUI5 type definitions in this document, but if you are only using controls contained in OpenUI5, you can also just use the OpenUI5 type definitions ([`@openui5/types`](https://www.npmjs.com/package/@openui5/types) or `@types/openui5`).


### Add the `tsconfig.json` File

Create a file named `tsconfig.json` at the appropriate location: in a one-app project with the `webapp` folder residing directly in the root of the repository, this location for `tsconfig.json` would be the root directory of the project. In a multi-app monorepo like this demo application, the appropriate place might rather be the root of one specific sub-package. We have already decided for the `packages/ui-form` sub-project, so we go for this location.

Paste the following content into the file, but pay attention to some of the entries:
* The `typeRoots` entry should properly point to the UI5 type definitions as installed by yarn. In this app, the node_modules folder is on top-level, as managed by yarn, so it is two levels above the tsconfig.json. The other entry similarly points to the standard @types folder. When using the `@types/openui5` package, the entire `typeRoots` entry is not needed.
* While many of the flags in the middle part relate to the check strictness and could also be used with the opposite value (some will actually be toggled later!), you MUST make sure that `allowJs` and `checkJs` are set to `true` - otherwise JS code will not profit from type knowledge.
* Make sure the `include` section matches the files you want to cover.
* In the `paths` section, you may maintain application namespaces, just like they are also configured with UI5. This might help with addressing local app modules by their "official" name.

```json
{
	"compilerOptions": {
		"typeRoots": [
			"../../node_modules/@sapui5/types",
			"../../node_modules/@types"
		],
		"target": "ES2017",
		"lib": [
			"ES2017",
			"DOM"
		],
		"noEmit": true,
		"skipLibCheck": true,
		"module": "none",
		"allowJs": true,
		"allowSyntheticDefaultImports": true,
		"checkJs": true,
		"noFallthroughCasesInSwitch": true,
		"noImplicitReturns": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"strict": false,
		"strictNullChecks": false,
		"noImplicitAny": false
	},
	"include": [
		"webapp/**/*.js"
	],
	"paths": {
		"sap/ui/eventregistration/form/*": [
			"./webapp/*"
		]
	}
}
```

### Try the Setup

Run the following command in your terminal to execute the first TypeScript check (from the directory where tsconfig.json resides):

```sh
npx tsc --noEmit
```

As result, you should get a list of errors.


### Add a Check Script

To make checking the types easier, add the following line to the `scripts` section in the `package.json` file (the one inside `packages/ui-form`):

```
"typecheck": "tsc --noEmit"
```

As result, you can now simply execute the following in your terminal inside `packages/ui-form` to manually trigger the type check:

```sh
yarn typecheck
```

But even when not doing so, the editor will also highlight any errors inline! You will likely use both ways of checking for errors.


## Get Rid of the Initial Errors

It makes sense to get the initially displayed errors out of the way before starting to add type information. Of course, the list of initial errors will vary between apps. In case of the event app, there are eight at the time of writing (this may vary over time as the original app is modified):

* Four issues are about variables which are declared but never used (parameters of anonymous functions). Simply remove the variable declarations. You could also change the respective TypeScript compiler setting to make this a non-error.

* Three are about certain methods not existing on "type 'onInit'". They are caused by TypeScript not understanding the UI5 way of inheriting from another class. In this specific case, they are in the Registration controller. The solution is to replace the UI5 way (`Controller.extend(...)`) with standard ES6 JavaScript classes:
   ```js
    class RegistrationController extends Controller {
        onInit() {
            ...
        }
   ```

   Note how the syntax of declaring the methods changes! No `function` keyword anymore, no colon, no comma. Do it for all methods and don't forget to return the new class in the end after it has been defined!

   ```js
   return RegistrationController;
   ```

   > Using ES6 classes will not work for all UI5 entities and will make them have no metadata, but it works for this simple controller.


You might have other issues in your own app, but at the end of this step, `yarn typecheck` should finish with no errors.

You have an app now which is type-checked by TypeScript! BUT if you look closely, most variables have type "`any`" which essentially means that they may contain values of any type and are excluded from being type-checked. Also the code-assist won't work for them because TypeScript doesn't know their type.


## Provide Type Information for Loaded Dependencies

You now need to provide type information, so TypeScript can do its job. The best place to start is the loaded dependencies. After all, they represent well-known UI5 classes and once they are known to TypeScript, it can also derive the types of return values when calling methods on these classes.

How do you provide type information without using TypeScript? Type information written in JSDoc comments is also understood by the TypeScript compiler!

Depending on the flavor of type definitions you are using ("-esm" with modules or the ones where all UI5 classes are available in the global namespace), there are two different ways how a type can be referenced:
1. With globals, the global name can be used, which is pretty straightforward:<br>
`@type {sap.ui.core.mvc.Controller}`
2. The "-esm" type definitions only declare the paths of ES6 modules. To derive a type, the respective module needs to be imported and the default export of the module needs to be selected:<br>
`@type {import('sap/ui/core/mvc/Controller').default}`


In case of `sap.ui.require(...)` and `sap.ui.define(...)` calls, the parameters given to the callback function are not <i>instances</i> of `Controller` and other UI5 classes, but the parameters are the <i>types/classes</i> themselves! Hence an additional `typeof` operator needs to be added when specifying the types of the callback parameters.

So go to all `sap.ui.require(...)` and `sap.ui.define(...)` calls and specify the types of the loaded dependencies within a JSDoc comment, as seen in this example:

```js
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/InputBase",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
/**
 * @param {typeof import('sap/ui/core/mvc/Controller').default} Controller
 * @param {typeof import('sap/m/MessageBox').default} MessageBox
 * @param {typeof import('sap/m/MessageToast').default} MessageToast
 * @param {typeof import('sap/m/InputBase').default} InputBase
 * @param {typeof import('sap/ui/model/Filter').default} Filter
 * @param {typeof import('sap/ui/model/FilterOperator').default} FilterOperator
 */
function (Controller, MessageBox, MessageToast, InputBase, Filter, FilterOperator) {
   ...
```

You can already benefit from code completion while typing the module paths!

In the end, you will be back to the state of having a long list of errors (almost 20 in case of the UI5 CAP event app).<br>
But this means progress! Because when you now hover over variables and method names, the code editor will for most of them display the API documentation. And typing a variable name will suggest the available methods on the respective class.

## Fix the First Real Type Errors

### Cast Generic Return Types

The errors displayed now might even be real errors in the application code, but are mostly resulting from UI5 APIs returning generic superclasses while in your app the code is written for the actually used more specific class. Two examples:
* `Controller.byId(...)` returns the base class `sap.ui.core.Element`, but depending on the ID, the actually returned control instance may be a Button or Input or whatever. So calling Button-specific methods is of course ok, but TypeScript doesn't know this.
* `Controller.getView().getModel(...)` officially returns the base class `sap.ui.model.Model`, but depending on the given model name it might be a JSONModel, an ODataModel or whatever.

These issues can be best fixed by first storing the result of such a call in a variable and specifying the concrete type of this variable.

<b>IMPORTANT:</b> After the type comment, enclose the JS code acquiring the value in braces! Otherwise, the typing will not work.

Examples: 
```js
var submitButton = /** @type {import("sap/m/Button").default} */ (this.byId("submitButton"));
submitButton.setEnabled(true);
```


```js
var oListBinding = /** @type {import("sap/ui/model/odata/v4/ODataListBinding").default} */ (this.byId("familyMembersTable").getBinding("items"));
oListBinding. ...
```


### Define Custom Data Structures

In some cases, the compiler may complain about data structures introduced by your application code, e.g. when `oNewObject.FamilyMembers.length` is accessed (where `oNewObject` is an Employee). To fix these error messages, you can use JSDoc to define your own types (at any location):

```js
/**
 * @typedef Employee
 * @property {object[]} FamilyMembers
 */
```
Then you can use this new custom type to let the TS compiler know that `oNewObject.FamilyMember` is an array of objects:
```js
var oNewObject = /** @type {Employee} */ (this.getView().getBindingContext().getObject());
```

### Define Types for App Classes/Modules

The file `webapp/models/models.js` provides a helper method `createDeviceModel` which is called in `Component.js`. To make TypeScript aware of this API, define the `models` helper as a custom type with this function as sole property. Add this to the file `models.js`, e.g. at its beginning:

```js
/**
 * A helper for creating the device model
 * 
 * @typedef sap.ui.eventregistration.form.models
 * @type {object}
 * @property {function():import('sap/ui/model/json/JSONModel').default} createDeviceModel
 */
```

This type can then be used in `Component.js` like this:
```js
...
 * @param {sap.ui.eventregistration.form.models} models
 */
function (UIComponent, Device, models) {
```

Also classes deriving from UI5 classes may need to be described. To declare the `getContentDensityClass` method on the app component, add this to `Component.js`:
```js
/**
 * The application-specific Component
 * 
 * @typedef {object} AppComponentExt
 * @property {function():string} getContentDensityClass
 * @property {function():boolean} doLogout
 *
 * @typedef {import('sap/ui/core/UIComponent').default & AppComponentExt} sap.ui.eventregistration.form.AppComponent
 */
```
It first defines a type with the new methods and then merges it with the base class (seems like this is the easiest way in JSDoc). This type can then be used for casting the return type of `this.getOwnerComponent()`:
```js
var appComponent = /** @type {sap.ui.eventregistration.form.AppComponent} */ (this.getOwnerComponent());
this.getView().addStyleClass(appComponent.getContentDensityClass());
```


### Fix Actual App Code Issues

Some of the errors are actually application code errors: as of writing, the UI5 CAP event app called the `MessageBox.error(...)` API with a `duration` parameter, but when you check [the official documentation](https://ui5.sap.com/1.116.0/#/api/sap.m.MessageBox%23methods/sap.m.MessageBox.error), the `error` method does not support this parameter! (Actually the implementation does, but this is a mismatch within UI5 and sort of indended... long story...). To fix it, remove the `duration` parameter.


### Ignore the Rest

But always remember that TypeScript errors can also be hidden by specifying `// @ts-ignore` in the preceding line (there are more specific variations available). This is handy for more tricky cases or those you want to handle later.


Once all errors are fixed, your app is in a greatly improved shape, type-wise. 


## A Moment of Reflection

Before the next steps will increase the typing coverage further, it is important to think about the scope of the entire endeavour! 

The majority of the code is already type-safe and supports code-assist at this point. By adding more type annotations (and tightening the TypeScript compiler settings) even more of the code can be covered and more types of errors can be spotted as you type.<br>
This is good! It's just also good to be aware that this is about the same journey as <i>converting</i> the app to TypeScript. Just without the need to transpile the code.

Essentially, a real TypeScript conversion will do the same things in the code: annotate with type knowledge. The only difference is that no JSDoc is used, but TypeScript has its own syntax to do it.

So while continuing below, keep the question in your mind: shouldn't I use real TypeScript right away?

Setting up the additional transpilation step is a limited one-time effort, so why not? The good news is that you can switch at any time. You just have to convert the JSDoc type annotations to real TypeScript type information once you decide to do this final step. So most of the effort invested into adding the JSDoc annotations is not lost.


## Tighter Typing

While most variables are typed and TypeScript does not report any further issues, quite some untyped variables are still hiding throughout the code because TypeScript implicitly types them as `any` - which basically disables any type checks. To prevent TypeScript from doing so, change the value of "noImplicitAny" in `tsconfig.json` to `true`:
```
"noImplicitAny": true
```

As result, there will be a lot of new errors again - one or two dozen of them in the UI5 CAP event app.

### Type the Method Parameters

Luckily, most of the new errors can be fixed easily by giving type information for method parameters:
```js
onExistingDataLoaded(/** @type {import("sap/ui/model/odata/v4/Context").default[]} */ aContexts) {
```

Some of them will require subsequent type casts when chains of methods are called on these variables.

### Refine the Custom Types

When custom types are defined, further refinements may become necessary now. Saying an `Employee` has just one property of type `object[]` won't cut it anymore. The Employee and FamilyMember structures now need to be fully specified to satisfy the type checks for the code handling them:

```js
/**
 * @typedef  Employee
 * @property {string} FirstName
 * @property {string} LastName
 * @property {string} Birthday
 * @property {FamilyMember[]} FamilyMembers
 */

/**
 * @typedef FamilyMember
 * @property {string} FirstName
 * @property {string} LastName
 * @property {string} Birthday
 */
```

This is pretty straightforward as well - plus it will improve type checking and code assist a LOT when handling these application-defined structures.

### Fix Further Issues

The few remaining errors may be of various types. E.g. one says that "<i>'string' can't be used to index type 'Employee'</i>" when iterating. In such a case it can help to restrict the iterator variable to the specific strings which occur and which are all present as properties in the `Employee` type:

```js
/** @type {('FirstName'|'LastName'|'Birthday')} */
var prop;
for (prop in mFields) {
	if (!oNewObject[prop]) {
```

## Even Stricter Type Checking

Most parts of the code are now type-checked. Still there are a few "`any`"s left, which can be uncovered by changing one more line in `tsconfig.json` to enable strict type checks:
```js
"strict": true,
```

You are back to almost 20 errors!<br>
This might be the point where you draw the line for type checking in a pure JavaScript project. After all, the "strict" checks are an option which can also be disabled in real TypeScript projects.

But then again, the more type checking and code assist, the better. And in fact almost all new errors are of the same type and the fix is super-easy and makes sense in several ways!

### Fix the 'this' Context Errors

In the UI5 CAP event app, almost ALL new errors are saying:
> `'this' implicitly has type 'any' ...`<br>
> `An outer value of 'this' is shadowed by this container.`

They are caused by functions where the `this` context is set with `bind(this)`:
```js
.catch(function() {
	this.showErrorDialog()
}.bind(this));
```

Just replace them with arrow functions! Those preserve the 'this'  context:
```js
.catch(() => {
	this.showErrorDialog()
});
```

Not working in IE11, but this browser is anyway no longer supported by UI5.


### Fix the 'arguments' Errors

For places where `someFunction.apply(this, arguments);` is called, an error is raised for the `arguments` parameter ("<i>Argument of type 'IArguments' is not assignable to parameter of type '[]'</i>").

This can be solved by explicitly declaring a variable with spread operator ("`...`") for the arguments and passing this array on to the `apply` call:

```js
destroy : function (...args) {
	UIComponent.prototype.destroy.apply(this, args);
},
```

Back to zero errors with strict type checking! Yay!


## Make the Checks Even Stricter

Now pretty much every variable should be typed, but checks can still be made even stricter, by targeting cases where something might inadvertantly become `undefined`. This step is again optional, but honestly: have you never encountered errors like "<i>'undefined' is not an object</i>" at runtime, which you would have liked to avoid?<br>
This is the chance to catch these issues earlier! Just change the respective line in `tsconfig.json` to say:
```js
"strictNullChecks": true,
```

Back to more than 20 errors <i>again</i>!<br>
But you know the drill now. The errors are of type "<i>Object is possibly 'undefined'</i>" and most of them can be fixed with one single change.

### Fix the Member Variable Errors

Most new errors are targeting the same variable: `this.oBundle` (the ResourceBundle for translation texts). The TypeScript compiler does not know that the `onInit` method will be called before any other method and that hence this member will always be initialized in advance.<br>
The same kind of error will likely occur for any class members. A solution is to create a dummy constructor which does nothing - it just initializes these members:

```js
constructor(/** @type {string} */ arg) {
	super(arg);
	/** @type {import('sap/base/i18n/ResourceBundle').default} */ // @ts-ignore
	this.oBundle = {};
	/** @type {import('sap/ui/model/Model').default} */ // @ts-ignore
	this.oDataModel = {};
}
```

Array members can be simply initialized with an empty array, but because `this.oBundle` is typed, it only accepts objects of type ResorceModel. As we don't want to pollute the code with the instantiation of an additional unneded model, we get a bit hacky, assign an empty object and apply a `@ts-ignore` to suppress the resulting type error. There might be better solutions to this, but it works.

### Fix the Other "possibly 'undefined'" Errors

For the other occurrences of this error, you will typically add a plain null-check.

Some of them will actually make your application more robust, which is the point of this setting. Others may be actually unnecessary because with the given parameters there is <i>always</i> a value returned by the used methods.<br>
This is why some consider the `strictNullChecks` rule "too much" while others like to apply it.

In fact, many UI5 APIs _could_ return `null` or `undefined` in exceptional cases, while they _usually_ do not. Null-checking all those return values just to satisfy the TypeScript compiler (and prevent the remote chance of something being undefined) would indeed add a lot of overhead, so the code in this repository does not actually go that step and stays with `strictNullChacks: false`.

## Done!

At this point, you have achieved strict type checking and very good code-assist support.<br>
You can maintain this achievement by adding type info as the code grows and sooner or later consider switching to TypeScript altogether. After all you have already added all the needed type annotations and the configuration file. Just convert the type infos to real TypeScript syntax and add the transpilation step as described in the [TypeScript "Hello World" tutorial](https://github.com/SAP-samples/ui5-typescript-helloworld/blob/main/step-by-step.md).


# Running the Project

Just like in the main branch, execute the following command on top-level to run the project locally:

```sh
yarn start
```

As shown in the terminal after executing this command, the form UI (which this branch is about) is then running on http://localhost:8080/index.html.

For the form UI, you can use user name `employee@test.com` with password `123`.


# How to obtain support

The sample code is provided **as-is**. No support is provided.


# License

Copyright (c) 2021-2023 SAP SE or an SAP affiliate company. All rights reserved.
This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
