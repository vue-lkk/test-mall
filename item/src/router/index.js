//配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/view/Home';
import cart from '@/view/cart';


//通过vue.use(插件)，安装插件
Vue.use(VueRouter)

//创建VueRouter对象
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  //配置路由和组件之间的应用关系
  routes
})
//将router兑现传入到vue实例
export default router
