import PropTypes from "prop-types"

const Button = ({variant = "text", children, ...rest}) => {
    return(
        <button className='blueButton' {...rest}>{children}</button>   
    )
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
    //variant: PropTypes.oneOf({"kazkas"})//cia galima is praeitos uzduoties kur su variant kur su klase padaryta variant className="kazkas + variant"
}

export default Button 