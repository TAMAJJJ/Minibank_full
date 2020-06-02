import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary vertical pointing menu">
      <Link to="/AccountHome" className="item" style={{fontSize:'20px'}}>
        Home
      </Link>
      <Link to="/Transaction" className="item" style={{fontSize:'20px'}}>
        Transaction
      </Link>
      <Link to="/Transfer" className="item" style={{fontSize:'20px'}}>
        Transfer
      </Link>
    </div>

  );
};

export default Header;
