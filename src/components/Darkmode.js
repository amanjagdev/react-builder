import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from "use-dark-mode";

const Darkmode = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="dm-toggle">
      <DarkModeToggle onChange={darkMode.toggle} checked={darkMode.value} size={80} />
    </div>
  );
};

export default Darkmode;
