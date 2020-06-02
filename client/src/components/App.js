import { BrowserRouter, Route} from 'react-router-dom';
import React, { useEffect } from 'react';

import Login from './auth/Login';
import AccountHome from './accountManagement/AccountHome';
import BankHome from './bankManagement/BankHome';

//redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className = "ui container grid" style = {{margin:"2%", fontSize:"20px"}}>

         <BrowserRouter>
             <Route path="/" exact component={Login}/>
             <Route path="/AccountHome" exact component={AccountHome}/>
             <Route path="/BankHome" exact component={BankHome}/>
          </BrowserRouter>

      </div>
    </Provider>
  );
};

export default App;
