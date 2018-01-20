import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import rawExpneses from '../fixtures/expenses';

test('Should setup the default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test('Should add an expense', ()=>{
    const expense = {
        description: 'Ensurance',
        amount: 6500,
        note:'',
        createAt: moment(0).add(4, 'days')
    };
    const state = expensesReducer([], {type: 'ADD_EXPENSE', expense: expense});
    expect(state).toEqual([expense]);
});

test('Should remove expense of id 2', ()=>{
    const state = expensesReducer(rawExpneses, {type: 'REMOVE_EXPENSE', id: 2});
    expect(state).toEqual([rawExpneses[0], rawExpneses[2], rawExpneses[3], rawExpneses[4]]);
});

test('Should remove expense of not exists id', ()=>{
    const state = expensesReducer(rawExpneses, {type: 'REMOVE_EXPENSE', id: -1});
    expect(state).toEqual(rawExpneses);
});

test('Should edit the expense of id 3',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: rawExpneses[2].id,
        updates:{
            description: 'Edited Gas bill',
            amount: 2300
        }
    };

    const state = expensesReducer(rawExpneses, action);
    expect(state[2].amount).toBe(2300);
    expect(state[2].description).toBe('Edited Gas bill');
});

test('Should edit the expense of id 3',()=>{
    const action = {
        type:'EDIT_EXPENSE',
        id: -1,
        updates:{
            description: 'Edited Gas bill',
            amount: 2300
        }
    };

    const state = expensesReducer(rawExpneses, action);
    expect(state).toEqual(rawExpneses);
});


