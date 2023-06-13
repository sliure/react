import PropTypes from "prop-types";

import React from "react";
class ClassButton extends React.Component {
  render() {
    return <button>{this.props.title}</button>;
  }
}

ClassButton.propTypes = {
  title: PropTypes.string,
};

ClassButton.defaultProps = {
  title: "Click",
};

export default ClassButton;
