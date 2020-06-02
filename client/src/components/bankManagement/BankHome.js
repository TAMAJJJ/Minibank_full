import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Users from './Users';
import CreditDebit from './CreditDebit';

const BankHome = () => {
  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>

        <div className="column eight wide">
          <Route path="/Users" component={Users}/>
          <Route path="/CreditDebit" component={CreditDebit}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default BankHome;
