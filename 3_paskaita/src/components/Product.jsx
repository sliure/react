import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaChevronRight } from "react-icons/fa"
import { FaChevronLeft } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io"


const Product = ({ image, title, price, description, availability, category }) => {
    const [number, setQuantity] = useState(0)

    const addQuantity = () => {
        setQuantity(number + 1);
    }

    const removeQuantity = () => {
        setQuantity(number !== 0 ? number - 1 : number);
    }


    return (
        <div className='box'>
            <div className='image'>
                <div><IoMdSearch/></div>
                <img src={image} alt='Calendar' />
            </div>
            <div className='information'>
                <div className='grid'>
                    <h2>{title}</h2>
                    <div><FaChevronLeft /> <FaChevronRight /></div>
                </div>
                <h3>{price}€</h3>
                <div className='decripcion'>
                    {description}
                </div>
                <div className='availabilty'>
                    <div className='stock'>
                        <div><b>Availability:</b> <span>{availability} in stock</span></div>
                    </div>
                    <div className='buttons'>
                        <div className='button'>
                            <button className='transparentButton' onClick={removeQuantity}>-</button>
                            <div className='transparentButton'>{number}</div>
                            <button className='transparentButton' onClick={addQuantity}>+</button>
                        </div>
                        <button className='blueButton'>ADD TO CART</button>
                    </div>
                </div>
                <div className='foter'>Category: {category}</div>
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    availability: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default Product
