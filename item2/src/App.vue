<template>
  <el-container>
     <el-aside width="200px">
       <el-row class="tac">
         <el-col :span = "24">
            <!-- $route.name 跳转到哪个页面相应的导航选高亮 （动态)-->
           <el-menu
           :default-active ="$route.name"
           class="el-menu-vertical-demo"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
           <el-menu-item index="Main">
             <i class="el-icon-menu"></i>
             <span slot="title"></span>
              <!-- 页面跳转 -->
             <router-link active-class="active" tag="span" slot="title" :to="{name:'Main'}">首页</router-link> 
           </el-menu-item>
           <el-menu-item index="User" >
             <i class="el-icon-setting"></i>   
             <span slot="title"></span>
               <!-- 页面跳转 -->
             <router-link active-class="active" tag="span" slot="title" :to="{name:'User'}">用户管理</router-link>
           </el-menu-item>
           </el-menu>
         </el-col>
       </el-row>
     </el-aside>
     <el-main  style="margin:0px;padding:0px;">
       <template>
         <el-header style="margin:0px;padding:0px;">
           <el-menu mode="horizontal" >
             <el-menu-item index="1">1111</el-menu-item>
           </el-menu>
          </el-header>
        </template>
       <router-view></router-view>
     </el-main>
  </el-container>
</template>
<script>
export default {
  name:'App'
}
</script>
<style>
html,body,.el-container{
  margin: 0px;
  width: 100vw;
  height: 100vw;
}
.el-aside{
  background-color:#d3dce6;
  color: #333;
  text-align:center;
  line-height: 200px;
}
.tac{
  height: 100vw;
}
.el-main{
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
