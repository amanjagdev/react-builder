const downloadTxtFile = (MainFile) => {
    const element = document.createElement("a");
    const file = new Blob([MainFile], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "createMyApp.js";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

const createAppHelper = ({ environment, route, components, projectName }) => {
    let MainFile = "const fs = require('fs');const {exec} = require('child_process');exec('npx create-react-app " + projectName + "', (error, stdout, stderr) => {if (error) {console.error(`exec error: ${error}`);return;}console.log(`${stdout}`);console.error(` ${stderr}`);fs.mkdirSync('" + projectName + "/src/components');fs.mkdirSync('" + projectName + "/src/pages');";


    let componentsToWrite = [];
    let pagesToWrite = [];

    components.forEach((comp) => {
        if (!comp.page) {
            //Functional Arrow Component
            componentsToWrite.push({
                name: comp.name,
                data: `import React from 'react';\\n\\nconst ${comp.name} = () => {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
            })
        } else {
            //Functional Arrow Page
            pagesToWrite.push({
                name: comp.name,
                data: `import React from 'react';\\n\\nconst ${comp.name} = () => {\\n  return (\\n    <div>\\n      ${comp.name} Component\\n    </div>\\n  )\\n}\\n\\nexport default ${comp.name};`
            })
        }
    });

    componentsToWrite.forEach(({ name, data }) => {
        MainFile += `fs.writeFileSync("${projectName}/src/components/${name}.js", "${data}");`
    });
    pagesToWrite.forEach(({ name, data }) => {
        MainFile += `fs.writeFileSync("${projectName}/src/pages/${name}.js", "${data}");`
    });
    MainFile += "});"
    console.log(MainFile)
    downloadTxtFile(MainFile)
};

export default createAppHelper;