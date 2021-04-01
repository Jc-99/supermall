<template>
  <div class="check-button">
    <div :class="{check:isChecked}">
      <img src="../../assets/images/cart/tick.png" alt="">
    </div>

  </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props: {
            isChecked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
  .check-button {
    display: flex;
    align-items: center;

  }

  .check-button img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>