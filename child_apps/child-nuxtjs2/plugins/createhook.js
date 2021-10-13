import Vue from 'vue';
import App from '../layouts/default.vue'
console.log(11112222)

const container = document.createElement('div')
container.setAttribute('id', 'nuxt-app')
document.body.appendChild(container)

new Vue({
  render: h => h(App),
})
