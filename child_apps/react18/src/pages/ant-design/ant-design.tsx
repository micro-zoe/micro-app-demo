import React, { useState, LazyExoticComponent } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./ant-design.css";

const AffixDemo = React.lazy(() => import("./components/affix"));
const AnchorDemo = React.lazy(() => import("./components/anchor"));
const AvatarDemo = React.lazy(() => import("./components/avatar"));
const BadgeDemo = React.lazy(() => import("./components/badge"));
const ButtonDemo = React.lazy(() => import("./components/button"));
const CheckboxDemo = React.lazy(() => import("./components/checkbox"));
const DescriptionsDemo = React.lazy(() => import("./components/descriptions"));
const DividerDemo = React.lazy(() => import("./components/divider"));
const EmptyDemo = React.lazy(() => import("./components/empty"));
const GridDemo = React.lazy(() => import("./components/grid"));
const IconDemo = React.lazy(() => import("./components/icon"));
const ImageDemo = React.lazy(() => import("./components/image"));
const InputNumberDemo = React.lazy(() => import("./components/input-number"));
const PaginationDemo = React.lazy(() => import("./components/pagination"));
const StepsDemo = React.lazy(() => import("./components/steps"));
const RadioDemo = React.lazy(() => import("./components/radio"));
const RateDemo = React.lazy(() => import("./components/rate"));
const SwitchDemo = React.lazy(() => import("./components/switch"));
const TransferDemo = React.lazy(() => import("./components/transfer"));
const SliderDemo = React.lazy(() => import("./components/slider"));
const StatisticDemo = React.lazy(() => import("./components/statistic"));
const TreeDemo = React.lazy(() => import("./components/tree"));
const MessageDemo = React.lazy(() => import("./components/message"));
const NotificationDemo = React.lazy(() => import("./components/notification"));
const PopconfirmDemo = React.lazy(() => import("./components/popconfirm"));
const ResultDemo = React.lazy(() => import("./components/result"));
const SkeletonDemo = React.lazy(() => import("./components/skeleton"));
const SpinDemo = React.lazy(() => import("./components/spin"));
const FormDemo = React.lazy(() => import("./components/form"));

const LazyImportComponent = ({
  title,
  LazyChildren,
}: {
  title: string;
  LazyChildren:
    | LazyExoticComponent<() => JSX.Element>
    | LazyExoticComponent<React.FC<{}>>;
}) => (
  <>
    <h1>child-react18-ant-design-5.x: {title}</h1>
    <React.Suspense fallback={<div>loading...</div>}>
      <LazyChildren />
    </React.Suspense>
  </>
);

