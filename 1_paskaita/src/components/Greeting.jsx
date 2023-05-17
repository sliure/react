import PropTypes from "prop-types"

function Greetings(props){
    return (
        <div>Hello, {props.name}. How are you!</div>
    )
}

Greetings.propTypes = {
    name: PropTypes.string
}

Greetings.defaultProps = {
    name: "User"
}

export default Greetings