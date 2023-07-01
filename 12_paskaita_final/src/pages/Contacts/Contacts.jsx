import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import { NEW_CONTACT_ROUTE } from "../../routes/const";

const Contacts = () => {
  return (
    <div className="container">
      <div className="new-project-container">
        <Link to={NEW_CONTACT_ROUTE} className="new-project-button">
          <Button>+ New Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
