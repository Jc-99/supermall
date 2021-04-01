<template>
  <div class="register">
    <div class="header">
      <img @click="backClick" src="../../assets/images/detail/bottom/left.png" alt="">
      <span>注册</span>
    </div>

    <div class="register_wrap">
      <div>账号: <input type="text" v-model="name" onkeyup="this.value=this.value.replace(/[, ]/g,'')"></div>
      <div>密码: <input type="text" v-model="password" onkeyup="this.value=this.value.replace(/[, ]/g,'')"></div>
      <div class="register_btm" @click="AddClick">
        <input type="button" value="注册">
      </div>
    </div>
  </div>
</template>


<script>
    export default {
        name: "Register",
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
            AddClick() {
                if (this.name == null) {
                    alert('账号不能为空')
                } else if (this.password == null) {
                    alert('密码不能为空')
                } else {
                    let index = this.$store.state.user.findIndex(v => v.name === this.name)
                    if (index !== -1) {
                        alert('账号已存在')
                        this.name = ''
                        this.password = ''
                    } else {
                        const user = {}
                        user.name = this.name;
                        user.password = this.password;
                        this.$store.state.user.push(user)
                        console.log(this.$store.state.user)
                        this.name = ''
                        this.password = ''
                        this.$router.push('/Login')
                    }
                }
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

  .register_btm input{
    border: 0;
    padding: 5px;
    background-color: #B7EBE7;
  }

</style>