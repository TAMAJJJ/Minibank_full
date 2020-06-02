import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary vertical pointing menu">
      <Link to="/bankHome" className="item" style={{fontSize:'20px'}}>
        Home
      </Link>
      <Link to="/Users" className="item" style={{fontSize:'20px'}}>
        Users
      </Link>
      <Link to="/CreditDebit" className="item" style={{fontSize:'20px'}}>
        Credit/Debit
      </Link>
</div>

  );
};

export default Header;
