import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../components/pages/Landing';
import Login from '../components/pages/Login';

const AuthRoutes = React.memo(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
});

export default AuthRoutes;