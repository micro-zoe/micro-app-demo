import React from 'react';
import FormBasicDemo from './basic';
import FormControlHooksDemo from './control-hooks';
import FormControlRefDemo from './control-ref';
import FormLayoutDemo from './layout';
import FormDisabledDemo from './disabled';
import FormRequiredMarkDemo from './required-mark';
import FormSizeDemo from './size';
import FormLayoutCanWrapDemo from './layout-can-wrap';
import FormWarningOnlyDemo from './warning-only';
import FormUseWatchDemo from './use-watch';
import FormDynamicFormItemDemo from './dynamic-form-item';
import FormDynamicFormItemsDemo from './dynamic-form-items';
import FormDynamicFormItemsComplexDemo from './dynamic-form-items-complex';
import FormNestMessagesDemo from './nest-messages';
import FormComplexFormControlDemo from './complex-form-control';
import FormCustomizedFormControlsDemo from './customized-form-controls';
import FormGlobalStateDemo from './global-state';
import FormFormContextDemo from './form-context';
import FormInlineLoginDemo from './inline-login';
import FormNormalLoginDemo from './normal-login';
import FormRegisterDemo from './register';
import FormAdvancedSearchDemo from './advanced-search';
import FormFormInModalDemo from './form-in-modal';
import FormTimeRelatedControlsDemo from './time-related-controls';
import FormWithoutFormCreateDemo from './without-form-create';
import FormValidateStaticDemo from './validate-static';
import FormDynamicRuleDemo from './dynamic-rule';
import FormValidateOtherDemo from './validate-other';
import './index.css';

const FormDemo = () => (
  <div className="form-demo">
    <hr />
    <div id="components-form-demo-basic">
      <h2>Basic 基本使用</h2>
      <div className="code-box-demo">
        <FormBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-control-hooks">
      <h2>ControlHooks 表单方法调用</h2>
      <div className="code-box-demo">
        <FormControlHooksDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-control-ref">
      <h2>ControlRef 表单方法调用（Class component）</h2>
      <div className="code-box-demo">
        <FormControlRefDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-layout">
      <h2>Layout 表单布局</h2>
      <div className="code-box-demo">
        <FormLayoutDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-disabled">
      <h2>Disabled 表单禁用</h2>
      <div className="code-box-demo">
        <FormDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-required-mark">
      <h2>RequiredMark 必选样式</h2>
      <div className="code-box-demo">
        <FormRequiredMarkDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-size">
      <h2>Size 表单尺寸</h2>
      <div className="code-box-demo">
        <FormSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-layout-can-wrap">
      <h2>LayoutCanWrap 表单标签可换行</h2>
      <div className="code-box-demo">
        <FormLayoutCanWrapDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-warning-only">
      <h2>WarningOnly 非阻塞校验</h2>
      <div className="code-box-demo">
        <FormWarningOnlyDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-use-watch">
      <h2>UseWatch 字段监听 Hooks</h2>
      <div className="code-box-demo">
        <FormUseWatchDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-dynamic-form-item">
      <h2>DynamicFormItem 动态增减表单项</h2>
      <div className="code-box-demo">
        <FormDynamicFormItemDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-dynamic-form-items">
      <h2>DynamicFormItems 动态增减嵌套字段</h2>
      <div className="code-box-demo">
        <FormDynamicFormItemsDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-dynamic-form-items-complex">
      <h2>DynamicFormItemsComplex 复杂的动态增减表单项</h2>
      <div className="code-box-demo">
        <FormDynamicFormItemsComplexDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-nest-messages">
      <h2>NestMessages 嵌套结构与校验信息</h2>
      <div className="code-box-demo">
        <FormNestMessagesDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-complex-form-control">
      <h2>ComplexFormControl 复杂一点的控件</h2>
      <div className="code-box-demo">
        <FormComplexFormControlDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-customized-form-controls">
      <h2>CustomizedFormControls 自定义表单控件</h2>
      <div className="code-box-demo">
        <FormCustomizedFormControlsDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-global-state">
      <h2>GlobalState 表单数据存储于上层组件</h2>
      <div className="code-box-demo">
        <FormGlobalStateDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-form-context">
      <h2>FormContext 多表单联动</h2>
      <div className="code-box-demo">
        <FormFormContextDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-inline-login">
      <h2>InlineLogin 内联登录栏</h2>
      <div className="code-box-demo">
        <FormInlineLoginDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-normal-login">
      <h2>NormalLogin 登录框</h2>
      <div className="code-box-demo">
        <FormNormalLoginDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-register">
      <h2>Register 注册新用户</h2>
      <div className="code-box-demo">
        <FormRegisterDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-advanced-search">
      <h2>AdvancedSearch 高级搜索</h2>
      <div className="code-box-demo">
        <FormAdvancedSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-form-in-modal">
      <h2>FormInModal 弹出层中的新建表单</h2>
      <div className="code-box-demo">
        <FormFormInModalDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-time-related-controls">
      <h2>TimeRelatedControls 时间类控件</h2>
      <div className="code-box-demo">
        <FormTimeRelatedControlsDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-without-form-create">
      <h2>WithoutFormCreate 自行处理表单数据</h2>
      <div className="code-box-demo">
        <FormWithoutFormCreateDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-validate-static">
      <h2>ValidateStatic 自定义校验</h2>
      <div className="code-box-demo">
        <FormValidateStaticDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-dynamic-rule">
      <h2>DynamicRule 动态校验规则</h2>
      <div className="code-box-demo">
        <FormDynamicRuleDemo />
      </div>
    </div>
    <hr />
    <div id="components-form-demo-validate-other">
      <h2>ValidateOther 校验其他组件</h2>
      <div className="code-box-demo">
        <FormValidateOtherDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default FormDemo;