const AntDesignPage = () => {
  const items: TabsProps["items"] = [
    {
      label: `通用`,
      key: "通用",
      disabled: true,
    },
    {
      label: "Button 按钮",
      key: "Button",
      children: (
        <LazyImportComponent title="Button 按钮" LazyChildren={ButtonDemo} />
      ),
    },
    {
      label: "Icon 图标",
      key: "Icon",
      children: (
        <LazyImportComponent title="Icon 图标" LazyChildren={IconDemo} />
      ),
    },
    {
      label: `布局`,
      key: "布局",
      disabled: true,
    },
    {
      label: "Divider 分割线",
      key: "Divider",
      children: (
        <LazyImportComponent
          title="Divider 分割线"
          LazyChildren={DividerDemo}
        />
      ),
    },
    {
      label: "Grid 栅格",
      key: "Grid",
      children: (
        <LazyImportComponent title="Grid 栅格" LazyChildren={GridDemo} />
      ),
    },
    {
      label: `导航`,
      key: "导航",
      disabled: true,
    },
    {
      label: "Anchor 锚点",
      key: "Anchor",
      children: (
        <LazyImportComponent title="Anchor 锚点" LazyChildren={AnchorDemo} />
      ),
    },
    {
      label: "Pagination 分页",
      key: "Pagination",
      children: (
        <LazyImportComponent
          title="Pagination 分页"
          LazyChildren={PaginationDemo}
        />
      ),
    },
    {
      label: "Steps 步骤条",
      key: "Steps",
      children: (
        <LazyImportComponent title="Steps 步骤条" LazyChildren={StepsDemo} />
      ),
    },
    {
      label: `数据录入`,
      key: "数据录入",
      disabled: true,
    },
    {
      label: "Checkbox 多选框",
      key: "Checkbox",
      children: (
        <LazyImportComponent
          title="Checkbox 多选框"
          LazyChildren={CheckboxDemo}
        />
      ),
    },
    {
      label: "Form 表单",
      key: "Form",
      children: (
        <LazyImportComponent
          title="Form 表单"
          LazyChildren={FormDemo}
        />
      ),
    },
    {
      label: "InputNumber 数字输入框",
      key: "InputNumber",
      children: (
        <LazyImportComponent
          title="InputNumber 数字输入框"
          LazyChildren={InputNumberDemo}
        />
      ),
    },
    {
      label: "Radio 单选框",
      key: "Radio",
      children: (
        <LazyImportComponent title="Radio 单选框" LazyChildren={RadioDemo} />
      ),
    },
    {
      label: "Rate 评分",
      key: "Rate",
      children: (
        <LazyImportComponent title="Rate 评分" LazyChildren={RateDemo} />
      ),
    },
    {
      label: "Slider 滑动输入条",
      key: "Slider",
      children: (
        <LazyImportComponent
          title="Slider 滑动输入条"
          LazyChildren={SliderDemo}
        />
      ),
    },
    {
      label: "Switch 开关",
      key: "Switch",
      children: (
        <LazyImportComponent title="Switch 开关" LazyChildren={SwitchDemo} />
      ),
    },
    {
      label: "Transfer 穿梭框",
      key: "Transfer",
      children: (
        <LazyImportComponent
          title="Transfer 穿梭框"
          LazyChildren={TransferDemo}
        />
      ),
    },
    {
      label: `数据展示`,
      key: "数据展示",
      disabled: true,
    },
    {
      label: "Avatar 头像",
      key: "Avatar",
      children: (
        <LazyImportComponent title="Avatar 头像" LazyChildren={AvatarDemo} />
      ),
    },
    {
      label: "Badge 徽标数",
      key: "Badge",
      children: (
        <LazyImportComponent title="Badge 徽标数" LazyChildren={BadgeDemo} />
      ),
    },
    {
      label: "Descriptions 描述列表",
      key: "Descriptions",
      children: (
        <LazyImportComponent
          title="Descriptions 描述列表"
          LazyChildren={DescriptionsDemo}
        />
      ),
    },
    {
      label: "Empty 空状态",
      key: "Empty",
      children: (
        <LazyImportComponent title="Empty 空状态" LazyChildren={EmptyDemo} />
      ),
    },
    {
      label: "Image 图片",
      key: "Image",
      children: (
        <LazyImportComponent title="Image 图片" LazyChildren={ImageDemo} />
      ),
    },
    {
      label: "Statistic 统计数值",
      key: "Statistic",
      children: (
        <LazyImportComponent
          title="Statistic 统计数值"
          LazyChildren={StatisticDemo}
        />
      ),
    },
    {
      label: "Tree 树形控件",
      key: "Tree",
      children: (
        <LazyImportComponent title="Tree 树形控件" LazyChildren={TreeDemo} />
      ),
    },
    {
      label: `反馈`,
      key: "反馈",
      disabled: true,
    },
    {
      label: "Message 全局提示",
      key: "Message",
      children: (
        <LazyImportComponent
          title="Message 全局提示"
          LazyChildren={MessageDemo}
        />
      ),
    },
    {
      label: "Notification 通知提醒框",
      key: "Notification",
      children: (
        <LazyImportComponent
          title="Notification 通知提醒框"
          LazyChildren={NotificationDemo}
        />
      ),
    },
    {
      label: "Popconfirm 气泡确认框",
      key: "Popconfirm",
      children: (
        <LazyImportComponent
          title="Popconfirm 气泡确认框"
          LazyChildren={PopconfirmDemo}
        />
      ),
    },
    {
      label: "Result 结果",
      key: "Result",
      children: (
        <LazyImportComponent title="Result 结果" LazyChildren={ResultDemo} />
      ),
    },
    {
      label: "Skeleton 骨架屏",
      key: "Skeleton",
      children: (
        <LazyImportComponent
          title="Skeleton 骨架屏"
          LazyChildren={SkeletonDemo}
        />
      ),
    },
    {
      label: "Spin 加载中",
      key: "Spin",
      children: (
        <LazyImportComponent title="Spin 加载中" LazyChildren={SpinDemo} />
      ),
    },
    {
      label: `其他`,
      key: "其他",
      disabled: true,
    },
    {
      label: "Affix 固钉",
      key: "Affix",
      children: (
        <LazyImportComponent title="Affix 固钉" LazyChildren={AffixDemo} />
      ),
    },
  ];
  const [activeKey, setActiveKey] = useState<string>("Button");

  const onChange = (k: string) => {
    setActiveKey(k);
  };

  return (
    <div className="ant-design-demo">
      <Tabs
        items={items}
        size="small"
        tabPosition="left"
        activeKey={activeKey}
        onChange={onChange}
        className="ant-design-demo-tabs"
        style={{ height: 'calc(100vh - 100px)', width: 'calc(100vw - 256px)' }}
      />
    </div>
  );
};

export default AntDesignPage;
