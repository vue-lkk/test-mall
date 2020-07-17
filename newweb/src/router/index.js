import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//懒加载
const Home = () => import('../components/Home')
const New = () => import('../components/HomeNew')
const Message = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Porfile = () => import('../components/profile')


Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    //name: 'Home',
    redirect: '/home'//默认路径  re/d/irect:重定向
  },
  {
    path: '/home',
    //name: 'Home',
    component: Home,
    // meta ：元数据（描述数据的数据）
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'',
        redirect:"new"  //默认路径  re/d/irect:重定向
      },
      {
        path:"new",
        component:New
      },
      {
        path:"message",
        component:Message
      },

    ]
  },
  {
    path: '/about',
    //name: 'About',
    component: About,
    meta:{
      title:'关于'
    },
  },
  {
    path:'/user/:userId',
    //name:'User',
    component: User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    //name:'Profile',
    component: Porfile,
    meta:{
      title:'档案'
    },
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //在路由改App.vue中按钮样式,只要哪个选中就添加样式
  linkActiveClass:'active'  //  link /active /class  
})
//前置守卫(guard)
//每个组件跳转时title对应改变
router.beforeEach((to,from,next) => {
  //从from跳转到同to
  document.title = to.matched[0].meta.title
  console.log(to);
  //console.log('++++++');
  next()
})

//后置钩子(hook)
// router.afterEach((to, from) =>{
//   console.log('-----');
// })



export default router
