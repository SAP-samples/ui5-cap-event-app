using EventRegistrationService from './eventregistration-service';

annotate EventRegistrationService.Person with @odata.draft.enabled;

annotate EventRegistrationService.Person with {
	ID              @title: '{i18n>GUID}'  @Core.Computed;
	Email           @title: '{i18n>Email}'; 
	LastName        @title: '{i18n>Lastname}';
	FirstName       @title: '{i18n>Firstname}';
	Birthday        @title: '{i18n>Birthdate}';
}

annotate EventRegistrationService.Person with @(
	UI: {
		HeaderInfo: {
			TypeName: '{i18n>Person}',
			Title: {
				Value: FirstName
			},
			Description: {
				Value: LastName
			},
			TypeNamePlural: '{i18n>Persons}'
		},
		SelectionFields: [LastName, FirstName],
		LineItem: [
			{Value: FirstName},
			{Value: LastName},
			{Value: Email},
			{Value: Birthday}
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Familienmitglieder}', Target: 'FamilyMembers/@UI.LineItem'}
		],
		FieldGroup#Main: {
			Data: [
				{Value: FirstName},
				{Value: LastName},
				{Value: Email},
				{Value: Birthday}
			]
		},
		HeaderFacets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>PersonData}', Target: '@UI.FieldGroup#Main'}
		]
	},
); 

annotate EventRegistrationService.FamilyMember with @(
	UI: {
		HeaderInfo: {
			TypeName: '{i18n>Familymember}',
			TypeNamePlural: '{i18n>Familymembers}'
		},
		SelectionFields: [LastName, FirstName],
		LineItem: [
			{Value: FirstName},
			{Value: LastName},
			{Value: Birthday}
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>FamilyMemberData}', Target: '@UI.FieldGroup#Main'}
		],
		FieldGroup#Main: {
			Data: [
				{Value: FirstName},
				{Value: LastName},
				{Value: Birthday}
			]
		}
	}
);