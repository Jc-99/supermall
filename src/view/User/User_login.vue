<template>
  <div class="user_login">

    <div class="user_img_wrap" v-if="this.$store.state.user.length !==0">
      <img class="user_bg" src="../../assets/images/login/bingbing.jpeg" alt="">
      <div class="user_info">
        <img class="user_icon" src="../../assets/images/login/bingbing.jpeg" alt="">
        <div class="user_name">{{this.$store.state.user[0].name}}</div>
      </div>
    </div>

    <div class="user_null" v-else>
      <div class="user_btn" @click="UserClick">登录</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "User_login",
        methods: {
            UserClick() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
  .user_login {
    height: 35vh;
    background-color: #638DA0;
    overflow: hidden;
    position: relative;
  }

  .user_img_wrap {
    position: relative;
  }

  .user_bg {
    height: 50vh;
    filter: blur(5px);
  }

  .user_info {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    text-align: center;
  }

  .user_info .user_icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .user_info .user_name {
    margin-top: 10px;
    color: white;
  }

  .user_null .user_btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    border: 1px solid #FF8198;
    color: #FF8198;
    font-size: 16px;
    padding: 15px;
    border-radius: 5px;
  }


</style>