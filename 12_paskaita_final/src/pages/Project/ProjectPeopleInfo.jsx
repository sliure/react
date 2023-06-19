import "./Project.scss";
import PropTypes from "prop-types";

const ProjectPeopleInfo = ({ people }) => {
  if (people.length === 0) {
    return <div>No info about people... :(</div>;
  }

  return (
    <div className="people">
      <p>
        <span>People: </span>
      </p>
      <div>
        {people.map((person, index) => (
          <div key={index}>
            <p>
              <span>Name: </span> {person.name}
            </p>
            <p>
              <span>Surname: </span> {person.surname}
            </p>
            <p>
              <span>Position: </span>
              {person.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProjectPeopleInfo.propTypes = {
  person: PropTypes.string,
};

export default ProjectPeopleInfo;
