import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensifyPage} from '../../components/EditExpensifyPage';
import expenses from '../fixtures/expenses';

//Setup spies
let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensifyPage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[1]}
        />);
});

test('Should render edit page correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('Should submit form after editing expense', ()=>{
    const expense = expenses[1];
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('Should remove expense', ()=>{
    const expense = expenses[1];
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id);
});