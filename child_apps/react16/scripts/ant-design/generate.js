const path = require('path');
const fs = require('fs');
const data = require('./data.json');

const toPascalCase = s => s
  .replace(/-[a-z0-9]/ug, letter => `${letter.substring(1).toUpperCase()}`)
  .replace(/^[a-z0-9]/ug, letter => `${letter.toUpperCase()}`);

const toKebabCase = s => s.replace(/[A-Z0-9]/ug, letter => `-${letter.toLowerCase()}`);

const blacklist = [
  {
    componentName: 'layout',
    fileName: 'fixed-sider',
  },
  {
    componentName: 'breadcrumb',
    fileName: 'react-router',
  },
];

const rootPath = path.join(__dirname, '../../src/pages/ant-design/');
data.forEach(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
  const componentPath = path.join(rootPath, 'components', componentName);
  console.log('Working: ' + componentPath);
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath);
  }

  // pre progress data
  componentDemos = componentDemos
    .filter(demo => !blacklist.some(l => l.componentName === componentName && l.fileName === demo.fileName))
    .map(raw => {
      const demo = {...raw};
      if (!demo.jsx.includes('import React') && !demo.jsx.includes('from \'react\'') && !demo.jsx.includes('from "react"')) {
        demo.jsx = `import React from 'react';\n${demo.jsx}`;
      }
      if (demo.css) {
        demo.jsx = `import './${demo.fileName}.css';\n${demo.jsx}`;
      }
      return demo;
    });

  // component demos file
  componentDemos.forEach((demo) => { // fileName, title, jsx, css
    if (demo.css) {
      console.log('Generate: ' + path.join(componentPath, demo.fileName + '.css'));
      fs.writeFileSync(path.join(componentPath, demo.fileName + '.css'), demo.css.replace(/[\n\r ]+$/ui, '') + '\n');
    }
    console.log('Generate: ' + path.join(componentPath, demo.fileName + '.js'));
    fs.writeFileSync(path.join(componentPath, demo.fileName + '.js'), demo.jsx.replace(/[\n\r ]+$/ui, '') + '\n');
  });

  // component index file
  const indexJsx = `import React from 'react';
${componentDemos.map(demo => `import ${toPascalCase(componentName)}${toPascalCase(demo.fileName)}Demo from './${demo.fileName}';`).join('\n')}
import './index.css';

const ${toPascalCase(componentName)}Demo = () => (
  <div className="${componentName}-demo">
${
  componentDemos
    .map(demo => `    <hr />
    <div id="components-${componentName}-demo-${demo.fileName}">
      <h2>${toPascalCase(demo.fileName)} ${demo.title}</h2>
      <div className="code-box-demo">
        <${toPascalCase(componentName)}${toPascalCase(demo.fileName)}Demo />
      </div>
    </div>`)
    .join('\n')
}
    <hr />
  </div>
);
export default ${toPascalCase(componentName)}Demo;
`;
  if (!fs.existsSync(path.join(componentPath, 'index.css'))) {
    console.log('Generate: ' + path.join(componentPath, 'index.css'));
    fs.writeFileSync(path.join(componentPath, 'index.css'), '');
  }
  console.log('Generate: ' + path.join(componentPath, 'index.js'));
  fs.writeFileSync(path.join(componentPath, 'index.js'), indexJsx);
});

const mainNavigate = data.map(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
  return `import ${toPascalCase(componentName)}Demo from './components/${componentName}';`
}).join('\n')
+ '\n\n'
+ data.map(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
  return `          {
            label: '${componentTitle}',
            key: '${toPascalCase(componentName)}',
            children: <><h1>child-react16-ant-design-4.x: ${componentTitle}</h1><${toPascalCase(componentName)}Demo /></>,
          },`;
}).join('\n');
fs.writeFileSync(path.join(rootPath, 'demo.js'), mainNavigate);
