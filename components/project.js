const Project = ({ project }) => {
  return (
    <div className='col-1-of-3'>
      <div className='card'>
        <div className='card__side card__side--front'>
          {" "}
          <div className='card__picture'>&nbsp;</div>
          <h4 className='card__heading'>
            {" "}
            <span className='card__heading-span'> {project.head}</span>
          </h4>
          <div className='card__details'>
            <ul>
              {" "}
              {project.techStack.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className='card__side card__side--back'>
          {" "}
          <div className='card__cta'>
            <a href='' className='btn btn--white'>
              <img src='/github-brands.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
