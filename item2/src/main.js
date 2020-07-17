import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false  //改为true可以在终端看到提示信息

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
