import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;
beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        sortByDate={sortByDate}
        setEndDate={setEndDate}
        />);
});

test('Should render expense list filter component', ()=>{

    expect(wrapper).toMatchSnapshot();
});

test('Should render expense list filter with alt data', ()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should call setTextFilter with bil text value', ()=>{
    wrapper.find('input').at(0).simulate('change', {
        target:{value: 'te'}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('te');
});

test('Should call sortByDate', ()=>{
    wrapper.find('select').simulate('change', {
        target:{value: 'date'}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should call sortByAmount', ()=>{
    wrapper.find('select').simulate('change', {
        target:{value: 'date'}
    });
    wrapper.find('select').simulate('change', {
        target:{value: 'amount'}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should change start and start date by calling setStartDate and setEndDate', ()=>{
    const startDate = moment(0);
    const endDate = moment(0).add(2, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handel focused change on date picker', ()=>{
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});