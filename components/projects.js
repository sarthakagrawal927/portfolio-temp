import Project from "./project";

const list = [
  {
    head: "GitTinder",
    link: "http://gittinder.herokuapp.com/",
    techStack: ["ReactJS", "NodeJS", "Redux", "MongoDB", "AWS"],
    github: "https://www.github.com/sarthakagrawal927/gittinder",
  },
  {
    head: "EasyLOR",
    link: "https://easy-lor-dev.vercel.app/",
    techStack: ["TS", "NextJS", "GraphQL", "NodeJS", "PostgreSQL"],
    github: "https://github.com/sarthakagrawal927/EasyLOR",
  },
  ,
  {
    head: "Performance Monitor",
    link: "",
    techStack: ["ReactJS", "SocketIO", "Redis", "MongoDB", "NodeJS"],
    github: "https://github.com/sarthakagrawal927/performance",
  },
];
const Projects = () => {
  return (
    <section className='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Featured Projects</h2>
      </div>
      <div className='row'>
        {" "}
        {list.map((project, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a
          href='https://www.github.com/sarthakagrawal927'
          target='_blank'
          className='btn btn--green'>
          Discover all
        </a>
      </div>
    </section>
  );
};

export default Projects;
