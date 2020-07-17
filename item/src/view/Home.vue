<template>
 <div>
    <el-row>
     <el-col :span=6 v-for="(item,index) in goods" :key="index">
       <el-card>
         <img  :src="'@/assets/image/' + item.img" class="image" alt="">
         <div style="padding:14px">
           <span>{{item.text}}</span>
           <el-button type="text" class="button">
              <i class="el-icon-circle-plus" @click.prevent="AddCart($event,item)"></i>
           </el-button>
         </div>
       </el-card>
     </el-col>
   </el-row>
 <!-- 新建一个添加按钮 -->
   <div class="ball-wrap">
     <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
     >
    <div class="ball" v-show="ball.show">
      <div class="inner">
          <div class="el-icon-circle-plus"></div>
      </div>
    </div>
     </transition>
   </div>
    
</div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return{
            goods:[],
            ball:{
              show:false,
              el:null
            }
        }
    },
     //数据获取
    async created(){  //生命周期
            let ret = await axios.get('/api/goods')
            this.goods = ret.data.data
            console.log(this.goods)
          },


    methods:{
        AddCart($event,item){
          //把点击到的 $event.target 目标节点先储存起来
            this.ball.el = $event.target
            this.ball.show = true
            //调用store中的 'addcart' 方法来更改数据
            //item是要传入要修改的数据
            this.$store.commit('addcart',item)
            
        },
        beforeEnter(el){   //el是执行动画当前的按钮的dom节点
          // 小球移过来
          let dom = this.ball.el
          //获取到当前按钮的左边上边位置
          let rect = dom.getBoundingClientRect()
          let x = window.innerWidth - rect.left -95
          let y = rect.top -20
          el.style.display=''
          el.style.transform = `translate3d(0,${y}px,0)`
          let inner = el.querySelector('.inner')
          inner.style.transform = `translate3d(-${x}px,0,0)`
        },
        enter(el,done){
          //移动回去
         // let dom = this.ball.el
          //重绘
          this._offset = document.body.offsetHeight

           el.style.transform = `translate3d(0,0,0)`
           let inner = el.querySelector('.inner')
          inner.style.transform = `translate3d(0,0,0)`
           el.addEventListener('transitionend',done)
        },
        afterEnter(el){
          //清理
            this.ball.show = false
            el.style.display = 'none'
        }
    }
}
</script>

<style>
  .ball-wrap
    .ball{
      position: fixed;
      right: 62px;
      top: 20px;
      color: red;
      transition: all 1s cubic-bezier(0.95, 0.05, 0.795, 0.035);
    }
    .inner{
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
    .image{
      width: 260px;
      height: 200px;
    }
</style>