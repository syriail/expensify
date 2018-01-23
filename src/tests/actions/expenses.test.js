import {startAddExpense, startSetExpenses, startRemoveExpense, addExpense, editExpense, removeExpense, setExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import databaes from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData = {};

    expenses.forEach(({id, description, note, amount, createAt})=>{
        expensesData[id] = {description, note, amount, createAt};
    });
    databaes.ref('expenses').set(expensesData).then(()=> done());
});

test('Should setup a remove expense action object', ()=>{
    const action = removeExpense({
        id: '123'
    });

    const expectedResult = {
        type: 'REMOVE_EXPENSE',
        id: '123'
    };

    expect(action).toEqual(expectedResult);
});

test('Should remove expense from database', (done)=>{
    const mockStore = createMockStore({});
    const id = expenses[2].id;
    mockStore.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return databaes.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});


test('Should setup a edit expense action object', ()=>{
    const action = editExpense('123', {description: 'Some description', amount: 100});

    const expectedResult = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates:{
            description: 'Some description',
            amount: 100
        }
    };

    expect(action).toEqual(expectedResult);
});

test('Shoul setup a add expense action object with provided values', ()=>{
    const action = addExpense(expenses[1]);
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    };

    expect(action).toEqual(expectedResult);
});

test('Should setup a set expenses action object', ()=>{
    const action = setExpenses(expenses);
    const expectedResult = {
        type: 'SET_EXPENSES',
        expenses
    };
    expect(action).toEqual(expectedResult);
});

test('Should add expense to databaes and store', (done)=>{
    const mockStore = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3900,
        createAt: 8439849382,
        note:''
    };
    mockStore.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
        return databaes.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add expense with defaults to databaes and store', (done)=>{
    const mockStore = createMockStore({});
    const defaultExpense = {
        description:'',
        note:'',
        amount:0,
        createAt:0
    };
    mockStore.dispatch(startAddExpense()).then(()=>{
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...defaultExpense
            }
        });
        return databaes.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
    });;
});

test('Should fetch expenses from test database', (done)=>{
    const mockStore = createMockStore({});
    mockStore.dispatch(startSetExpenses()).then(()=>{
        const actions = mockStore.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

