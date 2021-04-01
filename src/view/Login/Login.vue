<template>
  <div class="register">
    <div class="header">
      <img @click="backClick" src="../../assets/images/detail/bottom/left.png" alt="">
      <span>登录</span>
    </div>

    <div class="register_wrap">
      <div>账号: <input type="text" v-model="name" onkeyup="this.value=this.value.replace(/[, ]/g,'')"></div>
      <div>密码: <input type="text" v-model="password" onkeyup="this.value=this.value.replace(/[, ]/g,'')"></div>
      <div class="register_btm">
        <input type="button" @click="LogClick" value="登录">
        <input type="button" @click="RegClick" value="注册">
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                name: null,
                password: null
            }
        },
        methods: {
            backClick() {
                this.$router.go(-1)
            },
            LogClick() {
                if (this.name == null) {
                    alert('账号不能为空')
                } else if (this.password == null) {
                    alert('密码不能为空')
                } else {
                    let name = this.$store.state.user.findIndex(v => v.name === this.name)
                    let password = this.$store.state.user.findIndex(v => v.password === this.password)
                    console.log(name, password)
                    if (name !== -1 && password !== -1) {
                        alert('登录成功')
                        this.$router.push('/index')
                    } else {
                        alert('暂无该账号,清注册')
                    }
                }
            },
            RegClick() {
                this.$router.push('/register')
            }
        },

    }
</script>

<style scoped>
  .register {
    height: 100vh;
    background-color: #6693A6;
  }

  .header {
    color: #fff;
    background-color: var(--color-tint);
    height: 44px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 44px;
    position: relative;
  }

  .header img {
    position: absolute;
    left: 3%;
    top: 16%;
    width: 8%;
  }

  .register_wrap {
    padding-top: 50%;
    text-align: center;
  }

  .register_wrap input {
    margin: 10px;
  }

  .register_btm input {
    border: 0;
    padding: 5px;
    background-color: #B7EBE7;
  }


</style>