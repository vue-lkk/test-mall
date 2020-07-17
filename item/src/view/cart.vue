<template>
    <div>
        <CartInfo></CartInfo>
    </div>
</template>

<script>
//引入Cart 组件
import CartInfo from "../components/Cart"  //注意：这里是../不是./ 因为不在同一文件夹内

export default {
   components:{
    //然后在组件内部进行配置，
    //这样就可以当成标签使用 <Cart></Cart> 
    CartInfo
  },
    data(){
        return{
           cart:[]  
        }
    },
   
    methods:{
          //添加商品数量按钮
          onAdd(arg){ 
            let {index} = arg
            console.log(index)
           this.cart[index].counts+= 1
          },
          //减去商品数量按钮
          onReduce(arg){ 
            let {index} = arg
            if(this.cart[index].counts <= 0){
              return 
            }else{
            this.cart[index].counts-= 1
            }
            
          }
    }
}
</script>

<style lang="stylus">

</style>