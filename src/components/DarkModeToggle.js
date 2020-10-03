import React, { useState } from "react";

const DarkModeToggle = () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(currentTheme);

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    const themeToSet = theme === "light" ? "dark" : "light";
    updateTheme(themeToSet);
  };

  const updateTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="theme-switch-wrapper">
      <span id="toggle-icon">
        <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
      </span>
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme == "dark"}
          onChange={() => changeTheme()}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
