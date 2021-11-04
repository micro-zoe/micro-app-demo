import { environment } from './environments/environment';

const config = {
  angular11: 'http://localhost:4001',
  nextjs: 'http://localhost:4002',
  nuxtjs: 'http://localhost:4003',
  react16: 'http://localhost:4004',
  react17: 'http://localhost:4005',
  sidebar: 'http://localhost:4006',
  vite: 'http://localhost:4007',
  vue2: 'http://localhost:4008',
  vue3: 'http://localhost:4009',
}

if (environment.production) {
  Object.keys(config).forEach((key) => {
    config[key] = location.origin
  })

  const { protocol, hostname } = location
  config.nextjs = `${protocol}//${hostname}:5001`
  config.nuxtjs = `${protocol}//${hostname}:6001`
}

// if (true) {
//   Object.keys(config).forEach((key) => {
//     config[key] = `http://127.0.0.1:8080`
//   })

//   const { protocol, hostname } = location
//   config.nextjs = `${protocol}//${hostname}:5001`
//   config.nuxtjs = `${protocol}//${hostname}:6001`
// }

export default config
