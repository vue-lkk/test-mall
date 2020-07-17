<template>
    <div>
       <h2>我是首页</h2>
       <router-link to="/home/new">新闻</router-link>
       <router-link to="/home/message">消息</router-link>
        
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{ 
            path:'/home/new',     
        }
    },
   
    //生命周期  created()函数 当组件被创建出来之后回调这个函数
    // created(){  //放在这里不好要一个一个组件写一次，可以放在router来控制
    //     console.log('created'); 
    //     document.title = "首页"
    // },


    //生命周期  destoryed()函数  销毁
    destoryed(){
        // console.log('destoryed');
    },


    //生命周期  mounted()函数 当组件被创建出来之后,同时模板被挂载到DOM上时回调这个函数
    mounted(){

    },


    //生命周期  undated()函数 只要界面发生一次更新都回调这个函数
    updated(){

    },


    //生命周期  activated() 处于活跃状态
    //这两个函数，只有该组件保持了状态使用了keep-alive时，才有效的才会回调
    activated(){
        console.log(this.$route.path);
        this.$router.push(this.path);
        
    },


     //这两个函数，只有该组件保持了状态使用了keep-alive时，才有效的才会回调
    deactivated(){

    },


     //生命周期  unactivated() 处于不活跃状态
    // unactivated(){

    // },

    
    //导航离开该组件的对应路由时调用
     beforeRouteLeave(to,from,next){
        console.log(this.$route.path);
        this.path = this.$route.path;
        next()
    }
}
</script>

<style>

</style>