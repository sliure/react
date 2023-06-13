import PropTypes from "prop-types";
import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>Hey</h3>
        <p>Hey</p>
        <ClassButton title="Kazkas" />
      </div>
    );
  }
}

ClassDiv.propTypes = {
  title: PropTypes.string,
};

export default ClassDiv;
