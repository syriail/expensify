import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage';
import AddExpensifyPage from '../components/AddExpensifyPage';
import EditExpensifyPage from '../components/EditExpensifyPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensifyDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensifyPage} />
                <Route path="/edit/:id" component={EditExpensifyPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
        
    </BrowserRouter>
);

export default AppRouter;