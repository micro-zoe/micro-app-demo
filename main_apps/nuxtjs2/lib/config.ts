
// 开发环境地址
const config: Record<string, string> = {
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
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = 'http://www.micro-zoe.com'
  })

  // 在部署后，nextjs11和nuxtjs2依然和开发环境保持一致，绑定4002和4003端口，这里单独处理
  config.nextjs11 = `http://www.micro-zoe.com:4002`
  config.nuxtjs2 = `http://www.micro-zoe.com:4003`
}

// if (true) {
//   Object.keys(config).forEach((key) => {
//     config[key] = `http://127.0.0.1:8080`
//   })

//   config.nextjs11 = `http://localhost:4002`
//   config.nuxtjs2 = `http://localhost:4003`
// }

export default config
