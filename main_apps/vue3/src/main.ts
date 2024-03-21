import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import microApp from '@micro-zoe/micro-app'
import installElementPlus from './plugins/element'

microApp.start()

const app = createApp(App)

installElementPlus(app)

app.use(router)

app.mount('#app')

window.addEventListener('popstate', (e) => {
  console.log('主应用vue3监听的 popstate', window.location.href)
})
