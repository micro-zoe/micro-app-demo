import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
import installElementPlus from './plugins/element'

// microApp.start({
//   plugins: {
//     modules: {
//       'vite': [
//         {
//           loader(code) {
//             if (process.env.NODE_ENV === 'development') {
//               // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
//               code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
//                 return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
//               })
//             }

//             return code
//           }
//         }
//       ],
//     }
//   }
// })

microApp.start()

const app = createApp(App)

installElementPlus(app)

app.use(router)

app.mount('#app')
