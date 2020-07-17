<template>
  <div id="app">
    <h2>我是App组件</h2>


    <!--1. active-class="active" 添加样式
        2. to="/home" 页面跳转
        3. tag="button" (tag:意思是标签)改变标签，可以为li,div 等等
        4. replace   history =replace浏览器后退键不能返回上一个页面
     -->
    <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link>
     <!-- :to="'/user/'+userId"动态获取到用户名lkk -->
     <router-link :to="'/user/'+userId" tag="button" replace >用户</router-link>
     <router-link :to="{path:'/profile',query:{name:'jon',age:25,height:1.88}}" tag="button" replace >档案</router-link>
   
   <!-- 通过js代码来进行跳转 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <!-- <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button> -->

    <!-- keep-alive 跳转其他页面时会缓存当前页面浏览状态,再次点击不会再次创建，
        当点击再会来时依然是当初浏览时的状态，不会被刷新回最开始的默认状态 
        1.注意：之前设置了(redirect:"new"  //默认路径  re/d/irect:重定向),
        所以要先解决这个问题，才可以实现,
        2.注意：如果不想包含User,profile组件在内缓存,可以设置exclude="User,profile"
                在这里注意两点是：（1）这里的 User 和 profile 是组件的name属性值
                                  （2）这里的 User 和 profile之间只能加 "," 不能多加空格
        1.解决：
            1.添加  <keep-alive></keep-alive>包裹
            2.在 Home.vue 组件的data(){return{ path:'/home/new',}}加上默认路径
            3.使用activated()周期函数 和 beforeRouteLeave(to,from,next) router导航守卫 -->
    <keep-alive exclude="User,profile">
        <router-view></router-view>
    </keep-alive>
    
    
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      userId:'lkk'
    }
  },
  methods:{
    
    //push => pushState 可以返回
    //replace => replaceState 不可以返回
    homeClick(){
        //this.$router.push('/home');
        //$router代表全部的路由
        this.$router.replace('/home');
    },
    aboutClick(){
        //this.$router.push('/about');
        this.$router.replace('/about');
    },
    userClick(){
         this.$router.push('/user/' + this.userId)
    },
    profileClick(){
          this.$router.push({
            path:'/profile',
            query:{
              name:'jon',
              age:25,
              height:1.88
              }
          })
    }
  }
}
</script>

<style>
.active{
  color: orangered;
  background: orange;
}
</style>
