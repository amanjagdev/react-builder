const createAppHelper = ({ environment, route, components }) => {
    let MainFile = "const fs = require('fs');fs.mkdirSync('components');";

    let componentsToWrite = [];
    let pagesToWrite = [];

    components.forEach((comp) => {
        if (!comp.page) {
            componentsToWrite.push({
                name: comp.name,
                data: `DATA TO  BE WRITTEN`
            })
        }
    });


    componentsToWrite.forEach(({ name, data }) => {
        MainFile += `fs.writeFileSync("components/${name}.js", "${data}");`
    });
    console.log(MainFile)
};

export default createAppHelper;