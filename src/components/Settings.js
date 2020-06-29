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
            id: components.length,
            name: "Name",
            type: "FunctionalArrow",
            page: false,
        }])
    }

    const handleNameChange = (e, id) => {
        setComponents(prevState => {
            let tempArray = [];
            prevState.forEach(comp => {
                if (comp.id === id) {
                    tempArray.push({
                        id: comp.id,
                        type: comp.type,
                        page: comp.page,
                        name: e.target.value
                    });
                } else {

                    tempArray.push(comp)
                }
            })
            return tempArray
        })
    }

    const handleTypeChange = (e, id) => {
        setComponents(prevState => {
            let tempArray = [];
            prevState.forEach(comp => {
                if (comp.id === id) {
                    tempArray.push({
                        id: comp.id,
                        type: comp.type,
                        page: e.target.value,
                        name: comp.name
                    });
                } else {

                    tempArray.push(comp)
                }
            })
            return tempArray
        })
    }

    const handlePageChange = (id) => {
        setComponents(prevState => {
            let tempArray = [];
            prevState.forEach(comp => {
                if (comp.id === id) {
                    tempArray.push({
                        id: comp.id,
                        type: comp.type,
                        page: !comp.page,
                        name: comp.name
                    });
                } else {

                    tempArray.push(comp)
                }
            })
            return tempArray
        })
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
