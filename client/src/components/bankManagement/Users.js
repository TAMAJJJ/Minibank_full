import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAllProfiles } from '../../actions/profile';

const Users = ({ getAllProfiles, profile : {profiles}}) => {
  useEffect(() => {
    getAllProfiles();

  },[]);

  let listProfile = null;

  if (profiles) {
    listProfile = profiles.map(profile => (
      <tr>
        <td>{profile.user.name}</td>
        <td>{profile.accountNumber}</td>
        <td>{profile.Balance}</td>
      </tr>
    ));
  }



  return(
      <div className="column eight wide">
        <table style = {{tableLayout: 'auto',width: '100%'  }}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Account Number</td>
              <td>Balance</td>
            </tr>
          </thead>
          <tbody>
            {listProfile}
          </tbody>
        </table>
      </div>
  );
};

Users.propTypes = {
  getCurrentProfiles: PropTypes.func.isRequired,
  profile: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getAllProfiles }
)(Users);
