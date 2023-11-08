let collectedDemos = [];
const collectDemos = () => {
  const $toc = document.getElementById('demo-toc');
  const componentName = $toc.children[0].firstChild.href.replace(/.*#components-/ui, '').replace(/-demo.*$/ui, '');
  const $componentTitle = document.querySelector('.main-container section.markdown > h1');
  const componentTitle = $componentTitle.firstChild.data + ' ' + $componentTitle.querySelector('.subtitle').innerText;
  const demos = [...$toc.children]
    .map(li => ({ title: li.firstChild.innerHTML, anchor: li.firstChild.href.replace(/.*#/ui, '') }))
    .filter(({ anchor }) => anchor !== 'API')
    .map(({ title, anchor }) => {
      const $demo = document.getElementById(anchor);
      const $highlightWrapper = $demo.querySelector('.highlight-wrapper');
      const expanded = $highlightWrapper.classList.contains('highlight-wrapper-expand');
      if (!expanded) {
        $demo.querySelector('.code-expand-icon-show').click()
      }
      const $javascriptTab = [...$demo.querySelectorAll('.ant-tabs-tab')].filter(d => d.innerText === 'JavaScript')[0];
      const isJavascript = $javascriptTab.classList.contains('ant-tabs-tab-active');
      if (!isJavascript) {
        $javascriptTab.click();
      }
      const $jsx = $demo.querySelector('.language-jsx');
      const $css = $demo.querySelector('.css');
      const jsx = $jsx?.innerText || '';
      const css = $css?.innerText || '';
      const fileName = anchor.replace(/^components-.*?-demo-/ui, '').replace(/[A-Z]/ug, letter => `-${letter.toLowerCase()}`);
      return { fileName, title, jsx, css };
    });
  const data = { name: componentName, title: componentTitle, demos };
  collectedDemos = [...collectedDemos.filter(d => d.name !== data.name), data];
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
