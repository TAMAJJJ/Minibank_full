import React, { useState } from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { makeTransaction } from '../../actions/transaction';

const Transfer = ({ makeTransaction }) => {
  const [formData, setFormData] = useState({
    accountNumber:'',
    targetAccount:'',
    Amount:0
  });

  const {
    accountNumber,
    targetAccount,
    Amount
  } = formData;

  const onChange = e => {
    console.log(e.target);
    if (e.target.name == Amount) {
      setFormData({...formData, Amount: parseInt(e.target.value)});
    }else{
      setFormData({...formData, [e.target.name]:e.target.value});
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    makeTransaction(formData);
  }

  return (
    <Form onSubmit={e => onSubmit(e)}>
     <Form.Field>
       <label>Your Account Number</label>
       <input value={accountNumber} name='accountNumber' onChange={e => onChange(e)}/>
     </Form.Field>
     <Form.Field>
       <label>Target Account Number</label>
       <input value={targetAccount} name='targetAccount' onChange={e => onChange(e)}/>
     </Form.Field>
     <Form.Field>
       <label>Amount</label>
       <input value={Amount} name='Amount' onChange={e => onChange(e)}/>
     </Form.Field>

     <Button type='submit'>Transfer</Button>
   </Form>
  );
};

Transfer.propTypes = {
  makeTransaction : PropTypes.func.isRequired
}

export default connect(
  null,
  { makeTransaction }
)(Transfer);
