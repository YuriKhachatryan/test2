import React from 'react';
import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

const StudentShow = (props: any) => (
  <Show {...props} title="Student Form Details">
    <SimpleShowLayout>
      <TextField source="id" label="Id" />
      <TextField source="firstname" label="Firstname" />
      <TextField source="lastname" label="Lastname" />
      <TextField source="username" label="Username" />
      <TextField source="email" label="Email" />
      <TextField source="phone" label="Phone" />
      <DateField source="birthday" label="Birthday" />
      <DateField source="create" label="Create" />
    </SimpleShowLayout>
  </Show>
);

export default StudentShow;
