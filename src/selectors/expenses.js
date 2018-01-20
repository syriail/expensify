import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate})=>{
    var visibleExpenses = expenses.filter(({description, createAt}) =>{
        const createAtMoment = moment(createAt);
        const textMatch = description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
        return textMatch && startDateMatch && endDateMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }else{
            return a.amount < b.amount ? 1 : -1;
        }
    });
    return visibleExpenses;
};