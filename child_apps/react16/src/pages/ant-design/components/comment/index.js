import React from 'react';
import CommentBasicDemo from './basic';
import CommentListDemo from './list';
import CommentNestedDemo from './nested';
import CommentEditorDemo from './editor';
import './index.css';

const CommentDemo = () => (
  <div className="comment-demo">
    <hr />
    <div id="components-comment-demo-basic">
      <h2>Basic 基本评论</h2>
      <div className="code-box-demo">
        <CommentBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-comment-demo-list">
      <h2>List 配合 List 组件</h2>
      <div className="code-box-demo">
        <CommentListDemo />
      </div>
    </div>
    <hr />
    <div id="components-comment-demo-nested">
      <h2>Nested 嵌套评论</h2>
      <div className="code-box-demo">
        <CommentNestedDemo />
      </div>
    </div>
    <hr />
    <div id="components-comment-demo-editor">
      <h2>Editor 回复框</h2>
      <div className="code-box-demo">
        <CommentEditorDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CommentDemo;
