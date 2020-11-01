import React from 'react';
import {connect} from 'react-redux';
import ExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
  render() {
    const expenseWord = this.props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
      <div>
        <h1>Viewing {this.props.expenses.length} {expenseWord} totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</h1>
      </div>
    )
  };
};

const mapStateToProps = (state) => (
  {  
    expenses: selectExpenses(state.expenses, state.filters),
    expensesTotal: ExpenseTotal(state.expenses) 
  }
)
export default connect(mapStateToProps)(ExpensesSummary); 
