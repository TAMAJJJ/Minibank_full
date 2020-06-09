import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Transaction from './Transaction';
import Transfer from './Transfer';
import Home from './Home';

const AccountHome = ()=>{


  return (
    <div className="ui row">
      <BrowserRouter>
        <div className="column eight wide">
          <Header />
        </div>
        <Route path="/AccountHome" component={Home}/>
        <Route path="/Transaction" component={Transaction}/>
        <Route path="/Transfer" component={Transfer}/>
      </BrowserRouter>

    </div>
  );
};



export default AccountHome;
