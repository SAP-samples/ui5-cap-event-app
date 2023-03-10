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
				...["createdAt", "createdBy", "modifiedAt", "modifiedBy", "Email"].map((prop) => ({ name: prop, managed: true }))
			  ]
		}
	}
}

export default config;