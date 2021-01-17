import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewProject from '../components/pages/NewProject';
import PartnerDashboard from '../components/pages/PartnerDashboard';

const PartnerRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PartnerDashboard} />
                <Route path="/project/new" component={NewProject} />
            </Switch>
        </BrowserRouter>
    );
});

export default PartnerRoutes;