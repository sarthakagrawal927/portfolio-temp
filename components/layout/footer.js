const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div className='footer__logo-box'>
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
      </div> */}
      <div className='row'>
        <div className='col-1-of-2'>
          <div className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a
                  href='https://www.github.com/sarthakagrawal927'
                  target='_blank'
                  className='footer__link'>
                  Github
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://leetcode.com/sarthakagrawal927/'
                  target='_blank'
                  className='footer__link'>
                  Leetcode
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a
                  href='https://dash.significanthobbies.rocks/'
                  target='_blank'
                  className='footer__link'>
                  Blog
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a
                  href='https://www.linkedin.com/in/sarthakagrawal927/'
                  target='_blank'
                  className='footer__link'>
                  Linkedin
                </a>
              </li>{" "}
              <li className='footer__item'>
                <a
                  href='mailto:sarthakagrawal927@gmail.com'
                  className='footer__link'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1-of-2'>
          <p className='footer__copyright'>Build by Sarthak Agrawal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
