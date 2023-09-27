import * as React from 'react';
import { Create, DateInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="firstname" label="Firstname" />
      <TextInput source="lastname" label="Lastname" />
      <TextInput source="username" label="Username" />
      <TextInput source="email" label="Email" />
      <TextInput source="phone" label="Phone" />
      <TextInput source="password" label="Password" />
      <DateInput source="birthday" label="Birthday" />
      <SelectInput source="role" choices={[
          { id: 'student', name: 'Student' },
          { id: 'mentor', name: 'Mentor' },
          { id: 'admin', name: 'Admin' },
      ]} />
    </SimpleForm>
  </Create>
);

export default UserCreate;
