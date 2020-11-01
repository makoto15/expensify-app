import expenses from '../fixtures/expenses';
import expenseTotal from '../../selectors/expenses-total';


test('should return 0 if no expenses',() => {
  expect(expenseTotal([])).toBe(0);
});

test('should correctly add up a single expense',() => {
  expect(expenseTotal([expenses[0]])).toBe(195)
});


test('should have total amount of expenses outputed',() => {
  expect(expenseTotal(expenses)).toBe(114195)
});