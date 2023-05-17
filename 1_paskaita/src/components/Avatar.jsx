import PropTypes from "prop-types";

function Avatar(props) {
  const firstNameLetter = props.name.charAt(0);
  const surnameLetter = props.surname.charAt(0);

  return (
    <div>
      {firstNameLetter}{surnameLetter}
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string
};

export default Avatar;