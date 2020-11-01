import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import ExpensesTotal from '../../selectors/expenses-total';
import expenseTotal from '../../selectors/expenses-total';

test('should correctly render ExpenseSummary with 1 expense',() => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} expensesTotal={expenses[0].amount}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses',() => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} expensesTotal={ExpensesTotal(expenses)}/>);
  expect(wrapper).toMatchSnapshot();
});