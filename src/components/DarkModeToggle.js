import React from "react";

const DarkModeToggle = () => {
  return (
    <div className="theme-switch-wrapper">
      <span id="toggle-icon">
        <i className="fas fa-sun"></i>
      </span>
      <label className="theme-switch">
        <input type="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
