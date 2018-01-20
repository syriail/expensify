import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'some description',
        note: 'some note',
        amount: 100,
        createAt: 1000
    };
    const action = addExpense(expenseData);
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            ...expenseData
        }
    };

    expect(action).toEqual(expectedResult);
});

test('Shoul setup a add expense action object without values', ()=>{
    const action = addExpense();
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createAt: 0
        }
    };

    expect(action).toEqual(expectedResult);
});