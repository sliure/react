import PropTypes from "prop-types";
import { ColorsContext } from "../../context/ThemeContext";
import { useContext } from "react";

const pStyle = {
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

const Text = (props) => {
  const { color, togglePinkText} = useContext(ColorsContext);

  const handleButtonClick = () => {
    togglePinkText();
  };

  const dynamicPStyle = {
    ...pStyle,
    color: color.color,
  };

  return (
    <div style={divStyle}>
      <h2 style={hStyle}>{props.title}</h2>
      <p style={dynamicPStyle}>{props.subtitle}</p>
      <button onClick={handleButtonClick}>Press me!</button>
    </div>
  );
};

Text.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Text;


