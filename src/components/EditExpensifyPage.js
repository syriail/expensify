import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {editExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensifyPage extends React.Component{

    onSubmit = (expense)=>{
        //props.dispatch(editExpense(props.expense.id, {...expense}));
        //The following aproach is better for testing
        this.props.editExpense(this.props.expense.id, {...expense});
        this.props.history.push('/');
    };

    onClick = ()=>{
        //props.dispatch(removeExpense({id: props.expense.id}));
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };

    render(){
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                onClick={this.onClick}
            >Remove
            </button>
            </div>
        );
    };
}

const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        editExpense: (id, expense)=> dispatch(editExpense(id, expense)),
        startRemoveExpense: (id)=> dispatch(startRemoveExpense({id}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensifyPage);