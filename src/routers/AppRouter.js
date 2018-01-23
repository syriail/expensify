import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensifyPage from '../components/AddExpensifyPage';
import EditExpensifyPage from '../components/EditExpensifyPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpensifyDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensifyPage} />
                <PrivateRoute path="/edit/:id" component={EditExpensifyPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
        
    </Router>
);

export default AppRouter;