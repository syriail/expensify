import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('Should render Expense list item correctly', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

