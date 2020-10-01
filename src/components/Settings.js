import React, { useState } from "react";
import shortid from "shortid";
import { useRecoilState, useRecoilValue } from "recoil";

import createAppHelper from "../helpers/createAppHelper";

//State
import {
  routeAtom,
  componentsAtom,
  projectNameAtom,
  buildToolAtom,
  dependenciesToAddAtom,
  environmentAtom,
} from "../context/GlobalState";

const Settings = () => {
  //State Management
  const [route, setRoute] = useRecoilState(routeAtom);
  const environment = useRecoilValue(environmentAtom);
  const [projectName, setProjetctName] = useRecoilState(projectNameAtom);
  const [components, setComponents] = useRecoilState(componentsAtom);
  const [buildTool, setBuildTool] = useRecoilState(buildToolAtom);
  const [dependencies, setDependencies] = useRecoilState(dependenciesToAddAtom);
  const [script, setScript] = useState(null);

  const handleCreateApp = () => {
    const fileName = shortid.generate();
    createAppHelper({ environment, route, components, projectName, fileName });
    if (buildTool === "yarn") {
      setScript(
        `yarn create react-app ${projectName} && cd ${projectName} && yarn add ${dependencies} && cd .. && node ${fileName}.js`
      );
    } else {
      setScript(
        `npx create-react-app ${projectName} && cd ${projectName} && npm install ${dependencies} && cd .. && node ${fileName}.js`
      );
    }
  };

  const handleRouteChange = (e) => {
    e.preventDefault();
    setRoute({
      enabled: route.enabled,
      navigation: e.target.value,
    });
  };

  const handleCheckBox = () => {
    setRoute((prevState) => {
      return {
        enabled: !prevState.enabled,
        navigation: prevState.navigation,
      };
    });
  };

  const addEmptyComponent = () => {
    setComponents([
      ...components,
      {
        id: components.length,
        name: "Name",
        type: "FunctionalArrow",
        page: false,
      },
    ]);
  };

  const handleNameChange = (e, id) => {
    setComponents((prevState) => {
      let tempArray = [];
      prevState.forEach((comp) => {
        if (comp.id === id) {
          tempArray.push({
            id: comp.id,
            type: comp.type,
            page: comp.page,
            name: e.target.value,
          });
        } else {
          tempArray.push(comp);
        }
      });
      return tempArray;
    });
  };

  const handleTypeChange = (e, id) => {
    setComponents((prevState) => {
      let tempArray = [];
      prevState.forEach((comp) => {
        if (comp.id === id) {
          tempArray.push({
            id: comp.id,
            type: e.target.value,
            page: comp.page,
            name: comp.name,
          });
        } else {
          tempArray.push(comp);
        }
      });
      return tempArray;
    });
  };

  const handlePageChange = (id) => {
    setComponents((prevState) => {
      let tempArray = [];
      prevState.forEach((comp) => {
        if (comp.id === id) {
          tempArray.push({
            id: comp.id,
            type: comp.type,
            page: !comp.page,
            name: comp.name,
          });
        } else {
          tempArray.push(comp);
        }
      });
      return tempArray;
    });
  };

  return (
    <div className='SettingsPane'>
      <div className='Github-repo'>
        <span className='github-links'>
          <a
            className='github-button'
            href='https://github.com/amanjagdev/react-builder'
            data-color-scheme='no-preference: dark; light: dark; dark: dark;'
            data-size='large'
            data-show-count='true'
            aria-label='Star amanjagdev/react-builder on GitHub'
          >
            Star
          </a>
        </span>
        <span className='github-links'>
          <a
            className='github-button'
            href='https://github.com/amanjagdev/react-builder/fork'
            data-color-scheme='no-preference: dark; light: dark; dark: dark;'
            data-size='large'
            data-show-count='true'
            aria-label='Fork amanjagdev/react-builder on GitHub'
          >
            Fork
          </a>
        </span>
      </div>
      <h1>
        <i className='fas fa-cog'></i> Setup Your App
      </h1>

      <div className='container-settings'>
        <div className='env'>
          <div className='form-container'>
            <h4 className='head'>Environment</h4>
            <select name='environment'>
              <option value='create-react-app'>Create React App</option>
              <option disabled value='comming-soon'>
                More comming soon
              </option>
            </select>
          </div>
        </div>

        <div className='buildtool'>
          <div className='form-container'>
            <h4 className='head'>Build Tool</h4>
            <select
              name='buildtool'
              value={buildTool}
              onChange={(e) => setBuildTool(e.target.value)}
            >
              <option value='yarn'>yarn</option>
              <option value='npx'>npx</option>
            </select>
          </div>
        </div>

        <div className='projectname'>
          <div className='form-container'>
            <div className='main'>
              <h4 className='head'>Project Name</h4>
              <p>All small without spaces</p>
            </div>
            <input
              type='text'
              value={projectName}
              onChange={(e) => setProjetctName(e.target.value)}
            />
          </div>
        </div>

        <div className='dependencies'>
          <div className='form-container'>
            <div className='main'>
              <h4 className='head'>Dependencies to be added</h4>
              <p>
                Seperated by spaces <br /> Do not remove react-router-dom if
                routing enabled
              </p>
            </div>
            <input
              type='text'
              value={dependencies}
              onChange={(e) => setDependencies(e.target.value)}
            />
          </div>
        </div>

        <div className='route'>
          <h4 className='head'>Routing</h4>
          <p>Done using react-router-dom</p>
          <div className='route-flex'>
            <div className='enabled'>
              <div className='head'>Enable </div>
              <input
                type='checkbox'
                onChange={() => handleCheckBox()}
                defaultChecked={route.enabled}
              />
            </div>
            <div className='navigation'>
              <div className='head'>Navigation Component</div>
              <select
                value={route.navigation}
                onChange={(e) => handleRouteChange(e)}
                name='route'
              >
                {components.map(({ name, id, page }) => {
                  if (!page) {
                    return (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
            </div>
          </div>
        </div>

        <div className='components'>
          <div className='head-flex'>
            <h4 className='head'>Components</h4>
            <button onClick={() => addEmptyComponent()}>+</button>
          </div>

          <div className='headers-flex'>
            <div className='name'>Name</div>
            <div className='type'>Type</div>
            <div className='page'>Page</div>
          </div>

          <div className='all-comps'>
            {components.map(({ id, name, type, page }) => (
              <React.Fragment key={id}>
                <div className='input-comp'>
                  <input
                    type='text'
                    onChange={(e) => handleNameChange(e, id)}
                    value={name}
                  />
                  <select
                    onChange={(e) => handleTypeChange(e, id)}
                    value={type}
                  >
                    <option value='FunctionalArrow'>FunctionalArrow</option>
                    <option value='Functional'>Functional</option>
                    <option value='ClassStateFul'>ClassStateFul</option>
                    <option value='ClassStateLess'>ClassStateLess</option>
                  </select>
                  <input
                    type='checkbox'
                    onChange={() => handlePageChange(id)}
                    defaultChecked={page}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className='create-app-container'>
        <button className='create-app-btn' onClick={() => handleCreateApp()}>
          {" "}
          Create App
        </button>

        {script && (
          <div className='script'>
            <code>{script}</code>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
