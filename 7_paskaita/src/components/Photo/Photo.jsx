import PropTypes from 'prop-types'
import { useState } from 'react'

const Photo = ({url, title}) => {
    return (
        <div>
          <img src={url} alt={title} />
        </div>
      );
}

Photo.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  export default Photo;