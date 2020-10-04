import React, { createContext } from "react";
import { RecoilRoot } from "recoil";

//dev
import RecoilLogger from "recoil-logger";
import { getTheme } from "./helpers/utility";

//Components
import Home from "./components/Home";

//Custom Hooks
import { useTheme } from "./hooks/useTheme";

const savedTheme = getTheme();

export const ThemeContext = createContext(savedTheme);

const App = () => {
  const [theme, toggleTheme] = useTheme(savedTheme);
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
