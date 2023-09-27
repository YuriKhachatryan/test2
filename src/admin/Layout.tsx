import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';

import { CustomAppBar } from './AppBar';

export const MyLayout = (props: React.JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props} appBar={CustomAppBar} />;