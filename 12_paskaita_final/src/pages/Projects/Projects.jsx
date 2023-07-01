import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { PROJECT_ROUTE, NEW_PROJECT_ROUTE } from "../../routes/const";
import Button from "../../components/Button/Button";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>There are no projects yet.</div>;
  }

  return (
    <div className="projects">
      <div className="new-project-container">
        <Link to={NEW_PROJECT_ROUTE} className="new-project-button">
          <Button>+ New Project</Button>
        </Link>
      </div>
      <div>
        <div className="container">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={generatePath(PROJECT_ROUTE, { id: project.id })}
              className="single-project"
            >
              <ProjectCard title={project.title} imageUrl={project.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
