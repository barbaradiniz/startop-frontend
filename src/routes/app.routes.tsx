import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/pages/Landing';

const AppRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
});

export default AppRoutes;