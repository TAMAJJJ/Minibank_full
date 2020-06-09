import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Users from './Users';
import CreditDebit from './CreditDebit';
import Home from './Home';


const BankHome = () => {


  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>
        <Route path="/BankHome" component={Home}/>
        <Route path="/Users" component={Users}/>
        <Route path="/CreditDebit" component={CreditDebit}/>
      </BrowserRouter>

    </div>
  );
};


export default BankHome;
