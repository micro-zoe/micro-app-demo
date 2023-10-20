<template>
  <div class='ant-design-vue-page'>
    <h1 style="text-align: center;">Form 表单</h1>
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

      <a-form-item :wrapper-col="{ span: 12, offset: 6 }" style="text-align: center;">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <br />
    <br />
    <h1>Alert 警告提示</h1>
    <div class="alert-container">
      <a-alert
        message="Success Tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        show-icon
      />
      <a-alert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        show-icon
      />
      <a-alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        show-icon
      />
      <a-alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        show-icon
      />
    </div>
    <br />
    <br />
    <h1>Message 全局提示</h1>
    <div>
      <a-button @click="messageSuccess">
        Success
      </a-button>
      <a-button @click="messageError">
        Error
      </a-button>
      <a-button @click="messageWarning">
        Warning
      </a-button>
    </div>
    <br />
    <br />
    <h1>Notification 通知提醒框</h1>
    <div>
      <a-button @click="() => openNotificationWithIcon('success')">
        Success
      </a-button>
      <a-button @click="() => openNotificationWithIcon('info')">
        Info
      </a-button>
      <a-button @click="() => openNotificationWithIcon('warning')">
        Warning
      </a-button>
      <a-button @click="() => openNotificationWithIcon('error')">
        Error
      </a-button>
    </div>
    <br />
    <br />
    <h1>Modal 对话框</h1>
    <div>
      <a-button @click="showConfirm">
        Confirm
      </a-button>
      <a-button type="dashed" @click="showDeleteConfirm">
        Delete
      </a-button>
      <a-button type="dashed" @click="showPropsConfirm">
        With extra props
      </a-button>
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
    <h1>Drawer 抽屉</h1>
    <div>
      <a-radio-group style="margin-right: 8px" :default-value="drawerPlacement" @change="onDrawerChange">
        <a-radio value="top">
          top
        </a-radio>
        <a-radio value="right">
          right
        </a-radio>
        <a-radio value="bottom">
          bottom
        </a-radio>
        <a-radio value="left">
          left
        </a-radio>
      </a-radio-group>
      <a-button type="primary" @click="showDrawer">
        Open
      </a-button>
      <a-drawer
        title="Basic Drawer"
        :placement="drawerPlacement"
        :closable="false"
        :visible="drawerVisible"
        @close="onDrawerClose"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
    </div>
    <br />
    <br />
    <h1>Switch 开关</h1>
    <div>
      <a-switch checked-children="开" un-checked-children="关" default-checked />
      <a-switch checked-children="1" un-checked-children="0" />
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
    <h1>Progress 进度条</h1>
    <div>
      <a-progress :percent="30" />
      <a-progress :percent="50" status="active" />
      <a-progress :percent="70" status="exception" />
      <a-progress :percent="100" />
      <a-progress :percent="50" :show-info="false" />
    </div>
    <br />
    <br />
    <h1>Popover 气泡卡片</h1>
    <div>
      <a-popover title="Title" trigger="hover">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button type="primary">
          Hover me
        </a-button>
      </a-popover>
      <a-popover title="Title" trigger="focus">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button type="primary">
          Focus me
        </a-button>
      </a-popover>
      <a-popover title="Title" trigger="click">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <a-button type="primary">
          Click me
        </a-button>
      </a-popover>
    </div>
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
    <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
      <a-calendar :fullscreen="false" />
    </div>
    <br />
    <br />
    <h1>Table 表格</h1>
    <div>
      <a-table :columns="tableColumns" :data-source="tableData">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
      </a-table>
    </div>
    <br />
    <br />
    <h1>Tree 树形控件</h1>
    <a-tree
      checkable
      :tree-data="treeData"
      :default-expanded-keys="['0-0-0', '0-0-1']"
      :default-selected-keys="['0-0-0', '0-0-1']"
      :default-checked-keys="['0-0-0', '0-0-1']"
      :replace-fields="replaceFields"
      @select="onTreeSelect"
      @check="onTreeCheck"
    />
    <br />
    <br />
    <h1>Carousel 走马灯</h1>
    <div class="ant-carousel">
      <a-carousel arrows>
        <div
          slot="prevArrow"
          slot-scope="props"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div>
    <br />
    <br />
    <h1>Collapse 折叠面板</h1>
    <div>
      <a-collapse accordion>
        <a-collapse-panel key="1" header="This is panel header 1">
          <p>{{ collapseText }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
          <p>{{ collapseText }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
          <p>{{ collapseText }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <br />
    <br />
    <h1>Skeleton 骨架屏</h1>
    <a-skeleton active />
    <br />
    <br />
    <h1>Pagination 分页</h1>
    <a-pagination :total="500" :item-render="pagItemRender" />
    <br />
    <br />
    <h1>BackTop 回到顶部</h1>
    <div id="components-back-top-demo-custom">
      <a-back-top>
        <div class="ant-back-top-inner">
          UP
        </div>
      </a-back-top>
      Scroll down to see the bottom-right
      <strong style="color: #1088e9"> blue </strong>
      button.
    </div>
  </div>
</template>

<script>
const tableColumns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const treeData = [
  {
    name: 'parent 1',
    key: '0-0',
    child: [
      {
        name: '张晨成',
        key: '0-0-0',
        disabled: true,
        child: [
          { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { name: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        name: 'parent 1-1',
        key: '0-0-1',
        child: [{ key: '0-0-1-0', name: 'zcvc' }],
      },
    ],
  },
];

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
    treeExpandedKeys: [],
    treeExpandedValue: undefined,
    collapseText: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
    tableColumns,
    tableData,
    treeData,
    replaceFields: {
      children: 'child',
      title: 'name',
    },
    drawerVisible: false,
    drawerPlacement: 'left',
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
    },
    onTreeSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onTreeCheck(checkedKeys, info) {
      console.log('onCheck', checkedKeys, info);
    },
    showDrawer() {
      this.drawerVisible = true;
    },
    onDrawerClose() {
      this.drawerVisible = false;
    },
    onDrawerChange(e) {
      this.drawerPlacement = e.target.value;
    },
    messageSuccess() {
      this.$message.success('This is a success message');
    },
    messageError() {
      this.$message.error('This is an error message');
    },
    messageWarning() {
      this.$message.warning('This is a warning message');
    },
    showConfirm() {
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">Some descriptions</div>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },
    showDeleteConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    showPropsConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          props: { disabled: true },
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
    openNotificationWithIcon(type) {
      this.$notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    },
  },
};
</script>
<style>
.ant-design-vue-page {
  width: 700px;
  margin: 0 auto;
}

.ant-design-vue-page .ant-btn {
  margin: 0 5px;
}

#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}

.checkbox-container {
  width: 250px;
}

.checkbox-container .ant-calendar-picker {
  margin: 0 8px 12px 0;
}

.ant-time-picker {
  margin: 0px 8px 12px 0px;
}

.tree-select-container {
  width: 200px;
}

.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}

.ant-carousel .custom-slick-arrow:before {
  display: none;
}

.ant-carousel .custom-slick-arrow:hover {
  opacity: 0.5;
  color: #fff;
}

.ant-carousel .slick-slide h3 {
  color: #fff;
}

.ant-design-vue-page .ant-alert {
  margin-bottom: 16px;
}

#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}

#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
