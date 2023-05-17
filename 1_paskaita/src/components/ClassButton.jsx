import PropTypes from "prop-types"

import React from 'react';
class ClassButton extends React.Component{
    render(){
        return(
            <button>{this.props.title}</button>
        )
    }
}

ClassButton.propTypes = {
    title: PropTypes.string
}


export default ClassButton