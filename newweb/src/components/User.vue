<template>
    <div>
        <h2>我是用户界面</h2>
         <!-- 方法一 -->
        <h1>{{userId}}</h1> 
         <!-- 方法二 -->
        <h1>{{$route.params.userId}}</h1>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name:'User',
    // created(){
    //     console.log('created'); 
    //     document.title = "用户"
    // },
    computed:{
        userId(){
            // $route代表处于活跃的路由
            //$route.params拿到用户名
            return this.$route.params.userId
        }
    
    },
    methods:{
        btnClick(){
            //所有的组件都继承自vue类的原型
            console.log(this.$router);
            console.log(this.$route);
            console.log(this.name)
        }
    }
}
</script>