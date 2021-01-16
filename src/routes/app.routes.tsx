import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PartnerDashboard from '../components/pages/PartnerDashboard';

const AppRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PartnerDashboard} />
            </Switch>
        </BrowserRouter>
    );
});

export default AppRoutes;