import React from 'react';
import { useAuth } from '../hooks/auth';
import PartnerRoutes from './partner.routes';
import AuthRoutes from './auth.routes';

const Routes = React.memo(() => {
    return !useAuth().user ? <PartnerRoutes /> : <AuthRoutes />;
});

export default Routes;