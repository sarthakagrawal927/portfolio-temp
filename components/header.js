const Header = () => {
  return (
    <header className='header'>
      {/* <div className='header__logo-box'>
        <img src='img/logo-white.png' alt='' className='header__logo' />
      </div> */}
      <div className='header__text-box'>
        {" "}
        <h1 className='heading-primary'>
          {" "}
          <span className='heading-primary--main'>OUTDOORS</span>
          <span className='heading-primary--secondary'>
            is whe re life ends
          </span>
        </h1>
        <a href='' className='btn btn--white btn--animated'>
          Find Your
        </a>
      </div>
    </header>
  );
};

export default Header;
