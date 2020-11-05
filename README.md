# ui5-cap-event-app

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/ui5-cap-event-app)](https://api.reuse.software/info/github.com/SAP-samples/ui5-cap-event-app)

Showcase of two UI5 user interfaces, one built with freestyle [SAPUI5](https://sapui5.hana.ondemand.com/) (or rather [OpenUI5](https://openui5.org/)), the other using [SAP Fiori elements](https://community.sap.com/topics/fiori-elements), with a [CAP](https://cap.cloud.sap/docs/) backend, using [OData V4](https://www.odata.org/) with [Draft mode](https://experience.sap.com/fiori-design-web/draft-handling/).

## Description

This app uses simple attendee registration and administration for events as an example scenario for demonstrating the data handling and overall setup. The app consists of three parts: an end-user UI implemented in freestyle SAPUI5, a metadata-driven administrator UI generated with Fiori elements and a Node.js-based CAP backend.
While the code implements a complete end-to-end full-stack app, it is kept as simple as possible and the main focus is on freestyle SAPUI5 code making use of OData V4 as well as of "Draft" functionality to persist non-final datasets.

Further details about how the functionality is implemented can be found [in the documentation](docs/documentation.md).

## Requirements

[Node.js](https://nodejs.org), [Yarn 1.x](https://classic.yarnpkg.com/) (just do `npm install -g yarn`), [sqlite3](https://www.sqlite.org) (only needed separately on Windows, [commandline tools](https://www.sqlite.org/download.html) zip need to be downloaded, extracted, and directory added to the PATH)

## Download and Installation

1. Clone the project.

    ```sh
    git clone https://github.com/SAP-samples/ui5-cap-event-app
    cd ui5-cap-event-app
    ```

2. Use Yarn to install the dependencies.

    ```sh
    yarn
    ```

## Running the Project

Execute the following command to run the project locally for development (start form UI, admin UI, and CDS server):

```sh
yarn start
```

As also shown in the terminal after executing this command, the form UI is then running on http://localhost:8080/index.html, the admin UI on http://localhost:8081/index.html, and the CDS server on http://localhost:4004/.

For the form UI, you can use user name `employee@test.com` with password `123`. For the admin UI, use `admin@test.com` and password `123`.

## Building the Project

Execute the following command to build the project and get one integrated app that can be deployed (build the form UI, admin UI, and CDS server):

```sh
yarn build
```

**Prerequisite:** `yarn build` runs `cds build` in the CDS server package which requires `@sap/cds-dk`. Please ensure to install `@sap/cds-dk` globally via:
```sh
npm i -g @sap/cds-dk
```

After building the individual packages, the build results will be copied to the central `dist` folder. The resulting package inside the `dist` folder consists of the CDS server hosting the form UI and the admin UI as well as a sandbox Fiori launchpad to start the individual UIs.

To start the generated package, just run `npm install` and `npm start` inside the `dist` folder. This installs the dependencies and starts the CDS server hosting the UIs. Now the sandbox Fiori launchpad can be opened on http://localhost:4004/.

## Debugging the Project

We have prepared two ways of debugging the Node.js part of the app easily:

### Debugging with VSCode

The launch configuration "debug server in vscode" is part of the project and can be used to run the CAP server in debug mode and debug directly in VSCode (e.g. set breakpoints).

Note: the UI parts are not started by this launch configuration. To debug the interaction of server and UI, the form UI or admin UI has to be started separately with `yarn start:ui-form` or `yarn start:ui-admin`.

### Debugging with any Node.js Debugging Client (e.g. Chrome)

Execute the following command to run the CAP server in debug mode, so Node.js debugging tools can connect. Form UI and admin UI are also started, like with `yarn start`:

```sh
yarn debug
```

You can then e.g. use the Node debugger which is built into the Chrome browser: enter `chrome://inspect` into the URL bar of Chrome and then select "Open dedicated DevTools for Node" to open the debugger.


## Limitations

The local database uses in-memory mode. Data will be re-initialized after each restart.

The sample does not cover deployment of the app, where additional considerations e.g. regarding database and authentication are needed.


## Known Issues

* Starting the admin app with `?sap-iapp-state=...` URL parameters (e.g. from a bookmark or when reloading) fails. Remove the URL parameter when you reload the page.

## How to obtain support

The sample code is provided **as-is**. No support is provided.

## References

Other projects demonstrating similar use-cases:

* https://github.com/vobu/ui5-cap - a repository showcasing the use of UI5 Tooling, CAP + UIveri5-based testing in an app for media upload and preview (as presented at UI5conBE in Feb 2020) by Volker Buzek.
* https://blogs.sap.com/2020/07/08/ui5-freestyle-app-in-cap - a UI5 freestyle app in CAP, with approuter, by Wouter Lemaire.
* https://blogs.sap.com/2020/09/06/developing-a-fiori-elements-app-with-cap-and-fiori-tools/ - about developing a Fiori elements app with CAP and Fiori Tools
* https://blogs.sap.com/2020/04/07/ui5-tooling-a-modern-development-experience-for-ui5/ - an overview on the UI5 Tooling and its extensions for a modern development experience.


## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
