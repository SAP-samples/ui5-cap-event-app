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

### Basic Setup

#### Add Needed Dependencies

As starting point, we assume you have a JS application you want to develop with additional help from TypeScript. To try it step by step, you can clone the original event app from the `main` banch at https://github.com/SAP-samples/ui5-cap-event-app.git. This app uses yarn for dependency management, so yarn is used in the explanation, but for npm-based apps, the same can of course be done with npm.

First, to have the TypeScript engine available, the `typescript` package needs to be installed as dev dependency.

```sh
yarn add typescript --dev
```

The [UI5 type definitions](https://www.npmjs.com/package/@sapui5/ts-types-esm) need to be installed as dev dependency as well. You should choose the same major/minor version of the type definitions as used at runtime. If this is not possible because you are working with an older version of UI5 at runtime, you can also use a higher version of the type definitions. The most likely issue caused by this would be that TypeScript thinks there are new APIs available which are not really there at runtime. As UI5 APIs are not being extended drastically from release to release, this shouldn't be a big issue.

```sh
yarn add @sapui5/ts-types-esm@1.94.0 --dev
```

NOTE: we are working with the new "-esm" flavor of the type definitions. This has advantages and disadvantages, so you might also choose the `@sapui5/ts-types` package instead:
 * Advantage: the `ts-types-esm` packages are the best-quality type definition files, the ones the UI5 team is focusing on, going forward. While the `ts-types` packages are also automatically updated with every new UI5 release, there might be some TypeScript glitches inside which are not fixed with priority.
 * Disadvantage: The "-esm" definitions define only ES6 modules, not the legacy global names of UI5 classes (like "sap.ui.core.Control" in the global namespace). This makes referencing types in the JSDoc comments a bit uglier. Instead of `@type {sap.m.Button}` one has to write `@type {import('sap/m/Button').default}`.

We are using the SAPUI5 type definitions in this document, but depending on the API usage, you can also use the OpenUI5 definitions ([`@openui5/ts-types-esm`](https://www.npmjs.com/package/@openui5/ts-types-esm)).


#### Add the `tsconfig.json` File

Create a file named `tsconfig.json` in the appropriate place. In a one-app project with the `webapp` folder, this is the root directory of the project. In a multi-app monorepo like this demo application, the appropriate place might rather be the root of one specific sub-package, if TypeScript-based features should only be applied in this package. Even though also in this scenario the file could be placed on toplevel, with adjusted paths, we go for this option here.

Paste the following content into the file, but pay attention to some of the entries:
* The "types" entry should properly point to the UI5 type definitions as installed by yarn
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

Run the following command in your terminal to execute the first TypeScript check from the root of the project:

```sh
npx tsc --noEmit -p ./packages/ui-form/tsconfig.json
```

As result, you should get a list of errors. Make sure to point to the correct tsconfig (not needed when residing in the same directory).


#### Add a Check Script

To make checking the types easier, add the following line to the "scripts" section in the `package.json` file:

```
"typecheck": "tsc --noEmit -p ./packages/ui-form/tsconfig.json"
```

As result, you can now simply execute the follwing to manually trigger the type check:

```sh
yarn typecheck
```

But the editor will also highlight any errors inline. You will likely use both ways of checking for errors.


### Getting Rid of the Errors







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
