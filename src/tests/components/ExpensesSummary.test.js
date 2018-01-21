import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';



test('Should correctly expenses summary with expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={2351}/>);
    expect(wrapper).toMatchSnapshot();
});