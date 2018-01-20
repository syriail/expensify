import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bil',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export {filters, altFilters};