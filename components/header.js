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
          <span className='heading-primary--main'>Hi There!</span>
          <span className='heading-primary--secondary'>
            I am Sarthak Agrawal
          </span>
        </h1>
        <p href='' className='btn btn--white btn--animated'>
          Welcome
        </p>
      </div>
    </header>
  );
};

export default Header;
