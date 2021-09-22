# ui5-cap-event-app

For general information about the app and setup instructions, please switch to the [main branch](../../tree/main).

This `js-with-typescript-support` branch demonstrates how the TypeScript type definitions released for the UI5 APIs can provide type checking and code completion in your code editor while still doing UI5 app development in regular JavaScript.

## Description

Below, this document contains step-by-step instructions how even a standard JavaScript application project can benefit from TypeScript features like type checking and automatic code completion as you type.

Editors like Visual Studio Code (the one used in this document) can apply knowledge from type definition files (like the ones describing the UI5 aPIs) even to standard JavaScript code. For a very limited subset of the JS code, these benefits are available immediately after just importing the type definitions. But the coverage can be greatly increased by giving hints about variable types to the editor, using JSDoc comments.

By tweaking the TypeScript check strictness, application developers can choose how much type safety they want - and how much effort they are willing to invest in turn, to let the editor know about the used types. Therefore, this document starts with loose settings requiring minimal effort and increases the strictness in several levels. It then explains the typical steps needed to get rid of the new TypeScript errors popping up in the stricter level.

In essence, this is a way to gradually apply almost full type safety, starting from a pure untyped JavaScript application. Without the need for a build step like the one required with actual TypeScript.

As additional benefit, the resulting JavaScript application could also be easily converted to real TypeScript if desired: converting the added JSDoc type comments to the respective TypeScript syntax is already covering the largest part of the transition.


## Applying TypeScript Benefits to a JavaScript Application

### Requirements

1. A nodeJS develoment environment and a modern code editor which supports typing JavaScript using TypeScript information, like e.g. MS Visual Studio Code
2. A JavaScript application you want to develop with additional help from TypeScript. You can either use your own app of choice or clone the original "UI5 CAP event app" (`main` branch, which is still in JavaScript), which is used in this document:<br>
`git clone https://github.com/SAP-samples/ui5-cap-event-app.git`<br>
This app uses yarn for dependency management, so yarn is used in the explanation, but for npm-based apps, the same can of course be done with npm.

### Basic Setup

#### Add Needed Dependencies

First, to have the TypeScript engine available, the `typescript` package needs to be installed as dev dependency.

Depending on your project structure, this can happen at top-level, or in a single sub-project of a monorepo if TypeScript-based code assist should only be used there. In case of the UI5 CAP event app, the latter could be desired (to only cover the ui-form sub-project), so first:
```sh
cd packages/ui-form
```

Then trigger the actual dev dependency installation:

```sh
yarn add typescript --dev
```

