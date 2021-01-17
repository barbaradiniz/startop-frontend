import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InvestorDashboard from '../components/pages/InvestorDashboard';

const InvestorRoutes = React.memo(() => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={InvestorDashboard} />
                </Switch>
            </BrowserRouter>
    );
});

export default InvestorRoutes;