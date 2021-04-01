<template>
  <div class="user">
    <User_login></User_login>
    <User_list></User_list>
  </div>
</template>

<script>
    import User_login from "./User_login";
    import User_list from "./User_list";

    export default {
        name: "Order",
        components: {
            User_login,
            User_list,
        }
    }
</script>

<style scoped>
  .user {
    height: calc(100vh - 49px - 44px);
    position: relative;
    overflow: scroll;
    background-color: #edece8;
  }

</style>