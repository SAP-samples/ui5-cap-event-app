namespace sap.ui5.eventregistration;
using { managed } from '@sap/cds/common';

entity Person : managed {
  key ID         : UUID;
  FirstName      : String(100);
  LastName       : String(100);
  Email          : String(120);
  Birthday       : Date;
  FamilyMembers  : Composition of many FamilyMember on FamilyMembers.MainPerson = $self;
}

entity FamilyMember : managed {
  key ID       : UUID;
  FirstName    : String(100);
  LastName     : String(100);
  Birthday     : Date;
  MainPerson   : Association to Person;
}
