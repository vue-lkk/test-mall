import axios from 'axios'

//方法一 (回调函数方式)
// export function request(config,success,failure) {
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送真正的请求
//     instance(config)
//     .then(res => {
//         success(res);
//     })
//     .catch(err => {
//         failure(err)
//     })
// }

// 方法二 (回调函数方式)
// export function request(config) {
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送真正的请求
//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res);
//     })
//     .catch(err => {
//         config.failure(err)
//     })
// }


//方法三  (Promise方式)
// export function request(config) {
//     return new Promise((resolve,reject) => {
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     //发送真正的请求
//     instance(config)
//     .then(res => {
//         resolve(res)
//     })
//     .catch(err => {
//         reject(err)
//     })
//     })
// }



//方法四
export function request(config) {
    
    //1.创建axios的实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2.axios的拦截器
    //2.1请求拦截的作用
    instance.interceptors.request.use(config => {
        console.log(config);
        //1.比如config中的一些消息不符合服务器要求

        //2.比如每次发送网络请求三十，都希望界面中显示一个请求加载中图标

        //3.某些网络请求（比如登陆（token））,必须携带一些特殊的消息
        return config  //拦截后记得返回
    },err=>{
        console.log(err);
    })
    //2.2响应拦截
    instance.interceptors.request.use(res => {
        console.log(res);
        return res.data
    },err => {
        console.log(err);
    })
    //发送真正的网络请求
   return  instance(config)
   
}