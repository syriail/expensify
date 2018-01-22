import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensifyPage} from '../../components/AddExpensifyPage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(()=>{
    startAddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensifyPage startAddExpense={startAddExpense} history={history}/>);
});

test('Should render add expense page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should handle submit', ()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});