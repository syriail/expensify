import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
store.dispatch(addExpense({
    description: 'Water bill',
    amount: 2500,
    createAt: 35000
}));


store.dispatch(addExpense({
    description: 'Gas bill',
    amount: 1000,
    createAt: 50000
}));

store.dispatch(addExpense({
    description: 'Rent bill',
    amount: 100000,
    createAt: 40000
}));

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

let app = document.getElementById('app');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, app);



