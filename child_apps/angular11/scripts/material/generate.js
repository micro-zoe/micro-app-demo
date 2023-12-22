const path = require('path');
const fs = require('fs');
const data = require('./data.json');

const toPascalCase = s => s
  .replace(/-[a-z0-9]/ug, letter => `${letter.substring(1).toUpperCase()}`)
  .replace(/^[a-z0-9]/ug, letter => `${letter.toUpperCase()}`);

const toKebabCase = s => s.replace(/[A-Z0-9]/ug, letter => `-${letter.toLowerCase()}`);

const encodeHTML = (str) => {
  return str.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
      return '&#' + i.charCodeAt(0) + ';';
  });
};

const blacklist = [
  // {
  //   componentName: 'form',
  //   demoName: 'example-tel-input-example',
  // },
];

const MAT_TAG_MODULE = [
  { key: 'material-moment-adapter', name:'MatMomentDateModule', from: '@angular/material-moment-adapter' },
  { key: 'button-toggle-group', name:'MatButtonToggleModule', from: '@angular/material/button-toggle' },
  { key: 'card-actions', name:'MatCardModule', from: '@angular/material/card' },
  { key: 'card-content', name:'MatCardModule', from: '@angular/material/card' },
  { key: 'card-header', name:'MatCardModule', from: '@angular/material/card' },
  { key: 'card-subtitle', name:'MatCardModule', from: '@angular/material/card' },
  { key: 'card-title', name:'MatCardModule', from: '@angular/material/card' },
  { key: 'chip-list', name:'MatChipsModule', from: '@angular/material/chips' },
  { key: 'chip', name:'MatChipsModule', from: '@angular/material/chips' },
  { key: 'date-range-input', name:'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'date-range-picker-actions', name:'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'date-range-picker', name:'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'datepicker-actions', name:'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'datepicker-toggle', name:'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'dialog-actions', name:'MatDialogModule', from: '@angular/material/dialog' },
  { key: 'dialog-content', name:'MatDialogModule', from: '@angular/material/dialog' },
  { key: 'accordion', name:'MatExpansionModule', from: '@angular/material/expansion' },
  { key: 'expansion-panel-header', name:'MatExpansionModule', from: '@angular/material/expansion' },
  { key: 'expansion-panel', name:'MatExpansionModule', from: '@angular/material/expansion' },
  { key: 'panel-description', name:'MatExpansionModule', from: '@angular/material/expansion' },
  { key: 'panel-title', name:'MatExpansionModule', from: '@angular/material/expansion' },
  { key: 'error', name:'MatFormFieldModule', from: '@angular/material/form-field' },
  { key: 'hint', name:'MatFormFieldModule', from: '@angular/material/form-field' },
  { key: 'label', name:'MatFormFieldModule', from: '@angular/material/form-field' },
  { key: 'grid-tile', name:'MatGridListModule', from: '@angular/material/grid-list' },
  { key: 'list-item', name:'MatListModule', from: '@angular/material/list' },
  { key: 'list-option', name:'MatListModule', from: '@angular/material/list' },
  { key: 'nav-list', name:'MatListModule', from: '@angular/material/list' },
  { key: 'selection-list', name:'MatListModule', from: '@angular/material/list' },
  { key: 'spinner', name:'MatProgressSpinnerModule', from: '@angular/material/progress-spinner' },
  { key: 'radio-button', name:'MatRadioModule', from: '@angular/material/radio' },
  { key: 'radio-group', name:'MatRadioModule', from: '@angular/material/radio' },
  { key: 'optgroup', name:'MatSelectModule', from: '@angular/material/select' },
  { key: 'option', name:'MatSelectModule', from: '@angular/material/select' },
  { key: 'select-trigger', name:'MatSelectModule', from: '@angular/material/select' },
  { key: 'drawer-container', name:'MatSidenavModule', from: '@angular/material/sidenav' },
  { key: 'drawer-content', name:'MatSidenavModule', from: '@angular/material/sidenav' },
  { key: 'drawer', name:'MatSidenavModule', from: '@angular/material/sidenav' },
  { key: 'sidenav-container', name:'MatSidenavModule', from: '@angular/material/sidenav' },
  { key: 'sidenav-content', name:'MatSidenavModule', from: '@angular/material/sidenav' },
  { key: 'horizontal-stepper', name:'MatStepperModule', from: '@angular/material/stepper' },
  { key: 'step', name:'MatStepperModule', from: '@angular/material/stepper' },
  { key: 'vertical-stepper', name:'MatStepperModule', from: '@angular/material/stepper' },
  { key: 'action-row', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'cell', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'footer-cell', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'footer-row', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'header-cell', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'header-row', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'row', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'text-column', name:'MatTableModule', from: '@angular/material/table' },
  { key: 'tab-group', name:'MatTabsModule', from: '@angular/material/tabs' },
  { key: 'tab', name:'MatTabsModule', from: '@angular/material/tabs' },
  { key: 'toolbar-row', name:'MatToolbarModule', from: '@angular/material/toolbar' },
  { key: 'nested-tree-node', name:'MatTreeModule', from: '@angular/material/tree' },
  { key: 'tree-node', name:'MatTreeModule', from: '@angular/material/tree' },
];

const EXTRA_MODULE = [
  { key: 'HttpClient', name: 'HttpClientModule', from: '@angular/common/http' },
  { key: 'formControl', name: 'ReactiveFormsModule', from: '@angular/forms' },
  { key: 'formGroup', name: 'ReactiveFormsModule', from: '@angular/forms' },
  { key: 'ngModel', name: 'FormsModule', from: '@angular/forms' },
  { key: 'matEndDate', name: 'MatMomentDateModule', from: '@angular/material-moment-adapter' },
  { key: 'matBadge', name: 'MatBadgeModule', from: '@angular/material/badge' },
  { key: 'MatBottomSheet', name: 'MatBottomSheetModule', from: '@angular/material/bottom-sheet' },
  { key: 'mat-button', name: 'MatButtonModule', from: '@angular/material/button' },
  { key: 'mat-raised-button', name: 'MatButtonModule', from: '@angular/material/button' },
  { key: 'matRippleColor', name: 'MatRippleModule', from: '@angular/material/core' },
  { key: 'matStartDate', name: 'MatDatepickerModule', from: '@angular/material/datepicker' },
  { key: 'mat-icon-button', name: 'MatIconModule', from: '@angular/material/icon' },
  { key: 'matInput', name: 'MatInputModule', from: '@angular/material/input' },
  { key: 'matNativeControl', name: 'MatInputModule', from: '@angular/material/input' },
  { key: 'MatSnackBar', name: 'MatSnackBarModule', from: '@angular/material/snack-bar' },
  { key: 'matSort', name: 'MatSortModule', from: '@angular/material/sort' },
  { key: 'dataSource', name: 'MatTableModule', from: '@angular/material/table' },
  { key: 'matTooltip', name: 'MatTooltipModule', from: '@angular/material/tooltip' },
  { key: 'matTooltipPosition', name: 'MatTooltipModule', from: '@angular/material/tooltip' },
];

const rootPath = path.join(__dirname, '../../src/app/material/');
data.forEach(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
  const componentPath = path.join(rootPath, 'components', componentName);
  console.log('Working: ' + componentPath);
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath);
  }

  // pre progress data
  componentDemos = componentDemos
    .filter(demo => !blacklist.some(l => l.componentName === componentName && l.demoName === demo.name))
    .map((demo) => ({
      ...demo,
      files: demo.files.map((file) => ({
        ...file,
        content: file.content
          .replace('default as _rollupMoment, ', '')
          .replace('default as _rollupMoment', '')
          .replace('_rollupMoment || ', '')
      })),
    }));

  // component demos file
  componentDemos.forEach((demo) => { // name, title, files
    const demoPath = path.join(componentPath, demo.name.replace(/-example$/u, ''));
    if (!fs.existsSync(demoPath)) {
      fs.mkdirSync(demoPath);
    }
    demo.files.forEach((file) => { // name, content
      console.log('Generate: ' + path.join(demoPath, file.name));
      fs.writeFileSync(path.join(demoPath, file.name), file.content);
    });
  });

  // component index module file
  let importModules = [];
  componentDemos.forEach((demo) => {
    demo.files.forEach((file) => {
      file.content.match(/(?<=<mat-)([\w-]+)/gu)
        ?.forEach((matName) => {
          importModules.push(
            MAT_TAG_MODULE.find(m => m.key === matName)
              ?? { key: matName, name: `Mat${toPascalCase(matName)}Module`, from: `@angular/material/${matName}` }
          );
        });
      EXTRA_MODULE
        .forEach((m) => {
          if (file.content.indexOf(m.key) !== -1) {
            importModules.push(m);
          }
        });
    });
  });
  importModules = Array.from(new Map(importModules.map(item => [item.name, item])).values());
  importModules.sort((a, b) => {
    if (a.from !== b.from) {
      return a.from.localeCompare(b.from);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const componentDemoImports = [];
  componentDemos.forEach((demo) => {
    demo.files.forEach((file) => {
      if (file.name.match(/\.ts$/u)) {
        file.content.match(/(?<=@Component\s*\(\{[^\u0000]+\}\)\s*export class )(\w+)(?=[\s\{<])/ug)
          ?.forEach((name) => {
            componentDemoImports.push({ name: name, from: `./${demo.name.replace(/-example$/u, '')}/${demo.name}` });
          });
      }
    });
  });
  const indexModuleTs = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
${importModules.map(m => `import { ${m.name} } from '${m.from}';`).join('\n')}

${componentDemoImports.map(m => `import { ${m.name} } from '${m.from}';`).join('\n')}
import { MaterialComponentDemo${toPascalCase(componentName)} } from './app-material-component-demo-${componentName}';

@NgModule({
  declarations: [
${componentDemoImports.map(m => `    ${m.name},`).join('\n')}
    MaterialComponentDemo${toPascalCase(componentName)},
  ],
  imports: [
    CommonModule,
${importModules.map(m => `    ${m.name},`).join('\n')}
  ],
  exports: [MaterialComponentDemo${toPascalCase(componentName)}],
})
export class MaterialComponentDemo${toPascalCase(componentName)}Module { }
`;
  console.log('Generate: ' + path.join(componentPath, `app-material-component-demo-${componentName}.module.ts`));
  fs.writeFileSync(path.join(componentPath, `app-material-component-demo-${componentName}.module.ts`), indexModuleTs);

  // component ts file
  const indexTs = `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-component-demo-${componentName}',
  templateUrl: './app-material-component-demo-${componentName}.html',
})
export class MaterialComponentDemo${toPascalCase(componentName)} implements OnInit {
  ngOnInit() {
  }
}`;
  console.log('Generate: ' + path.join(componentPath, `app-material-component-demo-${componentName}.ts`));
  fs.writeFileSync(path.join(componentPath, `app-material-component-demo-${componentName}.ts`), indexTs);

  // component html file
  const indexHtml = `<div>
  <hr />
  <h1>${encodeHTML(componentTitle)}</h1>
${
  componentDemos
    .map(demo => `  <hr />
  <div id="components-${componentName}-demo-${demo.name}">
    <h2>${encodeHTML(demo.title)}</h2>
    <div className="code-box-demo">
      <${demo.name}></${demo.name}>
    </div>
  </div>`)
    .join('\n')
}
  <hr />
</div>
`;
  console.log('Generate: ' + path.join(componentPath, `app-material-component-demo-${componentName}.html`));
  fs.writeFileSync(path.join(componentPath, `app-material-component-demo-${componentName}.html`), indexHtml);
});

const mainModuleTs = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module'
import { MaterialComponent } from './material.component';
${
  data
    .map(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
      return `import { MaterialComponentDemo${toPascalCase(componentName)}Module } from './components/${componentName}/app-material-component-demo-${componentName}.module';`
    })
    .join('\n')
}

@NgModule({
  declarations: [
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
${
  data
    .map(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
      return `    MaterialComponentDemo${toPascalCase(componentName)}Module,`
    })
    .join('\n')
}
  ],
})
export class MaterialModule { }
`;
fs.writeFileSync(path.join(rootPath, 'material.module.ts'), mainModuleTs);

const mainHtml = `<div>
  <h1>child-angular11-material-11</h1>
${
  data
    .map(({ name: componentName, title: componentTitle, demos: componentDemos }) => {
      return `  <app-material-component-demo-${componentName}></app-material-component-demo-${componentName}>`
    })
    .join('\n')
}
</div>
`;
fs.writeFileSync(path.join(rootPath, 'material.component.html'), mainHtml);
