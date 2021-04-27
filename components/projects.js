import Project from "./project";

const list = [
  {
    head: "Well super duper awesome",
    imgName: "feature-box__icon icon-basic-world",
    techStack: ["tech 1", "tech 2", "tech 3", "tech 4", "tech 5"],
  },
  {
    head: "Well hello there",
    imgName: "feature-box__icon icon-basic-compass",
    techStack: ["tech 1", "tech 2", "tech 3", "tech 4", "tech 5"],
  },
  ,
  {
    head: "Well hello there",
    imgName: "feature-box__icon icon-basic-map",
    techStack: ["tech 1", "tech 2", "tech 3", "tech 4", "tech 5"],
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
        {list.map((project, index) => {
          return <Project key={index} project={project} />;
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
