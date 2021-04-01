<template>
  <div>

    <div class="cart_content">
      <!--商品内容-->
      <div class="cart_list">
        <div class="cart_item">
          <check-button :is-checked="cartList.checked" @click.native="checkClick"></check-button>
          <div class="cart_img">
            <img :src=cartList.image alt="">
          </div>
          <div class="cart_wrap">
            <div class="goods_name">{{cartList.title}}</div>
            <div class="goods_price_wrap">
              <div class="goods_price">￥{{cartList.price}}</div>
              <div class="cart_num_tool">
                <div class="num_edit" @click="edit">-</div>
                <div class="goods_num">{{cartList.count}}</div>
                <div class="num_edit" @click="add">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <cart-bottom-bar/>

  </div>
</template>

<script>
    import CartBottomBar from "./CartBottomBar";
    import CheckButton from "../../components/CheckButton/CheckButton";

    export default {
        name: "CartList",
        props: {
            cartList: {
                type: Object,
                default() {
                }
            }
        },
        components: {
            CheckButton,
            CartBottomBar,
        },
        methods: {
            checkClick() {
                this.cartList.checked = !this.cartList.checked
            },
            add() {
                this.cartList.count++

            },
            edit() {
                if (this.cartList.count !== 0) {
                    this.cartList.count--
                }
            }
        },
    }
</script>

<style scoped>

  .cart_item {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .cart_img {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart_img img {
    width: 80%;
  }

  .cart_wrap {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .cart_wrap .goods_name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #666;
  }

  .goods_price_wrap {
    display: flex;
    justify-content: space-between;
  }

  .goods_price {
    color: var(--color-tint);
    font-size: 14px;
  }

  .cart_num_tool {
    display: flex;
  }

  .num_edit {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
  }

  .goods_num {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>