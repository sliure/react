import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Button = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <button style={{ background: theme && theme.background, color: theme && theme.foreground }}>
      Themed Button
    </button>
  );
};

export default Button;

