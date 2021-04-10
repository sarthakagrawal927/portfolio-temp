const Blog = ({ blog }) => {
  return (
    <div className='blog'>
      <figure className='blog__shape'>
        <img src={blog.img} alt='' className='blog__image' />
        <figcaption className='blog__caption'>{blog.head}</figcaption>
      </figure>
      <div className='blog__text'>
        <h3 className='heading-tertiary u-margin-bottom-small'>{blog.head}</h3>
        <p>{blog.desc}</p>
      </div>
    </div>
  );
};

export default Blog;
