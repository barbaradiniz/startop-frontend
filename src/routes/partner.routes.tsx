import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewProject from '../components/pages/NewProject';
import PartnerDashboard from '../components/pages/PartnerDashboard';
import UpdateProject from '../components/pages/UpdateProject';
import { ProjectProvider } from '../hooks/project';

const PartnerRoutes = React.memo(() => {
    return (
        <ProjectProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PartnerDashboard} />
                    <Route path="/project/new" component={NewProject} />
                    <Route path="/project/update/:id" component={UpdateProject} />
                </Switch>
            </BrowserRouter>
        </ProjectProvider>
    );
});

export default PartnerRoutes;