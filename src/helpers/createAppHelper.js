const downloadTxtFile = (MainFile) => {
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
    console.log(MainFile)
    downloadTxtFile(MainFile)
};

export default createAppHelper;