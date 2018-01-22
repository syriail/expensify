import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('Should render expense form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense form from expense data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render an error from invalid submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault:()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description state on change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target:{value:'New description'}
    });
    expect(wrapper.state('description')).toBe('New description');
    expect(wrapper).toMatchSnapshot();
});

test('Should set note state on change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').at(0).simulate('change', {
        target:{value:'New note'}
    });
    expect(wrapper.state('note')).toBe('New note');
    expect(wrapper).toMatchSnapshot();
});

test('Should set createAt state on date change', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    //This prop returns the handler as a function, so we can call it with 'now' argument
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toBe(now);
});

test('Should set calendar focus on change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    //This prop returns the handler as a function, so we can call it with 'now' argument
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});

test('Should set amount with valid input', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target:{value:'12.25'}
    });
    expect(wrapper.state('amount')).toBe('12.25');
    expect(wrapper).toMatchSnapshot();
});

test('Should not set amount with invalid input', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target:{value:'12.256'}
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('Should call onSubmit props for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createAt: expenses[1].createAt
    });
});