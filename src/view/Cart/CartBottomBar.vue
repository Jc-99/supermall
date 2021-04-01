<template>
  <div class="footer_tool">
    <div class="all_chk_wrap">
      <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total_price_wrap">
      <div class="total_price">
        合计 <span class="total_price_text">{{totalPrice}}</span>
      </div>
      <div>包含运费</div>
    </div>
    <div class="order_pay_wrap" @click="calcClick">
      结算({{totalNum}})
    </div>
  </div>
</template>

<script>
    import CheckButton from "../../components/CheckButton/CheckButton";
    import {mapGetters} from 'vuex'

    export default {
        name: "CartBottomBar",
        components: {
            CheckButton,
        },
        computed: {
            ...mapGetters(['cartList']),
            totalPrice() {
                return '￥' + this.$store.state.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                }, 0).toFixed(2)
            },
            totalNum() {
                return this.cartList.filter(item => item.checked).length
            },
            isSelectAll() {
                if (this.cartList.length === 0) return false
                return !this.cartList.find(item => !item.checked)
            }
        },
        methods: {
            checkClick() {
                if (this.isSelectAll) {
                    this.cartList.forEach(item => item.checked = false)
                } else {
                    this.cartList.forEach(item => item.checked = true)
                }
            },
            calcClick() {
                if (!this.isSelectAll) {
                    alert('请选择购买的商品')
                }
            }
        }
    }
</script>

<style scoped>
  .footer_tool {
    position: fixed;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: #fff;
    display: flex;
    border-top: 1px solid #ccc;
  }

  .all_chk_wrap {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .all_chk_wrap span {
    padding-left: 5px;
  }

  .total_price_wrap {
    flex: 4;
    padding-right: 8px;
    text-align: right;
  }

  .total_price_text {
    color: var(--color-tint);
    font-size: 16px;
    font-weight: 600;
  }

  .order_pay_wrap {
    flex: 3;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>