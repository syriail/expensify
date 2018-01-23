import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
//import './playground/promises';


const store = configureStore();

const state = store.getState();

let app = document.getElementById('app');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>Loading...</p>, app);
store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, app);
});





