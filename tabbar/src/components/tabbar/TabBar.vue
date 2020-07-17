<template>
    <div id="tab-bar">
      <!-- 这里的插槽让组件<TabBarItem/>来替换 -->
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'

}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f8f8f8;

  position: fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0px -2px 2px rgba(225, 225, 225, 0.6);
}

</style>
