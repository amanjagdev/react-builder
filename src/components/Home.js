import React, { useContext } from "react";
import { ThemeContext } from "../App";
import InfoPane from "./InfoPane";
import Settings from "./Settings";
import { DARK } from "../constants/constants";

const Home = () => {
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;
  return (
    <div className="Home">
      <div className={`container ${themeClass}`}>
        <InfoPane />
        <Settings />
      </div>
    </div>
  );
};

export default Home;
