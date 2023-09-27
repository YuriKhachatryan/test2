import * as React from 'react';
import { AppBar, Button, TitlePortal } from 'react-admin';
import Box from '@mui/material/Box';
import { CreateButton } from 'react-admin';


export const CustomAppBar = () => (
    <AppBar color="primary">
        <TitlePortal />
        <Box flex="1" />
        <CreateButton color="inherit" label="Create user" resource="register_user" />
    </AppBar>
);