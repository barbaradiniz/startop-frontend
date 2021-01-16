import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/pages/Landing';

const AuthRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
});

export default AuthRoutes;