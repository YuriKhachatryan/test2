import React from 'react';
import { List, Datagrid, TextField, DeleteButton, EditButton, SearchInput } from 'react-admin';

const postFilters = [<SearchInput key="search" source="username" alwaysOn />];

const CoursesList = (props: any) => (
  <List {...props} filters={postFilters} title="Courses" perPage={10}>
    <Datagrid bulkActionButtons={false}>
      <TextField source="id" label="Id" />
      <TextField source="course_name" label="Course name" />
      <EditButton />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default CoursesList;