The [UI5 type definitions](https://www.npmjs.com/package/@sapui5/ts-types-esm) need to be installed as dev dependency as well. You should choose the same major/minor version of the type definitions as used at runtime. (If this is not possible because you are working with an older version of UI5 at runtime, you can also try using a higher version of the type definitions. The most likely issue caused by this would be that TypeScript thinks there are new APIs available which are not really there at runtime. As UI5 APIs are not being extended drastically from release to release, this shouldn't be a big issue.)

```sh
yarn add @sapui5/ts-types-esm@1.94.0 --dev
```

NOTE: we are working with the new "-esm" flavor of the type definitions. This has advantages and disadvantages, so you might also choose the `@sapui5/ts-types` package instead:
 * Advantage: the `ts-types-esm` packages are the best-quality type definition files, the ones the UI5 team is focusing on. While the `ts-types` packages are also automatically updated with every new UI5 release, there might be some TypeScript glitches inside which are not fixed with priority.
 * Disadvantage: The "-esm" definitions define only ES6 modules, not the legacy global names of UI5 classes (like "sap.ui.core.Control" in the global namespace). This makes referencing types in the JSDoc comments a bit ugly. Instead of `@type {sap.m.Button}` one has to write `@type {import('sap/m/Button').default}`.

We are using the SAPUI5 type definitions in this document, but depending on the API usage, you can also use the OpenUI5 definitions ([`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm)).


#### Add the `tsconfig.json` File

Create a file named `tsconfig.json` at the appropriate location: in a one-app project with the `webapp` folder residing directly in the root of the repository, this location for `tsconfig.json` would be the root directory of the project. In a multi-app monorepo like this demo application, the appropriate place might rather be the root of one specific sub-package. We have already decided for the `packages/ui-form` sub-project, so we go for this location here in this document.

Paste the following content into the file, but pay attention to some of the entries:
* The "types" entry should properly point to the UI5 type definitions as installed by yarn. In this app, the node_modules folder is on top-level, as managed by yarn, so it is two levels above the tsconfig.json.
* While many of the flags in the middle part relate to the check strictness and could also be used with the opposite value (some will actually toggled later!), you MUST make sure that `allowJs` and `checkJs` are set to `true`- otherwise JS code will not profit from TypeScript.
* Make sure the "include" section matches the files you want to cover
* In the "paths" section, you may maintain application namespaces, just like they are also configured with UI5. This helps with addressing local app modules by their "official" name.

```json
{
	"compilerOptions": {
		"types": [
			"../../node_modules/@sapui5/ts-types-esm"
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

#### Try the Setup

Run the following command in your terminal to execute the first TypeScript check (from the directory where tsconfig.json resides):

```sh
npx tsc --noEmit
```

As result, you should get a list of errors.en residing in the same directory).


#### Add a Check Script

To make checking the types easier, add the following line to the "scripts" section in the `package.json` file (the one inside `packages/ui-form`):

```
"typecheck": "tsc --noEmit"
```

As result, you can now simply execute the following in your terminal inside `packages/ui-form` to manually trigger the type check:

```sh
yarn typecheck
```

But the editor will also highlight any errors inline! You will likely use both ways of checking for errors.


### Get Rid of the Initial Errors

The list of initial errors will vary between apps. It makes sense to get most of them out of the way before starting to type things. In case of the event app, there are eight:

Four issues are about variables which are declared but never used (parameters of anonymous functions). Remove the variable declarations and they are gone. You could also change the respective TypeScript compiler setting to make this a non-error.

Three are about certain methods not existing on "type 'onInit'". They are caused by TypeScript not understanding the UI5 way of inheriting from another class. In this specific case, they are in the Registration controller. The solution is to replace the UI5 way (`Controller.extend(...)`) with standard ES6 JavaScript classes:

```js
    class RegistrationController extends Controller {
        onInit() {
            ...
        }
```

Note how the syntax of declaring the methods changes and don't forget to return the new class in the end!

```js
return RegistrationController;
```



The last error says "Cannot use namespace 'jQuery' as a value". To solve this - and similar errors about third-party libraries which are used directly in the app code - add a dev dependency to its types:

```sh
yarn add @types/jquery@3.5.1 --dev
```
NOTE: use the version included in UI5!

Also add it this new set of type definitions to the `compilerOptions > types` list in tsconfig.json:

```json
"types": [
			...,
			"../../node_modules/@types/jquery"
		],
```

Similarly for other third-party libraries like qunit.

You might have other issues in your own app, but at the end of this step, `yarn typecheck` should finish with no errors.<br>
You have an app now which is type-checked by TypeScript, BUT if you look closely, most variables have type `any` which essentially means that they may contain values of any type and are excluded from being type-checked. Also the code-assist won't work for them because TypeScript doesn't know their type.


### Provide Type Information for Loaded Dependencies

You now need to provide type information, so TypeScript can do its job. The best place to start is the loaded dependencies! After all, they represent well-known UI5 classes and once they are known to TypeScript, it can also derive the types of return values when calling methods on these classes.

How do you provide type information without using TypeScript? Type information written in JSDoc comments are also understood by TypeScript!

Depending on the flavor of type definitions you are using ("-esm" with modules or the ones where all UI5 classes are arranged in the global namespace), there are two different ways how a type can be referenced. Let's look at the type of a method parameter, for example:
1. With globals, the global name can be used, which is pretty straightforward:<br>
`@type {sap.ui.core.mvc.Controller}`
2. The "-esm" type definitions only declare the paths of ES6 modules. To derive a type, the respective module needs to be imported and the default export of the module needs to be selected:<br>
`@type import('sap/ui/core/mvc/Controller').default}`


In case of `sap.ui.require(...)` and `sap.ui.define(...)` calls, the parameters given to the callback function are not instances of `Controller` and other UI5 classes, but the parameters are the <i>classes</i> themselves! Hence an additional `typeof` operator needs to be added.

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

### Fix the First Real Type Errors

#### Cast Generic Return Types

The errors displayed now might even be real errors in the application code, but are mostly resulting from UI5 APIs returning generic superclasses while in your app the code is written for the actually used more specific class. Two examples:
* `Controller.byId(...)` returns the base class, but depending on the ID, the actually returned control instance may be a Button or Input or whatever, so calling Button-specific methods is of course ok.
* `Controller.getView().getModel(...)` officially returns the base class "model", but of course depending on the given model name it might be a JSONModel, an ODataModel or whatever.

These issues can be fixed by first storing the result of such a call in a variable and specifying the concrete type of this variable.

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

In some cases, a TypeScript peculiarity will hit: some types cannot be cast to more specific types directly, there is first a cast to type "any" required. The error message will make this clear.

```js
const oResourceModel = /** @type {import('sap/ui/model/resource/ResourceModel').default} */ ( /** @type any */ (this.getView().getModel("i18n")));
```

#### Define Custom Data Structures

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

#### Define Types for App Classes/Modules

TODO


#### Fix Actual App Code Issues

Some of the errors are actually application code errors: as of writing, the UI5 CAP event app called the `MessageBox.error(...)` API with a `duration` parameter, but when you check [the official documentation](https://sapui5.hana.ondemand.com/1.94.0/#/api/sap.m.MessageBox%23methods/sap.m.MessageBox.error), the `error` method does not support this parameter! (Actually the implementation does, but this is a mismatch within UI5 and sort of indended... long story...). In this case, just remove the `duration` parameter.


#### Ignore the Rest

But always remember that TypeScript errors can also be hidden by specifying `// @ts-ignore` in the preceding line (there are more specific variations available). This is handy for more tricky cases or those you want to handle later.


Once these errors are fixed, your app is in a greatly improved shape, type-wise. 


### A Moment of Reflection

Before the next steps will increase the typing coverage further, it is important to think about the scope of the entire endeavour! 

The majority of the code is already type-safe and supports code-assist at this point. By adding more type annotations (and tightening the TypeScript compiler settings) even more of the code can be covered and more types of errors can be spotted as you type.<br>
This is good! It's just also good to be aware that this is exactly the same journey as <i>converting</i> the app to TypeScript. Just without the need to transpile the code.

Essentially, a real TypeScript conversion will do the same things in the code: annotate with type knowledge. The only difference is that no JSDoc is used, but TypeScript has its own syntax to do it.

So while continuing below, keep the question in your mind: shouldn't I use real TypeScript right away?

Setting up the additional transpilation step is very limited one-time effort, so why not? The good news is that you can switch at any time. You just have to convert the JSDoc type annotations to real TypeScript type information once you decide to do this final step. So most of the effort invested into adding the JSDoc annotations is not lost.





## Running the Project

Just like in the main branch, execute the following command to run the project locally:

```sh
yarn start
```

As also shown in the terminal after executing this command, the form UI, which this branch is about, is then running on http://localhost:8080/index.html.

For the form UI, you can use user name `employee@test.com` with password `123`.


## How to obtain support

The sample code is provided **as-is**. No support is provided.


## License

Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
