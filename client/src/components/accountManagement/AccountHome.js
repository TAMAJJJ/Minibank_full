import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import Transaction from './Transaction';
import Transfer from './Transfer';
import { getCurrentProfile } from '../../actions/profile';

const AccountHome = ({ getCurrentProfile, auth: { user }, profile:{ profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();

  },[]);

  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>

        <Route path="/Transaction" component={Transaction}/>
        <Route path="/Transfer" component={Transfer}/>
      </BrowserRouter>
      <div className="column eight wide">
        Account Number: {profile === null ? ('no profile') : (profile.accountNumber)}
      <br/>
        Balance: {profile === null ? ('no profile') : (profile.Balance)}
      </div>
    </div>
  );
};


AccountHome.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(AccountHome);
