import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

const now = moment();


export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);
          this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createAt: props.expense ? moment(props.expense.createAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    /* User this way when we don't need to initialize state depending on props
    
    state = {
        description: '',
        amount: '',
        note: '',
        createAt: moment(),
        calendarFocused: false,
        error: ''
    };
    */

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({note}));
    };

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };

    onDateChange = (createAt)=>{
        if(createAt){
            this.setState(()=>({createAt}));
        }
        
    };

    onFocusChange = ({focused})=>{

        this.setState(()=>({calendarFocused: focused}));
    };

    onSubmit = (e)=>{
        e.preventDefault();
        const description = this.state.description;
        const amount = this.state.amount;
        if(!this.state.description || !this.state.amount){
            //Show the error: Please provide a description and an amount
            this.setState(()=>({error: 'Please provide a description and an amount'}));
        }else{
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                note: this.state.note,
                createAt: this.state.createAt.valueOf()
            });
        }
    };

    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <textarea
                        placeholder="Enter here an optional note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}
