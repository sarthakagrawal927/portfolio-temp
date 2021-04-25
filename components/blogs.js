import Blog from "./blog";

const list = [
  {
    head: "Well",
    iconName: "feature-box__icon icon-basic-world",
    desc:
      "adf adf asdk sadkmadf asdk sadkmadf asdk sadkmasdk saadf asdk sadkmadf adf adf asdk sadkmadf asdk sadkmadf asdk sadkmasdk saadf asdk sadkmadf adf adf asdk sadkmadf asdk sadkmadf asdk sadkmasdk saadf asdk sadkmadf asdk sadkmadf asdk s adkmdkm ",
    img: "/img/nat-8.jpg",
  },
  {
    head: "Well again",
    iconName: "feature-box__icon icon-basic-compass",
    desc:
      "adf asdadf asdk sadkmadf asdk sadkmadf as dk sadkmk saadf asdk sadkmadf  asdadf asdk sadkmadf asdk sadkmadf asdk sadkmk saadf asdk sadkmadf a asdadf asdk sadkmadf asdk sadkmadf asdk sadkmk saadf asdk sadkmadf aasdk sadkmadf asdk sadkmdkm",
    img: "/img/nat-9.jpg",
  },
];
const Blogs = () => {
  return (
    <section className='section-blogs'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay={true} muted={true} loop>
          <source src='/img/video.mp4' type='video/mp4' />
          <source src='/img/video.webm' type='video/webm' />
          Your Browser Not supported
        </video>
      </div>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Making people genuinely happy</h2>
      </div>
      <div className='row'>
        {list.map((blog, index) => {
          return <Blog key={index} blog={blog} />;
        })}
      </div>
      <div className='u-center-text u-margin-top-huge'>
        <a href='' className='btn-text'>
          Discover all &rarr;
        </a>
      </div>
    </section>
  );
};

export default Blogs;
