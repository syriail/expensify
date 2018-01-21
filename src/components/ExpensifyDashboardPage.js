import React from 'react';
import ReactDOM from 'react-dom';
import ExpensesList from './ExpensesList';
import ExpensesListFilter from './ExpenseListFilter';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpensifyDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpensesList />
        <ExpensesSummary />
    </div>
);

export default ExpensifyDashboardPage;