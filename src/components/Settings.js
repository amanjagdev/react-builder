import React, { useState } from 'react'

const Settings = () => {

    //State Management
    const [environment, setEnvironment] = useState("create-react-app");
    const [route, setRoute] = useState({
        enabled: false,
        navigation: "Home"
    });
    const [components, setComponents] = useState([
        {
            id: 0,
            name: "Home",
            type: "FunctionalArrow",
            page: true
        },
        {
            id: 1,
            name: "NavBar",
            type: "FunctionalArrow",
            page: true
        }
    ]);

    const handleRouteChange = e => {
        e.preventDefault();
        setRoute({
            enabled: route.enabled,
            navigation: e.target.value
        });
    }

    const handleCheckBox = () => {
        setRoute(prevState => {
            return ({
                enabled: !prevState.enabled,
                navigation: prevState.navigation
            })
        })
    }

    const addEmptyComponent = () => {
        setComponents([...components, {
            name: "Name",
            Types: "FunctionalArrow",
            page: false,
        }])
    }

    return (
        <div className="SettingsPane">

            <div className="env">
                <h4 className="head">Environment</h4>
                <select name="environment">
                    <option value="create-react-app">Create React App</option>
                    <option disabled value="comming-soon">More comming soon</option>
                </select>
            </div>

            <div className="route">
                <h4 className="head">Route</h4>
                <input type="checkbox" onChange={() => handleCheckBox()} defaultChecked={route.enabled} />
                <select value={route.navigation} onChange={(e) => handleRouteChange(e)} name="route">
                    {
                        components.map(({ name }) => <option value={name}>{name}</option>)
                    }
                </select>
            </div>

            <div className="components">
                <h4 className="head">Components</h4>
                <button onClick={() => addEmptyComponent()}>Add Comp</button>
                <div className="all-comps">
                    {
                        components.map(({ index, name, type, page }) =>
                            <React.Fragment>
                                <div className="input-comp">
                                    <input type="text" value={name} />
                                    <input type="text" value={type} />
                                    <input type="checkbox" defaultChecked={page} />
                                </div>
                            </React.Fragment>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default Settings
