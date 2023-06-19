import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import FormItem from "../../components/FormItem/FormItem";
import { UserContext } from "../../context/UserContext";
import { createProject } from "../../api/projects";
import { PROJECTS_ROUTE } from "../../routes/const";

const NewProject = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [client, setClient] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const people = [];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      userId: user.id,
      title,
      description,
      imageUrl,
      client,
      startingDate,
      endingDate,
      people,
    };

    createProject(project)
      .then(() => {
        navigate(PROJECTS_ROUTE);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        type="text"
        label="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormItem
        type="text"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormItem
        type="url"
        label="Image ULR"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <FormItem
        label="Client"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <FormItem
        type="date"
        label="Starting Date"
        value={startingDate}
        onChange={(e) => setStartingDate(e.target.value)}
      />
      <FormItem
        type="date"
        label="Ending Date"
        value={endingDate}
        onChange={(e) => setEndingDate(e.target.value)}
      />
      <Button>Create Project</Button>
    </form>
  );
};

export default NewProject;
