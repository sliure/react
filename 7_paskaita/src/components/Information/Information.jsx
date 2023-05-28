import PropTypes from 'prop-types'
import { IoMdSearch } from "react-icons/io"
import Photos from '../Photos/Photos';
import "./Information.css"

const Information = ({header, descripcion}) => {

    return (
        <div className='card'>
            <h1 className='header'>{header}</h1>

            <nav className='nav'>
                    <div className='navInfo'>
                        <div>Home</div>
                        <div>Shop</div>
                        <div>Contact us</div>
                    </div>
                    <div className='icon'> 
                        <IoMdSearch/>
                    </div>
            </nav>
            <div>
                <div>
                <Photos/>   
                </div>
                <div className='descripcion'>{descripcion}</div>
            </div>
                

        </div>
      );
}

Information.propTypes = {
    header: PropTypes.string.isRequired,
  };
  
  export default Information;