import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/home/Home')
const Category = () => import('../view/category/Category')
const Cart = () => import('../view/cart/Cart')
const Profile = () => import('../view/profile/Profile')
//安装插件
Vue.use(VueRouter)
//创建路由对象
  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
  
    {
      path:'/profile',
      component:Profile
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导出router
export default router
