import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../../context/ThemeContext";


const Context = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        style={{
          height: 100,
          background: theme && theme.background,
          color: theme && theme.foreground,
        }}
      >
        Toolbar
        <button onClick={toggleDarkMode}>Change theme</button>
      </div>
      <Button />
    </div>
  );
};

export default Context;

