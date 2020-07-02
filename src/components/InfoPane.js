import React from 'react';

const InfoPane = () => {

    return (
        <div className="InfoPane">
            <h1><i className="fab fa-react"></i> React Builder</h1>
            <div className="container-info">
                <div className="main">Want to create a React App with less no of steps?</div>

                <p>You can create a react app with few simple steps. <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat odio itaque temporibus, nulla minima libero aperiam non? Iste, pariatur excepturi! <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, veritatis. </p>

                <div className="box">
                    <h4>Instructions</h4>
                    <ul>
                        <li> {' 🔹 '}   Step One Lorem ipsum dolor sit amet.</li>
                        <li> {' 🔹 '}   Step One Lorem ipsum dolor sit amet.</li>
                        <li> {' 🔹 '}   Step One Lorem ipsum dolor sit amet.</li>
                        <li> {' 🔹 '}   Step One Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>

            </div>
            <h4 className="madeBy">Made with love by Aman Jagdev</h4>
        </div>
    )
}

export default InfoPane
