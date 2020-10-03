import React, { useEffect } from "react";

import InfoPane from "./InfoPane";
import Settings from "./Settings";
import DarkModeToggle from "./DarkModeToggle";

const Home = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
  });

  return (
    <div className="Home">
      <div className="container">
        <DarkModeToggle />
        <InfoPane />
        <Settings />
      </div>
    </div>
  );
};

export default Home;
