<template>
  <div>

    <div class="cart_title">购物车({{cartLength}})</div>
    <div class="cart" :class="{isActive:this.$store.state.cartList.length>0}">
      <!-- 无商品 -->
      <div class="cart_null" v-if="this.$store.state.cartList.length==0">
        <img src="../../assets/images/cart/cartlist.jpg" alt="">
      </div>
      <!--    商品列表展示-->
      <div v-else>
        <cart-list v-for="(item,index) in cartList" :key="index" :cartList="item"/>
      </div>

    </div>
  </div>
</template>

<script>
    import CartList from "./CartList";
    import {mapGetters} from "vuex";

    export default {
        name: "Cart",
        components: {
            CartList,
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'cartList'
            ]),
            cartLength() {
                return this.$store.state.cartList.length
            }
        }
    }
</script>

<style scoped>
  .cart {
    height: calc(100vh - 44px - 49px - 40px);
    position: relative;
    overflow: scroll;
  }

  .isActive{
    height: calc(100vh - 44px - 49px - 40px - 46px);
  }

  .cart_title {
    text-align: center;
    padding: 10px;
    font-size: 16px;
    color: var(--color-tint);
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
  }

  .cart_null {
    height: 100%;
  }

  .cart_null img {
    width: 100%;
    height: 100%;
  }

</style>