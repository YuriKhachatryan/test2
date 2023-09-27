import React from 'react';
import { DateInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';

const StudentEdit = (props: any) => (
  <Edit {...props} title="Edit Student Form">
    <SimpleForm>
      <TextInput source="firstname" label="Firstname" />
      <TextInput source="lastname" label="Lastname" />
      <TextInput source="username" label="Username" />
      <TextInput source="email" label="Email" />
      <TextInput source="phone" label="Phone" />
      <TextInput source="password" label="Password" />
      <DateInput source="birthday" label="Birthday" />
      <SelectInput
        source="role"
        choices={[
          { id: 'student', name: 'Student' },
          { id: 'mentor', name: 'Mentor' },
          { id: 'admin', name: 'Admin' },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export default StudentEdit;
