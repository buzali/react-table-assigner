import React from 'react';
import Home from '../components/Home';
import Status from '../components/Status';
import { Switch, Route, Redirect } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/caja/:id' component={Status} />
            <Redirect to='/' />
        </Switch>
    );
}

export default Routes;