const downloadNodeFile = (MainFile) => {
    const element = document.createElement("a");
    const file = new Blob([MainFile], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "createMyApp.js";
    document.body.appendChild(element);
    element.click();
}

const createAppHelper = ({ environment, route, components, projectName }) => {
    let MainFile = "const fs = require('fs');fs.mkdirSync('" + projectName + "/src/components');fs.mkdirSync('" + projectName + "/src/pages');";

    let componentsToWrite = [];
    let pagesToWrite = [];

    components.forEach((comp) => {
        if (!comp.page) {
            //Functional Arrow Component
            if (comp.type === "FunctionalArrow") {
                componentsToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nconst ${comp.name} = () => {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
                })
                //Functional Component
            } else if (comp.type === "Functional") {
                componentsToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nfunction ${comp.name}() {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
                })
                //Class State Ful Component
            } else if (comp.type === "ClassStateFul") {
                componentsToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nexport default class ${comp.name} extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <h1>${comp.name}</h1>\\n      </div>\\n    );\\n  }\\n}`
                })
                //Class State Less Component
            } else if (comp.type === "ClassStateLess") {
                componentsToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nexport default class ${comp.name} extends React.Component {\\n\\n  render() {\\n    return (\\n      <div>\\n        <h1>${comp.name}</h1>\\n      </div>\\n    );\\n  }\\n}`
                })
            }
        } else {
            //Functional Arrow Component
            if (comp.type === "FunctionalArrow") {
                pagesToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nconst ${comp.name} = () => {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
                })
                //Functional Component
            } else if (comp.type === "Functional") {
                pagesToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nfunction ${comp.name}() {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
                })
                //Class State Ful Component
            } else if (comp.type === "ClassStateFul") {
                pagesToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nexport default class ${comp.name} extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n        <h1>${comp.name}</h1>\\n      </div>\\n    );\\n  }\\n}`
                })
                //Class State Less Component
            } else if (comp.type === "ClassStateLess") {
                pagesToWrite.push({
                    name: comp.name,
                    data: `import React from 'react';\\n\\nexport default class ${comp.name} extends React.Component {\\n\\n  render() {\\n    return (\\n      <div>\\n        <h1>${comp.name}</h1>\\n      </div>\\n    );\\n  }\\n}`
                })
            }
        }
    });

    componentsToWrite.forEach(({ name, data }) => {
        MainFile += `fs.writeFileSync("${projectName}/src/components/${name}.js", "${data}");`
    });
    pagesToWrite.forEach(({ name, data }) => {
        MainFile += `fs.writeFileSync("${projectName}/src/pages/${name}.js", "${data}");`
    });

    console.log(MainFile)
    //TODO: Add this function when doing production
    // downloadNodeFile(MainFile)
};

export default createAppHelper;