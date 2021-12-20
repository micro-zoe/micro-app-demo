import { environment } from './environments/environment';

// 开发环境地址
const config = {
  angular11: 'http://localhost:4001',
  nextjs11: 'http://localhost:4002',
  nuxtjs2: 'http://localhost:4003',
  react16: 'http://localhost:4004',
  react17: 'http://localhost:4005',
  sidebar: 'http://localhost:4006',
  vite: 'http://localhost:4007',
  vue2: 'http://localhost:4008',
  vue3: 'http://localhost:4009',
}

// 线上环境地址
if (environment.production) {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = location.origin
  })

  // 在部署后，nextjs11和nuxtjs2子应用绑定的端口分别为5001、6001，这里单独处理
  const { protocol, hostname } = location
  config.nextjs11 = `${protocol}//${hostname}:5001`
  config.nuxtjs2 = `${protocol}//${hostname}:6001`
}

// if (true) {
//   Object.keys(config).forEach((key) => {
//     config[key] = `http://127.0.0.1:8080`
//   })

//   const { protocol, hostname } = location
//   config.nextjs11 = `${protocol}//${hostname}:5001`
//   config.nuxtjs2 = `${protocol}//${hostname}:6001`
// }

export default config
