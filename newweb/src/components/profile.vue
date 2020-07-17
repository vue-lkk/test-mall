<template>
    <div>
        <H2>我是profile</H2>
        <h3>{{$route.query.name}}</h3>
        <h3>{{$route.query.age}}</h3>
        <h3>{{$route.query.height}}</h3>
    </div>
</template>
<script>
export default {
    name:"profile",
    created(){
        console.log('profile created'); 
        
    },
    //生命周期  destoryed()函数  销毁
    destoryed(){
        console.log('profile destoryed');
    }
}
</script>
<style>

</style>