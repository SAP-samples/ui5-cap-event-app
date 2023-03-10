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
    FamilyMembers?: Array<FamilyMember>;
}
export declare type PersonId = string | {
    ID: string;
};
export interface EditablePerson extends Partial<Pick<Person, "FirstName" | "LastName" | "Birthday">> {
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
    MainPerson?: Person | null;
}
export declare type FamilyMemberId = string | {
    ID: string;
};
export interface EditableFamilyMember extends Partial<Pick<FamilyMember, "FirstName" | "LastName" | "Birthday" | "MainPerson_ID">> {
}
