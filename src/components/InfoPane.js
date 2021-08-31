import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import { ThemeContext } from "../App";
import { DARK } from "../constants/constants";
import { highlightAtom } from "../context/GlobalState";
import { isMobile } from "../helpers/utility";
import { useWindowSize } from "../hooks/useWindowSize";
import { GithubMetrics } from "./GithubMetrics";

const InfoPane = () => {
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;
  const [,setHighlight] = useRecoilState(highlightAtom);
  const windowSize = useWindowSize();
  const handleHighlight = (num) => {
    setHighlight(num);
    setTimeout(() => {
      setHighlight(0)
    }, 1000);
  }
  return (
    <div className={`InfoPane ${themeClass} ${isMobile && "mobileInfoPane"}`}>
      <div className="header">
        <h1>
          <img src={require("../assets/logo.png")} alt="React-Builder-Logo" />{" "}
          React Builder
        </h1>
        <img
          className={`toggleTheme ${themeClass}`}
          src={require("../assets/day-and-night.svg")}
          alt="Theme-Toggle-Button"
          onClick={mode.toggleTheme}
        ></img>
      </div>
      <div className="container-info">
        <div className="main">
          Want to create a React App Super fast with less steps?
        </div>

        <p>
          You can create a react app with few simple steps. <br />
          <br />
          This is a simple tool that helps you to quikcly create components and
          pages in your react app with your preffered component type(Functional
          or Class Based) <br /> <br />
          You can also integrate Routing with predefined Navigation bar and
          routing done in App{" "}
        </p>

        <div className={`box ${themeClass}`}>
          {!isMobile ? (
            <>
              <h4>Instructions</h4>
              <div className="instruction-cards">
                <div className="instruction-cards-item" onClick={() => handleHighlight(1)}>
                  <div className="instruction-cards-item-subheading">Step 1</div> Choose the desired settings
                  on {windowSize.width <= 768 ? "bottom" : "right"} pane
                </div>
                <div className="instruction-cards-item" onClick={() => handleHighlight(2)}>  
                  <div className="instruction-cards-item-subheading">Step 2</div> When you click the Create App button, a js file and a script will be downloaded and shown.
                </div>
                <div className="instruction-cards-item nopointer">
                  <div className="instruction-cards-item-subheading">Step 3</div>Place that js script in the
                  folder you want to create react app
                </div>
                <div className="instruction-cards-item nopointer">
                  <div className="instruction-cards-item-subheading">Step 4</div>Run that script in that
                  folder.
                </div>
              </div>
            </>
          ) : (
            <h4>Open this website in a desktop browser to access it.</h4>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="githubMetrics">
          <GithubMetrics />
        </div>
      )}
      <h4 className="madeBy">Made with love by Aman Jagdev</h4>
    </div>
  );
};

export default InfoPane;
