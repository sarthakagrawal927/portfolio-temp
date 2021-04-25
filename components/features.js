import Feature from "./feature";

const list = [
  {
    head: "Well",
    iconName: "feature-box__icon icon-basic-world",
    desc:
      "adf adf asdk sadkmadf asdk sadkmadf asdk sadkmasdk saadf asdk sadkmadf asdk sadkmadf asdk sadkmdkm",
  },
  {
    head: "Well",
    iconName: "feature-box__icon icon-basic-compass",
    desc:
      "adf asdadf asdk sadkmadf asdk sadkmadf asdk sadkmk saadf asdk sadkmadf asdk sadkmadf asdk sadkmdkm",
  },
  ,
  {
    head: "Well",
    iconName: "feature-box__icon icon-basic-map",
    desc:
      "adf aadf asdk sadkmadf asdk sadkmadf asdk sadkmsdk saadf asdk sadkmadf asdk sadkmadf asdk sadkmdkm",
  },
  ,
  {
    head: "Well",
    iconName: "feature-box__icon icon-basic-heart",
    desc:
      "adf aadf asdk sadkmadf asdk sadkmadf asdk sadkmsdk sadkadf asdk sadkmadf asdk sadkmadf asdk sadkmm",
  },
];
const Features = () => {
  return (
    <section className='section-features'>
      <div className='row'>
        {list.map((feature, index) => {
          return <Feature key={index} feature={feature} />;
        })}
      </div>
    </section>
  );
};

export default Features;
