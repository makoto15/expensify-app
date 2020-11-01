import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Food',
    note: '',
    amount: 12300,
    createdAt: moment(0).add(5,'days').valueOf(0)
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const newExpense = {
    description: 'Gummy',
    note: '',
    amount: 2000,
    createdAt: 0
  }
  const newExpenseWithId = {
    id: '1',
    ...newExpense
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: newExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([newExpenseWithId,expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
  const newExpense = {
    description: 'Gummy',
    note: '',
    amount: 2000,
    createdAt: 0
  }
  const newExpenseWithId = {
    id: '200',
    ...newExpense
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '200',
    updates: newExpense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
