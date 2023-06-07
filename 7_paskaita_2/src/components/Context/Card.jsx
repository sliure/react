import PropTypes from "prop-types";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const imgStyle = {
  objectFit: "cover",
  width: "100%",
  borderRadius: "10px 10px 0 0",
};

const pStyle = {
  color: "grey",
  textAlign: "justify",
  margin: "0",
  padding: "10px",
};

const hStyle = {
  paddingLeft: "10px",
  fontFamily: "Arial",
  margin: "10px 0",
};

const divStyle = {
  width: "300px",
  margin: "1rem",
  boxShadow: "0 0 10px grey",
  borderRadius: "10px",
};

const Card = (props) => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);

  const handleButtonClick = () => {
    toggleDarkMode(); // Toggle the theme when the button is clicked
  };

  const cardStyle = {
    ...divStyle,
    background: theme.background, // Dynamically set the background based on the theme
  };

  return (
    <div style={cardStyle}>
      <img style={imgStyle} src={props.imageUrl} alt={props.title} />
      <h2 style={hStyle}>{props.title}</h2>
      <p style={pStyle}>{props.subtitle}</p>
      <button onClick={handleButtonClick}>Press me!</button>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
