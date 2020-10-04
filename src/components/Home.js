import React from "react";

import InfoPane from "./InfoPane";
import Settings from "./Settings";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <InfoPane />
        <Settings />
      </div>
    </div>
  );
};

export default Home;
