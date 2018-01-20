import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

export class AddExpensifyPage extends React.Component{
    onSubmit = (expense)=>{
        //props.dispatch(addExpense(expense));
                //The solution is easier to test
        this.props.addExpense(expense);
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
        addExpense: (expense)=> dispatch(addExpense(expense))
    };
};

export default connect(undefined, mapDispatchToProps)(AddExpensifyPage);