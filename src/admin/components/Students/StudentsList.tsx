import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput } from 'react-admin';

const postFilters = [<SearchInput key="search" source="username" alwaysOn />];

const StudentsList = (props: any) => (
  <List {...props} filters={postFilters} title="Students" perPage={10}>
    <Datagrid bulkActionButtons={false} rowClick="show">
      <TextField source="firstname" label="Firstname" />
      <TextField source="lastname" label="Lastname" />
      <TextField source="username" label="Username" />
      <TextField source="email" label="Email" />
      <TextField source="phone" label="Phone" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default StudentsList;
