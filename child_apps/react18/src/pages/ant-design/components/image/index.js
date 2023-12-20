import React from 'react';
import ImageBasicDemo from './basic';
import ImageFallbackDemo from './fallback';
import ImagePlaceholderDemo from './placeholder';
import ImagePreviewGroupDemo from './preview-group';
import ImagePreviewGroupVisibleDemo from './preview-group-visible';
import ImagePreviewSrcDemo from './preview-src';
import ImageControlledPreviewDemo from './controlled-preview';
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
  </div>
);
export default ImageDemo;
