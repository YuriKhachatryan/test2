import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const CourseCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="course_name" label="Course name" />
    </SimpleForm>
  </Create>
);

export default CourseCreate;
