import React from "react";

import InfoPane from "./InfoPane";
import Settings from "./Settings";
import DarkModeToggle from "./DarkModeToggle";

const Home = () => {
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
