using {sap.ui5.eventregistration as my} from '../db/schema';

service EventRegistrationService @(requires:'authenticated-user')  {
  entity Person @(restrict : [
    {
      grant : [   // Some privileges cannot be assigned with a dynamic "where" condition (or do not need to be)
        'CREATE',
        'NEW',    // for creating a draft from scratch
        'EDIT',   // for creating a draft from an existing element
        'PATCH',  // for modifying fields in a draft
        'SAVE'    // for persisting a draft into a real data element
        // 'UPDATE', // FIXME: currently, this is needed for overriding an existing entity with a draft, but it should not, as it would allow everyone to update other users
      ],
      to : 'Employee'
    },
    {
      grant : [
        'READ',
        'UPDATE'
      ],
      to : 'Employee',
      where : 'Email = $user.id' // users can only see and modify their own data
    },
    {
      grant : [
        'READ',
        'WRITE' // includes CREATE, UPDATE, DELETE, and all draft mode privileges
      ],
      to : 'Admin'
    }
  ]) as projection on my.Person;
  
  entity FamilyMember as projection on my.FamilyMember;
}
