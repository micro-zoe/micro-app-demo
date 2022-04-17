import { history } from 'umi';
import { notification } from 'antd';

// 监听来自基座的通信数据
window.microApp?.addDataListener((data) => {
  console.log('umi-child 收到来自基座应用的数据', data);
   // 当基座下发path时进行跳转
   if (data.path && data.path !== history.location.pathname) {
    history.push(data.path)
  }
}, true);

function handleGlobalData(data) {
  console.log('umi-child 收到来自全局数据');
  console.log(JSON.stringify(data));
}

// 全局数据监听
window.microApp?.addGlobalDataListener(handleGlobalData);

// 监听keep-alive模式下的app状态
window.addEventListener('appstate-change', function (e) {
  console.log('子应用内部console.log -- keep-alive app 状态：', e.detail.appState);
});

// 监听卸载
window.addEventListener('unmount', function () {
  // https://umijs.org/zh-CN/config#mountelementid
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  console.log('子应用 umi-child 卸载了 -- 自定义事件unmount');
});
