import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InvestorDashboard from '../components/pages/InvestorDashboard';
import ProjectDetails from '../components/pages/ProjectDetails';
import { ProjectProvider } from '../hooks/project';

const InvestorRoutes = React.memo(() => {
    return (
        <ProjectProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/project/:id" component={ProjectDetails} />
                    <Route path="/" component={InvestorDashboard} />
                </Switch>
            </BrowserRouter>
        </ProjectProvider>
    );
});

export default InvestorRoutes;