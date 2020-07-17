import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//原型
Vue.prototype.name = 'LKK'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

console.log(router);
