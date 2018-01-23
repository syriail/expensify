import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login ,logout} from './actions/auth';
import {firebase} from './firebase/firebase';

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

var hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, app);
    }
};
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        ReactDOM.render(<p>Loading...</p>, app);
        store.dispatch(startSetExpenses()).then(()=>{
        renderApp();
        //Redirect to dashboard page only if the user was originally on login page which is the home page '/'
        if(history.location.pathname === '/'){
            history.push('/dashboard');
        }
});
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});





