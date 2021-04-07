import React from "react";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src='img/logo-white.png' alt='' className='logo' />
      </div>
      <div className='text-box'>
        {" "}
        <h1 className='heading-primary'>
          {" "}
          <span className='heading-primary-main'>OUTDOORS</span>
          <span className='heading-primary-secondary'>
            is where life begins
          </span>
        </h1>
        <a href='' className='btn btn-white btn-animated'>
          Find Your
        </a>
      </div>
    </header>
  );
};

export default Header;
