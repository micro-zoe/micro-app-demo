import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

// 与基座的数据交互
function handleMicroData () {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-react16 getData:', window.microApp.getData());

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data) => {
      console.log('child-react16 addDataListener:', data);
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-react16' });
    }, 3000)
  }
}

// ----------分割线---默认模式------两种模式任选其一-----放开注释即可运行------- //
// ReactDOM.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
//   document.getElementById('react16-root')
// );

// console.log('微应用child-react16渲染了');

// handleMicroData()

// // 监听卸载操作
// window.addEventListener('unmount', function () {
//   ReactDOM.unmountComponentAtNode(document.getElementById('react16-root'));
//   console.log('微应用child-react16卸载了');
// })



// ----------分割线---umd模式------两种模式任选其一-------------- //
// 将渲染操作放入 mount 函数
function mount () {
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('react16-root')
  );

  console.log('微应用child-react16渲染了');

  handleMicroData()
}

// 将卸载操作放入 unmount 函数
function unmount () {
  ReactDOM.unmountComponentAtNode(document.getElementById('react16-root'));
  console.log('微应用child-react16卸载了');
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount();
}
