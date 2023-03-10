# ui5-cap-event-app - in TypeScript, supported by `odata2ts`

<b>This special branch enhances the [UI5 app in the `packages/ui-form` directory](packages/ui-form) taken from the `typescript` branch of the repository by using the [odata2ts](https://github.com/odata2ts/odata2ts) tool (documentation [here](https://odata2ts.github.io/)) for generating type definitions from the OData metadata.</b>

General information about the app can be found in the [readme of the `main` branch](https://github.com/SAP-samples/ui5-cap-event-app) and of the [`typescript` branch](https://github.com/SAP-samples/ui5-cap-event-app/tree/typescript).


## Generating Types for the ODataModel


This is roughly following https://odata2ts.github.io/docs/getting-started/generator-setup

### 0. Get the TypeScript version of the app

```sh
git clone https://github.com/SAP-samples/ui5-cap-event-app.git
cd ui5-cap-event-app
git checkout typescript
yarn
```

### 1. Get the service metadata

You can now do:
```sh
yarn start:server
```
to start the CAP server. It will report to be listeninge.g. at http://localhost:4004. After opening this URL in the browser, you can click the "$metadata" link to see [the OData metadata](http://localhost:4004/event-registration/$metadata). Save this file as `packages/ui-form/src/model/event-registration-metadata.xml`. (You can then stop the server again.)
When asked for user/password of the service, you can use: `employee@test.com` / `123`.

### 2. Add the `odata2ts` dependency

First navigate into the ui-form sub project, then add the dev dependency:
```sh
cd packages/ui-form
yarn add --dev @odata2ts/odata2ts
```

### 3. Configure `odata2ts`

To tell the tool what to do, create the file `packages/ui-form/odata2ts.config.ts` with the following content - explained further down:

```ts
import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
	mode: Modes.models,
	emitMode: EmitModes.dts,
	services: {
		eventRegistration: {
			source: "src/model/event-registration-metadata.xml",
			output: "gen",
			propertiesByName: [
				// list of managed fields which are not editable from the user's perspective
				...["ID", "createdAt", "createdBy", "modifiedAt", "modifiedBy", "IsActiveEntity", "HasActiveEntity", "HasDraftEntity", "Email"].map(
                    (prop) => ({ name: prop, managed: true })
                )
			]
		}
	}
}

export default config;
```

Explanation for the settings:
- `mode`: the tool has three major modes, the most powerful is a full-fledged OData client, the middle one provides type-safe querying and the most basic mode just provides the data models. As we are using the UI5 ODataModel for server communication, we only use the `models` mode to get the type definitions generated.
- `emitMode`: we do not need code, only the type definitions, so we choose the `dts` emit mode, which only generates *.d.ts files.
- `services`: here, the service is configured for which the type definitions are generated:
  - `source` points to the metadata xml file (relative path)
  - `output` says where the type definitions should go (let's use "gen" as sibling of "src" - caution: the contents of this directory may be deleted when generating!)
  - `propertiesByName`  is used to declare certain system properties as "[managed](https://odata2ts.github.io/docs/generator/managed-props/)". This means they are not "normal" data properties which the user can change, but set by the system. This will be useful in the controller code when we loop over the user-entered properties: TypeScript will know which ones they are.

### 4. Run it (and provide npm scripts for convenience)

You can now trigger generation in the "ui-form" directory by executing:
```sh
npx odata2ts
```

As result, the file `packages/ui-form/gen/EventRegistrationServiceModel.d.ts` will be generated, containing types for the entities like "Person" and "FamilyMember".

For convenience, you can also add a script in the top-level package.json file. After addingthe following to the "scripts" section:
```json
"gen-odata": "yarn workspace ui5-cap-event-app-ui-form gen-odata"
```

You can simply trigger the generation from the root directory of the project:
```sh
yarn gen-odata
```

### 5. Use the types!

Let's make use of the generated type definitions to simplify the Registration controller!

Close to the top of `packages/ui-form/src/controller/Registration.controller.ts` there are three manually-written type definitions: `type Person...`,  `type PersonProp = keyof Person` and `type Employee...` that were added when the app was converted to TypeScript. Delete them!

Instead, add the imports of the types you will use (actually, they would also be automatically added as you use them and do the respective "Quick Fix"):
```ts
import { EditablePerson, Person } from "../../gen/EventRegistrationServiceModel";
```

The type removal leads to four TypeScript errors in the beginning of the `validateData()` method. Let's tackle them one by one.

#### Solve error 1: use the generated type

The first one is that the prior manually crafted type "Employee" does no longer exist in this line:
```ts
const newObject = this.getView().getBindingContext().getObject() as Employee;
```
Simply change the last word to "Person", as that's the actual name of the entity and generated type!

#### Solve error 2: Use type `EditablePerson` to ignore managed properties

The second error is that in the following assignment `fields` does not have all properties of the type `Person`:
```ts
const fields : Person = {
	LastName: bundle.getText("name"),
	FirstName: bundle.getText("firstName"),
	Birthday: bundle.getText("dateOfBirth")
};
```
Missing are technical managed properties like "createdAt" which are not supposed to be set by the user or application. Luckily, we already have defined these properties in the `odata2ts.config.ts` configuration above. The tool hence also generated the type `EditablePerson` containing only the *non-managed* properties. Just change the first line to
```ts
const fields : EditablePerson = {
```
and TypeScript knows that the object you are creating here does not need any of these managed properties.

Ok, this is hacky, as the created object is not really supposed to be a person, but rather a helper object for the subsequent check loop: the property values are not names + birthday, but rather translated property names which are supposed to be shown to the user when the respective property is not filled. It only incidentally works as all properties of EditablePerson are strings in the generated type.<br>
Still, this was a way to demonstrate the use of the "Editable<EntityName>" types and to show how you *would* declare a Person object. :-)

For a clean solution, as `fields` is actually a map of property names to strings, what should *really* be written is:
```ts
const fields : Record<keyof EditablePerson, string> = {
```

#### Solve error 3: use `keyof EditablePerson` to define a string type with all property names which the app can change

The third error is that the previously manually written type `PersonProp` does no longer exist, which is referenced in line
```ts
let prop : PersonProp;
```
This type used to be a list of the property names for which it should be checked whether the user has entered data.

Well, the `EditablePerson` type used above has exactly these properties, so we can use TypeScript's `keyof` to define a string type that can have only these property names:
```ts
let prop : EditablePerson;
```

#### Error 4 has disappeared - enjoy the result

Error 4 had been a follow-up error of PersonProp not being defined and is gone now.<br>
This gives us the time to run the app and enjoy the result. :-)

Of coure the types in this sample are simple and not going to ever change, so having them written manually was maybe easier than generating them. But in real-life projects, this can be a lot different, so it's great to have this tool!


## Requirements / Download / Installation / Running

All information about the general setup of the project can be found in the [readme of the `main` branch](https://github.com/SAP-samples/ui5-cap-event-app) and of the [`typescript` branch](https://github.com/SAP-samples/ui5-cap-event-app/tree/typescript).



## How to obtain support

The sample code is provided **as-is**. No support is provided.


## License

Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
