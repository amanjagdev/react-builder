import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../App";
import { DARK } from "../constants/constants";

export const GithubMetrics = ({ isCreated = false, setIsCreated }) => {
  const [visitCount, setVisitCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const mountedRef = useRef(true);
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;
  useEffect(() => {
    updateVisitCount();
    updateUserCount();

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (isCreated) {
      updateUserCount();
      setIsCreated(false);
    }
  }, [isCreated, setIsCreated]);

  const updateUserCount = () => {
    fetch("https://api.countapi.xyz/get/react-builder/usedby")
      .then((res) => res.json())
      .then((res) => mountedRef.current && setUserCount(res.value));
  };

  const updateVisitCount = () => {
    fetch(" https://api.countapi.xyz/update/react-builder/views/?amount=1")
      .then((res) => res.json())
      .then((res) => mountedRef.current && setVisitCount(res.value));
  };

  return (
    <>
      <div className={`Page-analytics ${themeClass}`}>
        <span className="page-visits">
          <span id="visits">{visitCount}</span> <span>visits</span>
        </span>
        <br />
        <span className="page-visits">
          <span id="visits">{userCount}</span> <span>users</span>
        </span>
      </div>
      <div className="Github-repo">
        <span className="github-links">
          <a
            className="github-button"
            href="https://github.com/amanjagdev/react-builder"
            data-color-scheme="no-preferences: light;light:light;dark:dark"
            data-size="large"
            data-show-count="true"
            aria-label="Star amanjagdev/react-builder on GitHub"
          >
            Star
          </a>
        </span>
        <span>
          <a
            className="github-button"
            href="https://github.com/amanjagdev/react-builder/fork"
            data-color-scheme="no-preferences: light;light:light;dark:dark"
            data-size="large"
            data-show-count="true"
            aria-label="Fork amanjagdev/react-builder on GitHub"
          >
            Fork
          </a>
        </span>
      </div>
    </>
  );
};
