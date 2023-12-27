import React from 'react';
import ImageBasicDemo from './basic';
import ImageFallbackDemo from './fallback';
import ImagePlaceholderDemo from './placeholder';
import ImagePreviewGroupDemo from './preview-group';
import ImagePreviewGroupVisibleDemo from './preview-group-visible';
import ImagePreviewSrcDemo from './preview-src';
import ImageControlledPreviewDemo from './controlled-preview';
import ImageToolbarRenderDemo from './toolbar-render'
import ImageRenderDemo from './image-render'
import ImageModalDemo from './modal'
import './index.css';

const ImageDemo = () => (
  <div className="image-demo">
    <hr />
    <div id="components-image-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <ImageBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-fallback">
      <h2>Fallback 容错处理</h2>
      <div className="code-box-demo">
        <ImageFallbackDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-placeholder">
      <h2>Placeholder 渐进加载</h2>
      <div className="code-box-demo">
        <ImagePlaceholderDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-preview-group">
      <h2>PreviewGroup 多张图片预览</h2>
      <div className="code-box-demo">
        <ImagePreviewGroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-preview-group-visible">
      <h2>PreviewGroupVisible 相册模式</h2>
      <div className="code-box-demo">
        <ImagePreviewGroupVisibleDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-preview-src">
      <h2>PreviewSrc 自定义预览图片</h2>
      <div className="code-box-demo">
        <ImagePreviewSrcDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-controlled-preview">
      <h2>ControlledPreview 受控的预览</h2>
      <div className="code-box-demo">
        <ImageControlledPreviewDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-tool-bar-render">
      <h2>toolbarRender 自定义工具栏</h2>
      <div className="code-box-demo">
        <ImageToolbarRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-image-render">
      <h2>imageRender 自定义预览内容</h2>
      <div className="code-box-demo">
        <ImageRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-image-demo-modal">
      <h2>modal 嵌套</h2>
      <div className="code-box-demo">
        <ImageModalDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ImageDemo;
