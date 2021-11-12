import './public-path'
import Vue from 'vue'
import { Menu, Submenu, MenuItem } from 'element-ui';
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

new Vue({
  render: h => h(App),
}).$mount('#sidebar-app')
