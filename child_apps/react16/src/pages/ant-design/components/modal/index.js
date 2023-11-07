import React from 'react';
import ModalBasicDemo from './basic';
import ModalAsyncDemo from './async';
import ModalFooterDemo from './footer';
import ModalConfirmDemo from './confirm';
import ModalInfoDemo from './info';
import ModalLocaleDemo from './locale';
import ModalManualDemo from './manual';
import ModalPositionDemo from './position';
import ModalConfirmRouterDemo from './confirm-router';
import ModalButtonPropsDemo from './button-props';
import ModalHooksDemo from './hooks';
import ModalModalRenderDemo from './modal-render';
import ModalWidthDemo from './width';
import './index.css';

const ModalDemo = () => (
  <div className="modal-demo">
    <hr />
    <div id="components-modal-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <ModalBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-async">
      <h2>Async 异步关闭</h2>
      <div className="code-box-demo">
        <ModalAsyncDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-footer">
      <h2>Footer 自定义页脚</h2>
      <div className="code-box-demo">
        <ModalFooterDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-confirm">
      <h2>Confirm 确认对话框</h2>
      <div className="code-box-demo">
        <ModalConfirmDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-info">
      <h2>Info 信息提示</h2>
      <div className="code-box-demo">
        <ModalInfoDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-locale">
      <h2>Locale 国际化</h2>
      <div className="code-box-demo">
        <ModalLocaleDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-manual">
      <h2>Manual 手动更新和移除</h2>
      <div className="code-box-demo">
        <ModalManualDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-position">
      <h2>Position 自定义位置</h2>
      <div className="code-box-demo">
        <ModalPositionDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-confirm-router">
      <h2>ConfirmRouter 销毁确认对话框</h2>
      <div className="code-box-demo">
        <ModalConfirmRouterDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-button-props">
      <h2>ButtonProps 自定义页脚按钮属性</h2>
      <div className="code-box-demo">
        <ModalButtonPropsDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-hooks">
      <h2>Hooks 使用 hooks 获得上下文</h2>
      <div className="code-box-demo">
        <ModalHooksDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-modal-render">
      <h2>ModalRender 自定义渲染对话框</h2>
      <div className="code-box-demo">
        <ModalModalRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-modal-demo-width">
      <h2>Width 自定义模态的宽度</h2>
      <div className="code-box-demo">
        <ModalWidthDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ModalDemo;
