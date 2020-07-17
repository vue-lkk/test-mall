<template>
    <!-- 组件<TabBar/> -->
    <TabBar>
      <!-- 组件<TabBarItem/> -->
      <TabBarItem path="/home" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/主页1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/主页.png" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/分类1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/分类.png" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/购物车1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/购物车.png" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor='orange'>
        <img slot="item-icon" src="@/assets/img/我的1.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/我的.png" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'

export default {
    name:'MainTabBat',
    components:{
       TabBar,
       TabBarItem
    }
}
</script>