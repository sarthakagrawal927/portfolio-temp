import Project from "./project";

const list = [
  {
    head: "Well FUck youcas",
    imgName: "feature-box__icon icon-basic-world",
    techStack: ["tech 1", "tech 2"],
  },
  {
    head: "Well",
    imgName: "feature-box__icon icon-basic-compass",
    techStack: ["tech 1", "tech 2"],
  },
  ,
  {
    head: "Well",
    imgName: "feature-box__icon icon-basic-map",
    techStack: ["tech 1", "tech 2"],
  },
];
const Projects = () => {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Most popular tours</h2>
      </div>
      <div className='row'>
        {" "}
        {list.map((project) => {
          return <Project key={project} project={project} />;
        })}
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href='' className='btn btn--green'>
          Discover all
        </a>
      </div>
    </section>
  );
};

export default Projects;
