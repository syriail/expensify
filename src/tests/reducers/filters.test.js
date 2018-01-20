import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter state', ()=>{
    const state = filtersReducer(undefined, {type:'@@INIT'});
    const expectedState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    expect(state).toEqual(expectedState);
});

test('Should setup sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    const expectedState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    expect(state).toEqual(expectedState);
    //or expect(state.sortBy).toBe('amount');
});

test('Should setup sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('Should setup text filter', ()=>{
    const currentState = {
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, {type:'SET_TEXT_FILTER', text:'bill'});
    expect(state.text).toBe('bill');
});

test('Should setup startDate filter', ()=>{
    const currentState = {
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, {type:'SET_START_DATE', startDate:moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('Should setup endDate filter', ()=>{
    const currentState = {
        text: '',
        sortBy: '',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, {type:'SET_END_DATE', endDate:moment(0)});
    expect(state.endDate).toEqual(moment(0));
});



