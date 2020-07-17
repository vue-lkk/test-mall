<template>
    <div>
        Main
        <h1>heelo{{title}}</h1>
    <ul>
      <li v-for="(good,index) in goods" :key="index">
      {{index}} {{good.text}} |￥{{good.price}}
      </li>
    </ul>
    </div>
</template>

<script>
// import axios from '@/axios'
export default {
    // name:'Main',

    // async created(){
    //     try{
    //         let rs = await axios({
    //             url:'/api/items'
    //         });
    //         console.log(rs);
    //     }catch(e){

    //     }
    // }

    data(){
    return{
      title:'函数',
      goods:[
        {text:"vue.js",price:100},
        {text:"node.js",price:800},
        {text:"vuex.js",price:120}
        ]
    }
  }
}
</script>