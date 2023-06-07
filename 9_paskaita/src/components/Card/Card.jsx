import PropTypes from 'prop-types'

const Card = ({ id, url, title, price, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <img src={url} alt={url} />
      <div>{title}</div>
      <h2>{price}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Card;
