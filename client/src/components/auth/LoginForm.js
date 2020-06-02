import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { setAlert } from '../../actions/alert';
import { login,loadUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ setAlert, login, isAuthenticated, role }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email,password });
  };

  //redirect
  if (isAuthenticated) {
    console.log(role);
    if (role === 'admin') {
      return <Redirect to='/BankHome' />
    }else if (role === 'user'){
      return <Redirect to='/AccountHome' />
    }
  }

  return (
    <Fragment>
      <Form style = {{margin: "auto", marginTop: "20%", fontSize: "20px"}} onSubmit={e => onSubmit(e)}>
        <h1 style = {{fontSize: "50px", textAlign: "center", marginBottom: "20px"}}>Log In</h1>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' name='email' value={ email } onChange= {e => onChange(e)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type= "password" placeholder='Password' name='password' value={ password } onChange= {e => onChange(e)} />
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    </Fragment>
  )
}

LoginForm.propTypes ={
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.user ? state.auth.user.role : null
});


export default connect(
  mapStateToProps,
  { setAlert,login,loadUser }
)(LoginForm);
