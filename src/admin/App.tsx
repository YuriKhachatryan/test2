import * as React from 'react';
import { Admin, Resource, defaultTheme } from 'react-admin';
import { authProvider } from './providers/authProvider';
import { dataProvider } from './providers/dataProvider';
import StudentsList from './components/Students/StudentsList';
import StudentEdit from './components/Students/StudentEdit';
import StudentShow from './components/Students/StudentShow';
import MentorsList from './components/Mentors/MentorsList';
import MentorEdit from './components/Mentors/MentorEdit';
import MentorShow from './components/Mentors/MentorShow';
import UserCreate from './components/UserCreate';
import { MyLayout } from './Layout';
import AdminsList from './components/Admins/AdminsList';
import AdminEdit from './components/Admins/AdminEdit';
import AdminShow from './components/Admins/AdminShow';
import CoursesList from './components/Courses/CourseList';
import CourseEdit from './components/Courses/CourseEdit';
import CourseCreate from './components/Courses/CourseCreate';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} layout={MyLayout}>
    <Resource name="register_user" create={UserCreate}></Resource>
    <Resource name="student" list={StudentsList} edit={StudentEdit} show={StudentShow} />
    <Resource name="mentor" list={MentorsList} edit={MentorEdit} show={MentorShow} />
    <Resource name="admin" list={AdminsList} edit={AdminEdit} show={AdminShow} />
    <Resource name="courses" list={CoursesList} edit={CourseEdit} create={CourseCreate} />
  </Admin>
);

export default App;
