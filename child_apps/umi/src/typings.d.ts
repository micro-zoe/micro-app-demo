declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
declare interface Window {
  config?: any;
  storage?: {
    load: (path: string) => unknown;
    save: (path: string, value?: object | string) => void;
    remove: (name) => void;
  };
  __MICRO_APP_BASE_ROUTE__?: string;
  __MICRO_APP_NAME__?: string;
  __MICRO_APP_ENVIRONMENT__?: true;
  microApp?: {
    dispatch: any;
    setGlobalData: any;
  };
}
