<template>
    <div>
      <table style="padding:10px" class="tab1">
        <tr>
          <td>商品</td>
          <td>商品名称</td>
          <td>单价</td>
          <td>总价</td>
          <td>数量</td>
        </tr>
        <tr v-for="(carts, index) in cart" :key="index">
          <td><img style="width:80px" :src="carts.img" alt=""></td>
          <td>{{carts.text}}</td>
          <td>{{carts.price}}</td>
          <td>{{carts.price * carts.counts}}</td>
          <td>x{{carts.counts}}</td>
        </tr>
      </table>
        <h2 style="margin-left:135px;">购物车</h2>

      <table border="2"  class="tab2" >
        <tr>
          <td>商品</td>
          <td>单价</td>
          <td>价格</td>
          <td>总量</td>
          <td>操作</td>
        </tr>
        <tr v-for="(carts, index) in cart" :key="index">
          <td>{{carts.text}}</td>
          <td>{{carts.price}}</td>
          <td>{{carts.price * carts.counts}}</td>
          <td>{{carts.counts}}</td>
          <td>
              <button @click="reduce(index)">-</button>
              <button @click="add(index)">+</button>
          </td>
        </tr>
        <p>
          总价{{total}}元
        </p>
    </table>
  </div>
</template>

<script>
//mapState 把vuex的数据映射到本地
//vuex的mapState方法来获取vuex的state对象中属性
import {mapState} from 'vuex'
export default {
  
    //computed是计算属性：只要是页面中的某些变量要通过
    //别的变量计算而来就可以通过computed
    computed:{
      // 拓展运算符： 【...】
      ...mapState({
        cart:state=>state.cart
        
      }),
      //总价计算
        total(){
          //reduce((sum,v)方法累加
          return this.cart.reduce((sum,v)=>{
            //每一行（数据的价格） * （每一行数据的数量）
            return sum + v.price * v.counts
            //默认值为0
          },0)
        }
    },
    methods:{
        add(i){
            //$emit()通知父组件要更改的数据,"add"是事件名,
            //index:i 是要更改那一条数据
            //this.$emit('add',{indedx:i})
            this.$store.commit('cartAdd',i)
        },
         reduce(i){
            //$emit()通知父组件要更改的数据,"add"是事件名,
            //index:i 是要更改那一条数据
            //this.$emit('reduce',{index:i})
            this.$store.commit('cartdel',i)
        }
    }
}
</script>

<style>
h2{
  color:red;
}

.tab1{
  background: rgb(235, 232, 232);
  border: 2px solid burlywood;
  width: 1200px;
  margin: 10px auto;
}
.tab1 tr{
   width: 100%;
   margin: 10px auto;
   text-align: center;
}
.tab1 td{
  width: 210px;
  margin:10px ;
}
.tab2{
  margin: 10px auto;
}
.tab2 tr{
   width: 100%;
   margin: 10px auto;
   text-align: center;
}
.tab2 td{
  width: 210px;
  margin:10px ;
}
</style>