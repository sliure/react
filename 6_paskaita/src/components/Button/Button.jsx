import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ variant = "pressMe", children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["pressMe", "upload", "download"]),
};

export default Button;

