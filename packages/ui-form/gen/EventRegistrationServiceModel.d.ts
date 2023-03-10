export interface Person {
    createdAt: string | null;
    createdBy: string | null;
    modifiedAt: string | null;
    modifiedBy: string | null;
    ID: string;
    FirstName: string | null;
    LastName: string | null;
    Email: string | null;
    Birthday: string | null;
    IsActiveEntity: boolean;
    HasActiveEntity: boolean;
    HasDraftEntity: boolean;
    FamilyMembers?: Array<FamilyMember>;
    DraftAdministrativeData?: DraftAdministrativeData | null;
    SiblingEntity?: Person | null;
}
export declare type PersonId = {
    ID: string;
    IsActiveEntity: boolean;
};
export interface EditablePerson extends Partial<Pick<Person, "FirstName" | "LastName" | "Birthday">> {
}
export interface draftPrepareParams {
    SideEffectsQualifier?: string | null;
}
export interface draftEditParams {
    PreserveChanges?: boolean | null;
}
export interface FamilyMember {
    createdAt: string | null;
    createdBy: string | null;
    modifiedAt: string | null;
    modifiedBy: string | null;
    ID: string;
    FirstName: string | null;
    LastName: string | null;
    Birthday: string | null;
    MainPerson_ID: string | null;
    IsActiveEntity: boolean;
    HasActiveEntity: boolean;
    HasDraftEntity: boolean;
    MainPerson?: Person | null;
    DraftAdministrativeData?: DraftAdministrativeData | null;
    SiblingEntity?: FamilyMember | null;
}
export declare type FamilyMemberId = {
    ID: string;
    IsActiveEntity: boolean;
};
export interface EditableFamilyMember extends Partial<Pick<FamilyMember, "FirstName" | "LastName" | "Birthday" | "MainPerson_ID">> {
}
export interface draftPrepareParams {
    SideEffectsQualifier?: string | null;
}
export interface DraftAdministrativeData {
    DraftUUID: string;
    CreationDateTime: string | null;
    CreatedByUser: string | null;
    DraftIsCreatedByMe: boolean | null;
    LastChangeDateTime: string | null;
    LastChangedByUser: string | null;
    InProcessByUser: string | null;
    DraftIsProcessedByMe: boolean | null;
}
export declare type DraftAdministrativeDataId = string | {
    DraftUUID: string;
};
export interface EditableDraftAdministrativeData extends Partial<Pick<DraftAdministrativeData, "CreationDateTime" | "CreatedByUser" | "DraftIsCreatedByMe" | "LastChangeDateTime" | "LastChangedByUser" | "InProcessByUser" | "DraftIsProcessedByMe">> {
}
