import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'

//State
import { environmentAtom, routeAtom, componentsAtom } from '../context/GlobalState'

const Settings = () => {

    //State Management
    const environment = useRecoilValue(environmentAtom);
    const [route, setRoute] = useRecoilState(routeAtom);
    const [components, setComponents] = useRecoilState(componentsAtom);

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
            type: "FunctionalArrow",
            page: false,
        }])
    }

    const handleNameChange = (e, id) => {
        let tempArray = [...components];
        tempArray.forEach(comp => {
            if (comp.id === id) {
                comp.name = e.target.value;
            }
        });
        console.log(tempArray)
        setComponents([
            {
                id: 0,
                name: "Homerrr",
                type: "FunctionalArrow",
                page: true
            },
            {
                id: 1,
                name: "NavBar",
                type: "FunctionalArrow",
                page: true
            }
        ])
    }
    
    const handleTypeChange = (e, id) => {
        let tempArray = [...components];
        tempArray.forEach(comp => {
            if (comp.id === id) {
                comp.type = e.target.value;
            }
        });
        setComponents([...tempArray])
    }
    
    const handlePageChange = (id) => {
        let tempArray = [...components];
        tempArray.forEach(comp => {
            if (comp.id === id) {
                comp.page = !comp.page;
            }
        });
        setComponents([...tempArray])
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
                        components.map(({ name, id }) => <option key={id} value={name}>{name}</option>)
                    }
                </select>
            </div>

            <div className="components">
                <h4 className="head">Components</h4>
                <button onClick={() => addEmptyComponent()}>Add Comp</button>
                <div className="all-comps">
                    {
                        components.map(({ id, name, type, page }) =>
                            <React.Fragment key={id}>
                                <div className="input-comp">
                                    <input type="text" onChange={(e) => handleNameChange(e, id)} value={name} />
                                    <select onChange={(e) => handleTypeChange(e, id)} value={type} >
                                        <option value="FunctionalArrow">FunctionalArrow</option>
                                        <option value="Functional">Functional</option>
                                        <option value="ClassStateFul">ClassStateFul</option>
                                        <option value="ClassStateLess">ClassStateLess</option>
                                    </select>
                                    <input type="checkbox" onChange={() => handlePageChange(id)} defaultChecked={page} />
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
