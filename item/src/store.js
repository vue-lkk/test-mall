// 这个js是数据管理中心
import Vue from 'vue'
import Vuex from 'vuex'
// 注册Vuex
Vue.use(Vuex)

let store = new Vuex.Store({
    // state所有数据的状态          意思是：【state：状态】
    state:{  
        // 本地储存 
        cart:JSON.parse(localStorage.getItem('cart')) || []
    },
    //注意：在vuex如果对数据修改，不能直接改state
    //而是通过mutations
    mutations:{                 // 意思是：【mutations: 改变,突变】
        //添加商品的方法
        cartAdd(state,index){
            state.cart[index].counts += 1
            console.log(state.cart)
        },
        //删除商品的方法
        cartdel(state,index){
            if(state.cart[index].counts <= 0){
               return 
            }
            state.cart[index].counts -= 1
        },
        //添加到表格的方法
        addcart(state,item){
              //比较，如果在cart数组中可以找到与goods相同的数据
              let good = state.cart.find(v=>v.text==item.text)
              if(good){
                 //就数量加1
                good.counts += 1 
              console.log(good.counts)
              
              }else{
                 //否则就添加新一条数据到cart数组中，...item表示展开数据
                state.cart.push({...item, counts:1})
              }
        }
    },
    //vuex 中的getters 相当于 vue 中的computed
    getters:{
        //给购物车加上购买总数
        cartTotal :state=>{
            let sum = 0
            state.cart.forEach(v=>{
                sum += v.counts
            })
            return sum
        }
    }
})
// 只要数据有变化，就会更新数据
store.subscribe((mutations,state)=>{
    localStorage.setItem('cart',JSON.stringify(state.cart))
    console.log(state.cart)
})
// 对外暴露
export default store