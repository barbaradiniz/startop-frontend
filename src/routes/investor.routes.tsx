import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InvestorDashboard from '../components/pages/InvestorDashboard';
import { ProjectProvider } from '../hooks/project';

const InvestorRoutes = React.memo(() => {
    return (
        <ProjectProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={InvestorDashboard} />
                </Switch>
            </BrowserRouter>
        </ProjectProvider>
    );
});

export default InvestorRoutes;