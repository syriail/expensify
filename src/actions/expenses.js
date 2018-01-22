import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {
            description = '', note = '', amount = 0, createAt = 0
        } = expenseData;

        const expense = {description, note, amount, createAt};
        console.log(expense);
        //We return here to chain another then in test cases. See expenses.test.js
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

