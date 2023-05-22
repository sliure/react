const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title ? <h2>{title}</h2> : null}
      {subtitle ? <h3>{subtitle}</h3> : null}
    </div>
  );
};

export default Hero;
