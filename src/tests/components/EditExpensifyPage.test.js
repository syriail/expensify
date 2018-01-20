import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensifyPage} from '../../components/EditExpensifyPage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, history, wrapper;

beforeEach(()=>{
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensifyPage
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
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
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
});

test('Should remove expense', ()=>{
    const expense = expenses[1];
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expense.id);
});