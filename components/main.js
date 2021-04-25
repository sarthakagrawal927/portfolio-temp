const Main = () => {
  return (
    <main className='grid-test'>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>Exciting tour for people</h2>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Fall in love mother fucker
            </h3>
            <p className='paragraph'>
              fjsnafjknas ksajnfkasjd fainfnf asnfds nosaf safasnfkjasf safowane
              fsdomfas lasnflska fsaflms afmlsa safmnsal faslmd safasnfkjasf
              safowane fsdomfas lasnflska fsaflms afmlsa safmnsal faslmd
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Fall in love mother fucker
            </h3>
            <p className='paragraph'>
              fjsnafjknas ksajnfkasjd fainfnf asnfds nosaf safasnfkjasf safowane
              fsdomfas lasnflska fsaflms afmlsa safmnsal faslmd safasnfkjasf
            </p>
            <a href='#' className='btn-text'>
              Learn More &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                src='img/nat-1-large.jpg'
                alt='Photo 1'
                className='composition__photo composition__photo--p1'
              />
              <img
                src='img/nat-2-large.jpg'
                alt='Photo 2'
                className='composition__photo composition__photo--p2'
              />
              <img
                src='img/nat-3-large.jpg'
                alt='Photo 3'
                className='composition__photo composition__photo--p3'
              />
            </div>
          </div>
        </div>{" "}
      </section>
    </main>
  );
};

export default Main;
