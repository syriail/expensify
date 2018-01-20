import selectExpneses from '../../selectors/expenses';
import moment from 'moment';
import rawExpneses from '../fixtures/expenses';

test('Filter on description of bil. Default sortBy is amount', ()=>{
    const filteredExpenses = selectExpneses(rawExpneses,{text:'bil'});

    expect(filteredExpenses).toEqual([rawExpneses[4], rawExpneses[2]]);
});

test('Get all expenses sorted by amount. Default sortBy is date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate:undefined
    };
    const filteredExpenses = selectExpneses(rawExpneses,filters);

    expect(filteredExpenses).toEqual([rawExpneses[4], rawExpneses[1], rawExpneses[2], rawExpneses[3], rawExpneses[0]]);
});

test('Get expenses filtered by start date and sorted by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate:undefined
    };
    const filteredExpenses = selectExpneses(rawExpneses,filters);

    expect(filteredExpenses).toEqual([rawExpneses[4], rawExpneses[1], rawExpneses[2], rawExpneses[3]]);
});

test('Get expenses filtered by end date and sorted by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(1,'days')
    };
    const filteredExpenses = selectExpneses(rawExpneses,filters);

    expect(filteredExpenses).toEqual([rawExpneses[2], rawExpneses[3], rawExpneses[0]]);
});

test('Get expenses filtered by start and end dates and sorted by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(1,'days'),
        endDate: moment(0).add(2,'days')
    };
    const filteredExpenses = selectExpneses(rawExpneses,filters);

    expect(filteredExpenses).toEqual([rawExpneses[1], rawExpneses[2]]);
});