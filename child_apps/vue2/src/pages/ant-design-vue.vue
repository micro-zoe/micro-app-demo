<template>
  <div class='ant-design-vue-page'>
    <h1>Form 表单</h1>
    <a-form
      id="components-form-demo-validate-other"
      :form="form"
      v-bind="formItemLayout"
      @submit="handleSubmit"
    >
      <a-form-item label="Plain Text">
        <span class="ant-form-text">
          China
        </span>
      </a-form-item>
      <a-form-item label="Select" has-feedback>
        <a-select
          v-decorator="[
            'select',
            { rules: [{ required: true, message: 'Please select your country!' }] },
          ]"
          placeholder="Please select a country"
        >
          <a-select-option value="china">
            China
          </a-select-option>
          <a-select-option value="usa">
            U.S.A
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Select[multiple]">
        <a-select
          v-decorator="[
            'select-multiple',
            {
              rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ],
            },
          ]"
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <a-select-option value="red">
            Red
          </a-select-option>
          <a-select-option value="green">
            Green
          </a-select-option>
          <a-select-option value="blue">
            Blue
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="InputNumber">
        <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
        <span class="ant-form-text">
          machines
        </span>
      </a-form-item>

      <a-form-item label="Switch">
        <a-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
      </a-form-item>

      <a-form-item label="Slider">
        <a-slider
          v-decorator="['slider']"
          :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
        />
      </a-form-item>

      <a-form-item label="Radio.Group">
        <a-radio-group v-decorator="['radio-group']">
          <a-radio value="a">
            item 1
          </a-radio>
          <a-radio value="b">
            item 2
          </a-radio>
          <a-radio value="c">
            item 3
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="Radio.Button">
        <a-radio-group v-decorator="['radio-button']">
          <a-radio-button value="a">
            item 1
          </a-radio-button>
          <a-radio-button value="b">
            item 2
          </a-radio-button>
          <a-radio-button value="c">
            item 3
          </a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="Checkbox.Group">
        <a-checkbox-group
          v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
          style="width: 100%;"
        >
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">
                A
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox disabled value="B">
                B
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">
                C
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">
                D
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">
                E
              </a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item label="Rate">
        <a-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
      </a-form-item>

      <a-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
        <a-upload
          v-decorator="[
            'upload',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="logo"
          action="/upload.do"
          list-type="picture"
        >
          <a-button> <a-icon type="upload" /> Click to upload </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item label="Dragger">
        <div class="dropbox">
          <a-upload-dragger
            v-decorator="[
              'dragger',
              {
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
              },
            ]"
            name="files"
            action="/upload.do"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p class="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </a-upload-dragger>
        </div>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <br />
    <br />
    <h1>Checkbox 多选框</h1>
    <div>
      <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
          Check all
        </a-checkbox>
      </div>
      <br />
      <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
    </div>
    <br />
    <br />
    <h1>DatePicker 日期选择</h1>
    <div class="checkbox-container">
      <a-date-picker>
        <template slot="dateRender" slot-scope="current, today">
          <div class="ant-calendar-date" :style="getCurrentStyleCheckBox(current, today)">
            {{ current.date() }}
          </div>
        </template>
      </a-date-picker>
      <a-range-picker>
        <template slot="dateRender" slot-scope="current">
          <div class="ant-calendar-date" :style="getCurrentStyleCheckBox(current)">
            {{ current.date() }}
          </div>
        </template>
      </a-range-picker>
      <a-week-picker>
        <template slot="dateRender" slot-scope="current">
          <div class="ant-calendar-date" :style="getCurrentStyleCheckBox(current)">
            {{ current.date() }}
          </div>
        </template>
      </a-week-picker>
    </div>
    <br />
    <br />
    <h1>TimePicker 时间选择</h1>
    <div>
      <a-time-picker use12-hours @change="onTimePickerChange" />
      <a-time-picker use12-hours format="h:mm:ss A" @change="onTimePickerChange" />
      <a-time-picker use12-hours format="h:mm a" @change="onTimePickerChange" />
    </div>
    <br />
    <br />
    <h1>Switch 开关</h1>
    <div>
      <a-switch checked-children="开" un-checked-children="关" default-checked />
      <br />
      <a-switch checked-children="1" un-checked-children="0" />
      <br />
      <a-switch default-checked>
        <a-icon slot="checkedChildren" type="check" />
        <a-icon slot="unCheckedChildren" type="close" />
      </a-switch>
    </div>
    <br />
    <br />
    <h1>Steps 步骤条</h1>
    <a-steps v-model="stepCurrent" type="navigation" size="small" :style="stepStyle">
      <a-step
        title="Step 1"
        sub-title="00:00:05"
        status="finish"
        description="This is a description."
      />
      <a-step
        title="Step 2"
        sub-title="00:01:02"
        status="process"
        description="This is a description."
      />
      <a-step
        title="Step 3"
        sub-title="waiting for longlong time"
        status="wait"
        description="This is a description."
      />
    </a-steps>
    <a-steps v-model="stepCurrent" type="navigation" :style="stepStyle">
      <a-step status="finish" title="Step 1" />
      <a-step status="process" title="Step 2" />
      <a-step status="wait" title="Step 3" />
      <a-step status="wait" title="Step 4" />
    </a-steps>
    <a-steps v-model="stepCurrent" type="navigation" size="small" :style="stepStyle">
      <a-step status="finish" title="finish 1" />
      <a-step status="finish" title="finish 2" />
      <a-step status="process" title="current process" />
      <a-step status="wait" title="wait" disabled />
    </a-steps>
    <br />
    <br />
    <h1>TreeSelect 树型选择控件</h1>
    <div class="tree-select-container">
      <a-tree-select
        v-model="treeExpandedValue"
        show-search
        style="width: 100%"
        :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
        placeholder="Please select"
        allow-clear
        tree-default-expand-all
      >
        <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
          <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
            <a-tree-select-node key="random" :selectable="false" value="leaf1" title="my leaf" />
            <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
          </a-tree-select-node>
          <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
            <a-tree-select-node key="random3" value="sss">
              <b slot="title" style="color: #08c">sss</b>
            </a-tree-select-node>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select>
    </div>
    <br />
    <br />
    <h1>Calendar 日历</h1>
    <div :style="{ width: '300px', margin: '0 auto', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" />
    </div>
    <br />
    <br />
    <h1>Pagination 分页</h1>
    <a-pagination :total="500" :item-render="pagItemRender" />
  </div>
</template>

<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
    stepCurrent: 0,
    stepStyle: {
      marginBottom: '60px',
      boxShadow: '0px -1px 0 0 #e8e8e8 inset',
    },
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    plainOptions,
    treeExpandedKeys: [],
    treeExpandedValue: undefined,
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
    pagItemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>;
      } else if (type === 'next') {
        return <a>Next</a>;
      }
      return originalElement;
    },
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    getCurrentStyleCheckBox(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
    onTimePickerChange(time, timeString) {
      console.log(time, timeString);
    }
  },
};
</script>
<style>
.ant-design-vue-page {
  width: 700px;
  margin: 0 auto;
}

#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}

.checkbox-container {
  width: 250px;
  margin: 0 auto;
}

.checkbox-container .ant-calendar-picker {
  margin: 0 8px 12px 0;
}

.ant-time-picker {
  margin: 0px 8px 12px 0px;
}

.tree-select-container {
  width: 200px;
  margin: 0 auto;
}
</style>
