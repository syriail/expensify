import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('Should generate setTextFilter action object. with value',()=>{
    const result = setTextFilter('Some text');
    const expectedResult = {
        type:'SET_TEXT_FILTER',
        text: 'Some text'
    };

    expect(result).toEqual(expectedResult);
});

test('Should generate setTextFilter action object. without value',()=>{
    const result = setTextFilter();
    const expectedResult = {
        type:'SET_TEXT_FILTER',
        text: ''
    };

    expect(result).toEqual(expectedResult);
});

test('Should generate setStartDate action object. with value',()=>{
    const now = moment();
    const result = setStartDate(now);
    const expectedResult = {
        type:'SET_START_DATE',
        startDate: now
    };

    expect(result).toEqual(expectedResult);
});

test('Should generateStartDate action object. Without value', ()=>{
    const result = setStartDate();
    const expectedResult = {
        type: 'SET_START_DATE',
        startDate: 0
    }

    expect(result).toEqual(expectedResult);
});

test('Should generate setEndDate action object.',()=>{
    const now = moment();
    const result = setEndDate(now);
    const expectedResult = {
        type:'SET_END_DATE',
        endDate: now
    };

    expect(result).toEqual(expectedResult);
});

test('Should generate sortByDate action object',()=>{
    const result = sortByDate();
    const expectedResult = {
        type: 'SORT_BY_DATE'
    };
    expect(result).toEqual(expectedResult);
});

test('Should generate sortByAmount action object',()=>{
    const result = sortByAmount();
    const expectedResult = {
        type: 'SORT_BY_AMOUNT'
    };
    expect(result).toEqual(expectedResult);
});
