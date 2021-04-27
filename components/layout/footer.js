const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo-box'>
        <picture className='footer__logo'>
          <source
            srcSet='/img/logo-green-small-1x.png 1x, /img/logo-green-small-2x.png 2x'
            media='(max-width: 37.5em)'
          />
          <img
            srcSet='/img/logo-green-1x.png 1x, /img/logo-green-2x.png 2x'
            alt='Full Logo'
            src='/img/logo-green-1x.png'
          />
        </picture>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a href='' className='footer__link'>
                  Company
                </a>
              </li>
              <li className='footer__item'>
                <a href='' className='footer__link'>
                  Contact Us
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a href='' className='footer__link'>
                  Carrers
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a href='' className='footer__link'>
                  Privacy Policy
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a href='' className='footer__link'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>
            Build my
            <a href='' className='footer__link'></a> &copy; by Sarthak Agrawal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
