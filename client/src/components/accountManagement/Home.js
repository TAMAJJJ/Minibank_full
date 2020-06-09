import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

const Home = ({ getCurrentProfile, auth: { user }, profile:{ profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();

  },[]);

  return (
    <div className="ui row">
      <div className="column eight wide">
        Account Number: {profile === null ? ('no profile') : (profile.accountNumber)}
      <br/>
        Balance: {profile === null ? ('no profile') : (profile.Balance)}
      </div>
    </div>
  );
};


Home.propTypes = {
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
)(Home);
