import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import { useContext, useState } from "react";

const Contacts = () => {
  const { handleNewContact } = useContext(UserContext);
  const [name, setName] = useState("");
  const [surename, setSurename] = useState("");
  const [number, setNumber] = useState("");
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitContact = {
      name,
      surename,
      number,
      projectName,
    };
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormItem
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormItem
          label="Surename"
          type="text"
          value={surename}
          onChange={(e) => setSurename(e.target.value)}
          required
        />
        <FormItem
          label="Woring Hours"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <FormItem
          label="Project name"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <Button>Create Contact</Button>
      </form>
    </div>
  );
};

export default Contacts;
