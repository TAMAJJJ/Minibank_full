import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentBank } from '../../actions/bank';

const Home = ({ getCurrentBank, bank:{ bank } }) => {
  useEffect(() => {
    getCurrentBank();
  },[]);

  return (
    <div className="ui row">


        <div className="column eight wide">
          Total User: {bank === null ? ('no bank') : (bank.totalUser)}
        <br/>
          Total Deposit: {bank === null ? ('no bank') : (bank.totalDeposit)}

        </div>


    </div>
  );
};

Home.propTypes = {
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
)(Home);
