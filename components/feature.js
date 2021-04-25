const Feature = ({ feature }) => {
  return (
    <div className='col-1-of-4'>
      <div className='feature-box'>
        {" "}
        <i className={feature.iconName}></i>
        <h3 className='heading-tertiary u-margin-bottom-small'>
          {feature.head}
        </h3>
        <p className='feature-box-text'>{feature.desc}</p>
      </div>
    </div>
  );
};

export default Feature;
