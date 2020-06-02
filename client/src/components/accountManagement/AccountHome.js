import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Transaction from './Transaction';
import Transfer from './Transfer';

const AccountHome = () => {
  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>

        <div className="column eight wide">
  
          <Route path="/Transaction" component={Transaction}/>
          <Route path="/Transfer" component={Transfer}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AccountHome;
