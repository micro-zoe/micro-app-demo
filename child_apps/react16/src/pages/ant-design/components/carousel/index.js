import React from 'react';
import CarouselBasicDemo from './basic';
import CarouselPositionDemo from './position';
import CarouselAutoplayDemo from './autoplay';
import CarouselFadeDemo from './fade';
import './index.css';

const CarouselDemo = () => (
  <div className="carousel-demo">
    <hr />
    <div id="components-carousel-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <CarouselBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-carousel-demo-position">
      <h2>Position 位置</h2>
      <div className="code-box-demo">
        <CarouselPositionDemo />
      </div>
    </div>
    <hr />
    <div id="components-carousel-demo-autoplay">
      <h2>Autoplay 自动切换</h2>
      <div className="code-box-demo">
        <CarouselAutoplayDemo />
      </div>
    </div>
    <hr />
    <div id="components-carousel-demo-fade">
      <h2>Fade 渐显</h2>
      <div className="code-box-demo">
        <CarouselFadeDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CarouselDemo;
