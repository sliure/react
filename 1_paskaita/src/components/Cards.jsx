import PropTypes from "prop-types"

function Cards(props){
    return(
        <div className="card">
            <div>
            <img src={props.imageUrl} alt="Information"/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <div>{props.subtitle}</div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}


export default Cards