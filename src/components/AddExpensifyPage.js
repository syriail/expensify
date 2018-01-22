import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

export class AddExpensifyPage extends React.Component{
    onSubmit = (expense)=>{
        //props.dispatch(addExpense(expense));
                //The solution is easier to test
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render(){
        return (
            <div>
            Add Expensify page
            <ExpenseForm 
                onSubmit={this.onSubmit}
            />
            </div>
        );
        
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startAddExpense: (expense)=> dispatch(startAddExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensifyPage);