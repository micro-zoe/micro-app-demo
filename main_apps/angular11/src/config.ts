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

// if (environment.production) {
//   const locationOrigin = `${location.origin}/`
//   Object.keys(config).forEach((key) => {
//     config[key] = locationOrigin
//   })
// }

if (true) {
  const locationOrigin = `http://127.0.0.1:8080`
  Object.keys(config).forEach((key) => {
    config[key] = locationOrigin
  })
}

export default config
