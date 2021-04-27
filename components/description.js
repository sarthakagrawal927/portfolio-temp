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
              Fall in love with nature
            </h3>
            <p className='paragraph'>
              fjsnafjknas ksajnfkasjd fainfnf asnfds nosaf safasnfkjasf safowane
              fsdomfas lasnflska fsaflms afmlsa safmnsal faslmd safasnfkjasf
              safowane fsdomfas lasnflska fsaflms afmlsa safmnsal faslmd
            </p>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Fall in love with nature
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
                srcSet='img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w'
                alt='Photo 1'
                className='composition__photo composition__photo--p1'
                sizes='(max-width:900px) 20vw, (max-width:600px) 30vw, 300px'
                src='img/nat-1.jpg'
              />
              <img
                srcSet='img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w'
                alt='Photo 2'
                className='composition__photo composition__photo--p2'
                sizes='(max-width:900px) 20vw, (max-width:600px) 30vw, 300px'
                src='img/nat-2.jpg'
              />
              <img
                srcSet='img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w'
                alt='Photo 3'
                className='composition__photo composition__photo--p3'
                sizes='(max-width:900px) 20vw, (max-width:600px) 30vw, 300px'
                src='img/nat-3.jpg'
              />
            </div>
          </div>
        </div>{" "}
      </section>
    </main>
  );
};

export default Main;
