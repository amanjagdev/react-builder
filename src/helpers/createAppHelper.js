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

    //Adding Routes to App.js
    let AppJsContent = `import React from 'react';\\nimport './App.css';\\n\\n`;
    if (route.enabled) {
        AppJsContent += "import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';\\n\\n"
    }
    components.forEach(comp => {
        if (comp.page) {
            AppJsContent += `import ${comp.name} from './pages/${comp.name}';\\n`
        }
    })
    AppJsContent += `\\nconst App = () => {\\n    return (\\n        <div>\\n`
    if (!route.enabled) {
        components.forEach(comp => {
            if (comp.page) {
                AppJsContent += `            <${comp.name} />\\n`
            }
        })
    } else {
        AppJsContent += `            <Router>\\n                <Switch>\\n`;
        components.forEach(comp => {
            if (comp.page) {
                AppJsContent += `                    <Route path='/${comp.name}' exact component={${comp.name}} />\\n`
            }
        })
        AppJsContent += `                </Switch>\\n            </Router>\\n`;
    }
    AppJsContent += `        </div>\\n    )\\n}\\n\\nexport default App`;

    //Adding App.js write to mainFile
    MainFile += `fs.writeFileSync("${projectName}/src/App.js", "${AppJsContent}");`


    //Writting Navigation File
    if (route.enabled) {
        let NavigationFile = '';
        const navComponent = components.find(comp => comp.name === route.navigation);
        console.log(navComponent);

        //Checking for navigationComponentType
        if (navComponent.type === "FunctionalArrow") {
            NavigationFile += `import React from 'react';\\nimport { Link } from 'react-roter-dom';\\n\\nconst ${route.navigation} = () => {\\n    return (\\n        <div>\\n`;
        } else if (navComponent.type === "ClassStateLess") {
            NavigationFile += `\\nimport React from 'react';\\nimport { Link } from 'react-roter-dom';\\n\\nexport default class ${route.navigation} extends React.Component {\\n\\n  render() {\\n    return (\\n      <div>\\n`;
        } else if (navComponent.type === "ClassStateFul") {
            NavigationFile += `import React from 'react';\\nimport { Link } from 'react-roter-dom';\\n\\nexport default class Namefsf extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {};\\n  }\\n\\n  render() {\\n    return (\\n      <div>\\n`
        } else {
            NavigationFile += `import React from 'react';\\nimport { Link } from 'react-roter-dom';\\n\\nfunction ${route.navigation} (){\\n    return (\\n        <div>\\n`;
        }

        //common route insertion
        components.forEach(comp => {
            if (comp.page) {
                NavigationFile += `            <Link to='/${comp.name}' >${comp.name}</Link>\\n`;
            }
        })

        //Checking for navigationComponentType
        if (navComponent.type === "FunctionalArrow" || navComponent.type === "Functional") {
            NavigationFile += `        </div>\\n    )\\n}\\n\\nexport default ${route.navigation};`;
        } else if (navComponent.type === "ClassStateLess" || navComponent.type === "ClassStateFul") {
            NavigationFile += `        </div>\\n    );\\n  }\\n}`;
        }

        //Adding Navigation file into MainFile
        MainFile += `fs.writeFileSync("${projectName}/src/components/${route.navigation}.js", "${NavigationFile}");`
    }




    console.log(MainFile)
    //TODO: Add this function when doing production
    // downloadNodeFile(MainFile)
};

export default createAppHelper;