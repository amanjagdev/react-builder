import React, { useState, createContext, useEffect } from "react";
import { RecoilRoot } from "recoil";
import { getTheme } from "./helpers//themeHelper";
import { LIGHT, DARK } from "./constants/constants";
//dev
import RecoilLogger from "recoil-logger";

//Components
import Home from "./components/Home";

const savedTheme = getTheme();
export const ThemeContext = createContext(savedTheme);

const App = () => {
  const [theme, setTheme] = useState(savedTheme);
  const toggleTheme = () => {
    const themeToSave = theme === DARK ? LIGHT : DARK;
    localStorage.setItem("theme", themeToSave);
    setTheme(themeToSave);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <RecoilRoot>
          <RecoilLogger />
          <Home />
        </RecoilRoot>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
