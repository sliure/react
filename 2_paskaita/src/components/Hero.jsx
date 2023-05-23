import PropTypes from 'prop-types'

const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Hero;
