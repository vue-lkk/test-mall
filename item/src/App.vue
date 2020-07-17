<template>
  <div>
   <el-container>
     <el-header>
      <!-- mode="horizontal" 水平的 -->
       <el-menu mode="horizontal">   
         <el-menu-item index="1">
           <img style="width:50px" src="@/assets/image/19.jpg" alt="">
         </el-menu-item>
         <el-menu-item index="2">
           <!-- 页面跳转 相对于<a>标签 -->
             <i class="el-icon-s-home"></i>
            <router-link to="/">首页</router-link>
         </el-menu-item>
         <el-menu-item index="3">
           <!-- 页面跳转 相对于<a>标签 -->
            <router-link to="/">淘宝</router-link>
         </el-menu-item>
         <el-menu-item index="4">
           <!-- 页面跳转 相对于<a>标签 -->
            <router-link to="/">京东</router-link>
         </el-menu-item>
         <el-menu-item index="5">
           <!-- 页面跳转 相对于<a>标签 -->
             <i class="el-icon-s-promotion"></i>
            <router-link to="/">导航</router-link>
         </el-menu-item>
         <el-menu-item index="6" style="float:right;">
           <!-- 页面跳转 相对于<a>标签 -->
           <router-link to="/cart">
              <i class="el-icon-shopping-cart-2"></i>
              <el-badge :value="cartTotal" style="top:-12px;right:13px;"></el-badge> 
           </router-link>
         </el-menu-item>
         <el-menu-item index="7" style="float:right;">
           <!-- 页面跳转 相对于<a>标签 -->
             <i class="el-icon-s-promotion"></i>
            <router-link to="/">收藏</router-link>
         </el-menu-item>
       </el-menu>
     </el-header>
     <el-main>
       <!-- 切换页面的内容渲染 -->
       <router-view></router-view>
     </el-main>
   </el-container>
    <!-- <ul>
      <li v-for="(good, index) in goods" :key="index">
        {{index}}:{{good.text}} {{good.price}}
        <el-button @click="addCart(index)">添加购物车</el-button>
      </li> -->
      <!-- <li v-for="(value,name,index) in object" :key="value">
        {{index}}:{{name}}:{{value}}
      </li> -->
    <!-- </ul> --> 



  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange($event)">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>

  </div>
 </template>


<script>
//mapState 把vuex的数据映射到本地
//vuex的mapGetters方法来获取vuex的cartTotal对象中属性
import {mapGetters} from 'vuex'

const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
 
  data(){
    return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
    }
    },
    
    computed:{
      ...mapGetters({
        cartTotal:'cartTotal'
      })
    },

    methods:{
      handleCheckAllChange(va) {
        console.log(va)
        this.checkedCities = va ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
           console.log(value)
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
  }
}
</script>

<style>
html,body{
  margin: 0px;
  padding: 0px;
}

.image{
  display: inline-block;
  width: 100%;
  height: 100%;
  background: red;
}


</style>
