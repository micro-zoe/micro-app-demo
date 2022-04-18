import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig, RequestConfig } from 'umi';
import { Link, setCreateHistoryOptions } from 'umi';
import { currentUser as queryCurrentUser } from './services/api';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import _ from 'lodash';
import RightContent from '@/components/RightContent';

import defaultSettings from '../config/defaultSettings';
const isDev = process.env.NODE_ENV === 'development';

const basename = window.__MICRO_APP_ENVIRONMENT__ ? window.__MICRO_APP_BASE_ROUTE__ : '/';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const user = await queryCurrentUser();
      return user;
    } catch (error) {
      //此处不需要处理，已经被request拦截器拦截
    }
    return undefined;
  };
  // const currentUser = await fetchUserInfo();
  const currentUser = {username:'123'}
  const runtimeSettings: LayoutSettings = {
    ...defaultSettings,
    menuRender: isDev && !window.__MICRO_APP_ENVIRONMENT__ ? undefined : false,
    menuHeaderRender: isDev && !window.__MICRO_APP_ENVIRONMENT__ ? undefined : false,
  };

  return {
    currentUser,
    fetchUserInfo,
    settings: runtimeSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    onPageChange: () => {
      console.log('onPageChange');
    },
    links:
      isDev && !window.__MICRO_APP_ENVIRONMENT__
        ? [
            <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
              <LinkOutlined />
              <span>OpenAPI 文档</span>
            </Link>,
            <Link to="/~docs" key="docs">
              <BookOutlined />
              <span>业务组件文档</span>
            </Link>,
          ]
        : [],
    ...initialState?.settings,
  };
};

setCreateHistoryOptions({
  basename, //你要设置的前缀
});

export function onRouteChange({ location, routes, action }: any) {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 发送全局数据，通知侧边栏修改菜单展示
    window?.microApp?.setGlobalData({ name: window.__MICRO_APP_NAME__ })
  }
}

export const request: RequestConfig = {
  // prefix: 'http://localhost:4010', // 作为子应用是显示配置,
  requestInterceptors: [
    (url, options) => {
      const token = window?.storage?.load('token') as {
        access_token: string;
        token_type: string;
      };

      const access_token = token?.access_token;
      const token_type = token?.token_type;

      const headers = {
        Authorization: `${token_type} ${access_token}`,
      };

      return { url, options: { ...options, headers } };
    },
  ],
  responseInterceptors: [
    (response: Response) => {
      console.log('response', response);
      if (response.status === 401) {
        // 状态码为401时跳转到登录页面
        window?.microApp?.setGlobalData({ action: 'logout' });
      }
      return response;
    },
  ],
};
