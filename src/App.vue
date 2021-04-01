<template>
  <div id="app">
    <header v-if="this.$route.meta.showTab">商城</header>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="this.$route.meta.showTab"/>
  </div>
</template>

<script>

    import MainTabBar from "./components/tabbar(底部)/MainTabBar";


    export default {
        name: 'App',
        components: {

            MainTabBar,
        }
    }
</script>

<style>
  @import "assets/stylesheets/base.css";

  #app header {
    color: #fff;
    background-color: var(--color-tint);
    height: 44px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 44px;
  }
</style>
