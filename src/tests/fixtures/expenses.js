import moment from 'moment';

export default [
    {
        id:'1',
        description: 'Coffe',
        amount: 250,
        note:'',
        createAt: moment(0).subtract(1, 'days').valueOf()
    },
    {
        id:'2',
        description: 'Tee',
        amount: 350,
        note:'',
        createAt: moment(0).add(2, 'days').valueOf()
    },
    {
        id:'3',
        description: 'Gas bill',
        amount: 1250,
        note:'',
        createAt: moment(0).add(1, 'days').valueOf()
    },
    {
        id:'4',
        description: 'Rend',
        amount: 100000,
        note:'',
        createAt: moment(0).valueOf()
    },
    {
        id:'5',
        description: 'Water bill',
        amount: 9800,
        note:'',
        createAt: moment(0).add(3, 'days').valueOf()
    }
];