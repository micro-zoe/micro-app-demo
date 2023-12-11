import React from 'react';
import UploadBasicDemo from './basic';
import UploadAvatarDemo from './avatar';
import UploadDefaultFileListDemo from './default-file-list';
import UploadPictureCardDemo from './picture-card';
import UploadFileListDemo from './file-list';
import UploadDragDemo from './drag';
import UploadDirectoryDemo from './directory';
import UploadUploadManuallyDemo from './upload-manually';
import UploadUploadPngOnlyDemo from './upload-png-only';
import UploadPictureStyleDemo from './picture-style';
import UploadPreviewFileDemo from './preview-file';
import UploadMaxCountDemo from './max-count';
import UploadTransformFileDemo from './transform-file';
import UploadUploadWithAliyunOssDemo from './upload-with-aliyun-oss';
import UploadUploadCustomActionIconDemo from './upload-custom-action-icon';
import UploadDragSortingDemo from './drag-sorting';
import UploadCropImageDemo from './crop-image';
import UploadCustomizeProgressBarDemo from './customize-progress-bar';
import './index.css';

const UploadDemo = () => (
  <div className="upload-demo">
    <hr />
    <div id="components-upload-demo-basic">
      <h2>Basic 点击上传</h2>
      <div className="code-box-demo">
        <UploadBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-avatar">
      <h2>Avatar 用户头像</h2>
      <div className="code-box-demo">
        <UploadAvatarDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-default-file-list">
      <h2>DefaultFileList 已上传的文件列表</h2>
      <div className="code-box-demo">
        <UploadDefaultFileListDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-picture-card">
      <h2>PictureCard 照片墙</h2>
      <div className="code-box-demo">
        <UploadPictureCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-file-list">
      <h2>FileList 完全控制的上传列表</h2>
      <div className="code-box-demo">
        <UploadFileListDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-drag">
      <h2>Drag 拖拽上传</h2>
      <div className="code-box-demo">
        <UploadDragDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-directory">
      <h2>Directory 文件夹上传</h2>
      <div className="code-box-demo">
        <UploadDirectoryDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-upload-manually">
      <h2>UploadManually 手动上传</h2>
      <div className="code-box-demo">
        <UploadUploadManuallyDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-upload-png-only">
      <h2>UploadPngOnly 只上传 png 图片</h2>
      <div className="code-box-demo">
        <UploadUploadPngOnlyDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-picture-style">
      <h2>PictureStyle 图片列表样式</h2>
      <div className="code-box-demo">
        <UploadPictureStyleDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-preview-file">
      <h2>PreviewFile 自定义预览</h2>
      <div className="code-box-demo">
        <UploadPreviewFileDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-max-count">
      <h2>MaxCount 限制数量</h2>
      <div className="code-box-demo">
        <UploadMaxCountDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-transform-file">
      <h2>TransformFile 上传前转换文件</h2>
      <div className="code-box-demo">
        <UploadTransformFileDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-upload-with-aliyun-oss">
      <h2>UploadWithAliyunOss 阿里云 OSS</h2>
      <div className="code-box-demo">
        <UploadUploadWithAliyunOssDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-upload-custom-action-icon">
      <h2>UploadCustomActionIcon 自定义交互图标</h2>
      <div className="code-box-demo">
        <UploadUploadCustomActionIconDemo />
      </div>
    </div>
    <hr />
    {/* <div id="components-upload-demo-drag-sorting">
      <h2>DragSorting 上传列表拖拽排序</h2>
      <div className="code-box-demo">
        <UploadDragSortingDemo />
      </div>
    </div>
    <hr /> */}
    <div id="components-upload-demo-crop-image">
      <h2>CropImage 上传前裁切图片</h2>
      <div className="code-box-demo">
        <UploadCropImageDemo />
      </div>
    </div>
    <hr />
    <div id="components-upload-demo-customize-progress-bar">
      <h2>CustomizeProgressBar 自定义进度条样式</h2>
      <div className="code-box-demo">
        <UploadCustomizeProgressBarDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default UploadDemo;
