import React from 'react';
import ReactDOM from 'react-dom';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpenseListFilter';
import ExpenseListFilter from './ExpenseListFilter';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpensesList />
    </div>
);

export default ExpensifyDashboardPage;