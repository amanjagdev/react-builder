import React from 'react';

const InfoPane = () => {

    return (
        <div className="InfoPane">
            <h1><i className="fab fa-react"></i> React Builder</h1>
            <div className="container-info">
                <div className="main">Want to create a React App Super fast with less steps?</div>

                <p>You can create a react app with few simple steps. <br /><br />This is a simple tool that helps you to quikcly create components and pages in your react app with your preffered component type(Functional or Class Based) <br /> <br />You can also integrate Routing with predefined Navigation bar and routing done in App </p>

                <div className="box">
                    <h4>Instructions</h4>
                    <ul>
                        <li> {' 🔹 '}   <strong>Step 1</strong> : Choose the desired settings on right pane</li>
                        <li> {' 🔹 '}   <strong>Step 2</strong> : Once you click create app it will download a js file and show you a script</li>
                        <li> {' 🔹 '}   <strong>Step 3</strong> : Place that js script in the folder you want to create react app</li>
                        <li> {' 🔹 '}   <strong>Step 4</strong> : Run that script in that folder.</li>
                    </ul>
                </div>

            </div>
            <h4 className="madeBy">Made with love by Aman Jagdev</h4>
        </div>
    )
}

export default InfoPane
