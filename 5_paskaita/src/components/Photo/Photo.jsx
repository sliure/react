import PropTypes from "prop-types";

const Photo = ({ title, url }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div><img src={url} alt="images"></img></div>
    </div>
  );
};

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Photo;