import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpensesList = (props) =>(
    <div>
        <h1> Expenses List</h1>
        {
            props.expenses.length === 0? (
                <p>No expenses have been added</p>
            ) : (
                props.expenses.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
            )
        }
        
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);
