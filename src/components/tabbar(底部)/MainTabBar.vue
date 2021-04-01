<template>
  <div>
    <tab-bar>

      <tab-bar-item path="/index" active-color="red">
        <img slot="item-icon" src="../../assets/images/tabbar/home.png" alt="">
        <img slot="item-icon_active" src="../../assets/images/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="category">
        <img slot="item-icon" src="../../assets/images/tabbar/category.png" alt="">
        <img slot="item-icon_active" src="../../assets/images/tabbar/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="cart">
        <img slot="item-icon" src="../../assets/images/tabbar/shopcart.png" alt="">
        <img slot="item-icon_active" src="../../assets/images/tabbar/shopcart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="user">
        <img slot="item-icon" src="../../assets/images/tabbar/profile.png" alt="">
        <img slot="item-icon_active" src="../../assets/images/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>

  </div>
</template>

<script>
    import TabBar from "./TabBar";
    import TabBarItem from "./TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem,
        }

    }
</script>

<style scoped>

</style>