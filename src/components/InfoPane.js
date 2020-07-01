import React, { useState } from 'react';
import { useRecoilValue } from 'recoil'

//Helper Function
import createAppHelper from '../helpers/createAppHelper';

//State
import { environmentAtom, routeAtom, componentsAtom, projectNameAtom, buildToolAtom, dependenciesToAddAtom } from '../context/GlobalState'

const InfoPane = () => {
    //State Management
    const environment = useRecoilValue(environmentAtom);
    const route = useRecoilValue(routeAtom);
    const components = useRecoilValue(componentsAtom);
    const projectName = useRecoilValue(projectNameAtom);
    const buildTool = useRecoilValue(buildToolAtom);
    const dependencies = useRecoilValue(dependenciesToAddAtom);

    const [script,setScript] = useState(null);

    const handleCreateApp = () => {
        createAppHelper({ environment, route, components, projectName });
        if(buildTool === "yarn"){
            setScript(`yarn create react-app ${projectName} && yarn add ${dependencies} && node createMyApp.js`);
        }else{
            setScript(`npx create-react-app ${projectName} && npm install ${dependencies} && node createMyApp.js`);
        }
    }

    return (
        <div className="InfoPane">
            <p>Choose your prefrences here and get your desired react app within seconds</p>
            <p>This is the usual Structure of the application we will be creating for you.</p>
            <button onClick={() => handleCreateApp()}> Create App</button>
            <div className="script">
                {
                    script &&
                    <code>{script}</code>
                }
            </div>
        </div>
    )
}

export default InfoPane
