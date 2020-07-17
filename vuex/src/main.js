import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
//   //url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   //url:'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   //params专门针对get请求的参数拼接 不用再
//   // 'http://123.207.32.32:8000/home/data'后面
//   //写?type=sell&page=3
//   params:{
//     type:'sell',
//     page:3
//   }
// }).then(res => {
//   console.log(res);
// })


// //2.axios发送并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
//   })
// ]).then(results => {
//     console.log(results)
// })

// //3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// //请求时间5秒
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url:'/home/multidata',
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
//   })
// ]).then(results => {
//     console.log(results)
// })


// //4.创建对应的axios的实例
// const instancel = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instancel({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instancel({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:3
//   }
// }).then(res => {
//   console.log(res);
// })

//封装request模块
import {request} from './network/request';

//方法一
// request({
//   url:'/home/data',
// },res => {
//   console.log(res)
// },eer => {
//   console.log(eer)
// })

//方法二
// request({
//   baseConfig:{
//     url:'/home/data'
//   },
//   success:function(res) {
//     console.log(res)
//   },failure:function(err) {
//     console.log(err)
//   }
// })

//方法三
request({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})