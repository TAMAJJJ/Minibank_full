import React, { useState } from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { creditDebit } from '../../actions/profile';

const CreditDebit = ({ creditDebit }) => {
  const [formData, setFormData] = useState({
    accountNumber:'',
    creditdebit:'',
    amount:0
  });



  const {
    accountNumber,
    creditdebit,
    amount
  } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]:e.target.value});
  };

  const onClick = e => {
    if (e.target.name == 'credit') {
      setFormData({...formData, creditdebit:'credit'});
    }else{
      setFormData({...formData, creditdebit:'debit'});
    }
    creditDebit(formData);
  }


  return (
    <Form>
     <Form.Field>
       <label>Target Account Number</label>
       <input value={accountNumber} name='accountNumber' onChange={e => onChange(e)}/>
     </Form.Field>
     <Form.Field>
       <label>Amount</label>
       <input value={amount} name='amount' onChange={e => onChange(e)}/>
     </Form.Field>

     <Button type='submit' name='credit' onClick= {e => onClick(e)} >Credit</Button>
     <Button type='submit' name='debit' onClick= {e => onClick(e)}>Debit</Button>

   </Form>
  );
};

CreditDebit.propTypes = {
  creditDebit : PropTypes.func.isRequired
}

export default connect(
  null,
  { creditDebit }
)(CreditDebit);
