import React, { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const colors = {
  pink: {
    color: "#FC6C85",
  },
  grey: {
    color: "#2C3539",
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  toggleDarkMode: () => {},
});

const ColorsContext = createContext({
  colors: colors.grey,
  togglePinkText: () => {},
});

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [greyMode, setPinkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const togglePinkText = () => {
    setPinkMode((prevPinkMode) => !prevPinkMode);
  };

  const theme = darkMode ? themes.dark : themes.light;

  const color = greyMode ? colors.pink : colors.grey;

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      <ColorsContext.Provider value={{ color, togglePinkText }}>
        {children}
      </ColorsContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext, ColorsContext };
