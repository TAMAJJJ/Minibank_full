import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllTransactions } from '../../actions/transaction';


const Transaction = ({ getAllTransactions, transaction : {transactions}}) => {
  useEffect(() => {
    getAllTransactions();

  },[]);

  let listTransaction = null;

  if (transactions) {
    listTransaction = transactions.map(transaction => (
      <tr>
        <td>{transaction.targetAccount}</td>
        <td>{transaction.Amount}</td>
      </tr>
    ));
  }

  return (
    //<div className="column eight wide" style = {{float:'right'}}>
      <div className="column eight wide">
        <table style = {{tableLayout: 'auto',width: '100%'  }}>
          <thead>
            <tr>
              <td>Target Account</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {listTransaction}
          </tbody>
        </table>
      </div>
    //</div>
  );
};

Transaction.propTypes = {
  getAllTransactions: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  transaction: state.transaction
});

export default connect(
  mapStateToProps,
  { getAllTransactions }
)(Transaction);
