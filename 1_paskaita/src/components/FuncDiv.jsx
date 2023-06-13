import FuncButton from "./FuncButton";
import PropTypes from "prop-types";

const FuncDiv = (props) => {
  return (
    <div>
      <h3>Sveiki</h3>
      <p>Paspauskite</p>
      <FuncButton title="Mygtukas" />
    </div>
  );
};

FuncDiv.propTypes = {
  title: PropTypes.string,
};

FuncDiv.defaultProps = {
  title: "Click",
};

export default FuncDiv;
