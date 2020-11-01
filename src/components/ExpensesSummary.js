import React from 'react';
import {connect} from 'react-redux';
import ExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';

class ExpensesSummary extends React.Component {
  render() {
    return (
      <div>
        <h1>Viewing {this.props.expenses.length} expenses totalling {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</h1>
      </div>
    )
  };
};

const mapStateToProps = (state) => (
  {  
    expenses: state.expenses,
    expensesTotal: ExpenseTotal(state.expenses) 
  }
)
export default connect(mapStateToProps)(ExpensesSummary); 
