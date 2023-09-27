import React from 'react';
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

const CoursesEdit = (props: any) => (
  <Edit {...props} title="Edit Application Form">
    <SimpleForm>
      <TextInput source="id" label="Id" />
      <TextInput source="course_name" label="Description" />
    </SimpleForm>
  </Edit>
);

export default CoursesEdit;
