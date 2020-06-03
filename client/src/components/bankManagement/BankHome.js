import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import Users from './Users';
import CreditDebit from './CreditDebit';
import { getCurrentBank } from '../../actions/bank';

const BankHome = ({ getCurrentBank, bank:{ bank } }) => {
  useEffect(() => {
    getCurrentBank();
  },[]);

  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>

        <Route path="/Users" component={Users}/>
        <Route path="/CreditDebit" component={CreditDebit}/>
        
        <div className="column eight wide">
          Total User: {bank === null ? ('no bank') : (bank.totalUser)}
        <br/>
          Total Deposit: {bank === null ? ('no bank') : (bank.totalDeposit)}

        </div>
      </BrowserRouter>

    </div>
  );
};

BankHome.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  bank: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  bank: state.bank
});

export default connect(
  mapStateToProps,
  { getCurrentBank }
)(BankHome);
