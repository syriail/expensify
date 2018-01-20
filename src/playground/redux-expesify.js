import {createStore, combineReducers} from 'redux';
import configureStore from '../store/configureStore';
import getVisibleExpenses from '../selectors/expenses';
import {addExpense, editExpense, removeExpense} from '../actions/expenses';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';


const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expeseOne = store.dispatch(addExpense({
    description: 'rent',
    amount: 100
}));


const expenseTwo = store.dispatch(addExpense({
    description: 'coffee',
    amount: 200
}));

store.dispatch(removeExpense({
    id: expeseOne.expense.id
}));

store.dispatch(editExpense(
    expenseTwo.expense.id,
    {amount: 250}
));

store.dispatch(setTextFilter('co'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setEndDate(250));
store.dispatch(setStartDate(1));


const demoState = {
    expenses:[
        {
            id: 'someId',
            description: 'Some Expense',
            note: 'a note about someId',
            amount: 54500,
            createAt: 0
        }
    ],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};
