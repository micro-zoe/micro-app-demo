const sleep = timeout => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, timeout);
});

let collectedDemos = [];
const collectDemos = async () => {
  const componentName = window.location.pathname.match(/\/components\/(.+)\//)[1];
  const $componentTitle = document.querySelector('.docs-primary-header.component-page-header h1');
  const componentTitle = $componentTitle.firstChild.data.trim();
  const $wrappers = [...document.querySelectorAll('.docs-example-viewer-wrapper')];
  const demos = [];
  for (let i = 0; i < $wrappers.length; i++) {
    const $wrapper = $wrappers[i];
    const demoTitle = $wrapper.querySelector('.docs-example-viewer-title-spacer').innerText;
    const $demo = $wrapper.querySelector('.docs-example-viewer-body').firstChild;
    if (!$demo) {
      continue;
    }
    const demoTagName = $demo.tagName?.toLowerCase();
    if (!demoTagName || demoTagName.indexOf('-') === -1) {
      continue;
    }
    let $demoSource = $wrapper.querySelector('.docs-example-viewer-source');
    if (!$demoSource) {
      $wrapper.querySelector('button[aria-label="View source"]').click();
      await sleep(200);
      $demoSource = $wrapper.querySelector('.docs-example-viewer-source');
    }
    const $tabs = [...$demoSource.querySelector('.mat-tab-label-container .mat-tab-labels').children];
    const files = [];
    for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
      const $tab = $tabs[tabIndex];
      let fileName = $tab.querySelector('.mat-tab-label-content').innerText;
      if (fileName.indexOf('.') === -1) {
        fileName = `${demoTagName}.${fileName.toLowerCase()}`;
      }
      $tab.click();
      await sleep(200);
      const $source = $demoSource.querySelector('.mat-tab-body-wrapper').children[tabIndex].querySelector('pre.docs-example-source');
      const source = $source.innerText;
      files.push({ name: fileName, content: source });
    }
    demos.push({ name: demoTagName, title: demoTitle, files: files });
  }
  const data = { name: componentName, title: componentTitle, demos };
  collectedDemos = [...collectedDemos.filter(d => d.name !== data.name), data];
  console.log(`collect demos for ${componentName} finished, ${demos.length} demos collected.`);
};

const copyDemos = () => {
  navigator.clipboard.writeText(JSON.stringify(collectedDemos));
};

const $float = document.createElement('DIV');
$float.innerHTML = `<button>收集当前页 DEMO 数据</button><button>复制已收集数据</button>`;
$float.firstChild.addEventListener('click', collectDemos);
$float.firstChild.nextSibling.addEventListener('click', copyDemos);
$float.style = 'position: fixed; top: 100px; left: 100px; z-index: 10000;';
document.body.appendChild($float);
