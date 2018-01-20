import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

test('Should render the list of given expenses!', ()=>{
    const wrapper = shallow(<ExpensesList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render an empty message!', ()=>{
    const wrapper = shallow(<ExpensesList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});