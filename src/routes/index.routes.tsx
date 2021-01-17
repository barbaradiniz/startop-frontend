import React from 'react';
import { useAuth } from '../hooks/auth';
import PartnerRoutes from './partner.routes';
import AuthRoutes from './auth.routes';
import InvestorRoutes from './investor.routes';

const Routes = React.memo(() => {
    const { user } = useAuth();
    return user ? ((user.userType === 1) ? <PartnerRoutes /> : <InvestorRoutes />) : <AuthRoutes />;
});

export default Routes;