import React from "react";
import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
import './Todoo.css'; // Import the CSS file

const Todoo = ({ text, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="todoo-container">
      <div className="todoo-text">{text}</div>
      <button className="todoo-delete" onClick={handleDelete}>
        <TiDelete />
      </button>
    </div>
  );
};

Todoo.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todoo;
