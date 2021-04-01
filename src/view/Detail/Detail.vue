<template>
  <div>
    <div class="header">
      <img @click="backClick" src="../../assets/images/detail/bottom/left.png" alt="">
      <span>商品详情</span>
    </div>
    <div class="detail">
      <!--    轮播图-->
      <detail-swiper :swiper="detail.pics"></detail-swiper>
      <!--    价格-->
      <div class="goods_price">￥{{detail.goods_price}}</div>

      <!--    名称-->
      <div class="goods_name_row">
        <div class="goods_name">{{detail.goods_name}}</div>
        <div class="goods_collect" @click="iconshowClick">
          <div class="iconfont">
            <img v-if="isCollect" src="../../assets/images/detail/bottom/select1.png" alt="">
            <img v-else src="../../assets/images/detail/bottom/select.png" alt="">
          </div>
          <div class="collect_text">收藏</div>
        </div>
      </div>

      <!--    图文详情-->
      <div class="goods_info">
        <div class="goods_info_title">图文详情</div>
        <div class="goods_info_content">
          <div v-html=detail.goods_introduce></div>
        </div>
      </div>

      <!--    底部工具栏-->
      <div class="btm_tool">
        <div class="tool_item">
          <div class="iconfont">
            <img src="../../assets/images/detail/bottom/service.png" alt="">
          </div>
          <span>客服</span>
          <button></button>
        </div>
        <div class="tool_item">
          <div class="iconfont">
            <img src="../../assets/images/detail/bottom/Share.png" alt="">
          </div>
          <span>分享</span>
          <button></button>
        </div>
        <div class="tool_item" @click="CartClick">
          <div class="iconfont">
            <img src="../../assets/images/detail/bottom/cart_.png" alt="">
          </div>
          <span>购物车</span>
        </div>
        <div class="tool_item btn_cart" @click="CartAdd">加入购物车</div>
        <div class="tool_item btn_buy">立即购买</div>
      </div>
    </div>
  </div>

</template>

<script>
    import DetailSwiper from "./DetailSwiper";
    import {getdetail} from "../../network/home";
    import {mapActions} from 'vuex'

    export default {
        name: "Detail",
        data() {
            return {
                detail: {},
                goods_id: null,
                isCollect: false
            }
        },
        components: {
            DetailSwiper,
        },
        created() {
            this.goods_id = this.$route.params.goods_id
            getdetail(this.goods_id).then(res => {
                this.detail = res.message
                this.isCollect = this.$store.state.collect.some(v => v === this.detail.goods_id)
            })

        },

        methods: {
            ...mapActions(['addCart']),
            iconshowClick() {
                let index = this.$store.state.collect.findIndex(v => v === this.detail.goods_id)
                if (index !== -1) {
                    this.$store.state.collect.splice(index, 1)
                    console.log(this.$store.state.collect)
                    this.isCollect = false
                } else {
                    this.$store.state.collect.push(this.detail.goods_id)
                    console.log(this.$store.state.collect)
                    this.isCollect = true
                }
            },
            CartClick() {
                this.$router.push('/cart')
            },
            CartAdd() {
                const product = {}
                product.goods_id = this.detail.goods_id     //id
                product.image = this.detail.goods_small_logo ? this.detail.goods_small_logo : 'https://www.hualigs.cn/image/6062c431aaf4b.jpg'   //图片
                product.title = this.detail.goods_name      //名字
                product.price = this.detail.goods_price ? this.detail.goods_price : 0    //价格
                this.addCart(product).then(res => {
                    console.log(res)
                })
            },
            backClick() {
                this.$router.go(-1)
            }
        },
    }
</script>

<style scoped>
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
    top: 15%;
    width: 10%;
  }

  .detail {
    padding-bottom: 45px;
    overflow: scroll;
    height: calc(100vh - 49px - 44px);
  }

  .goods_price {
    padding: 8px;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-tint);
  }

  .goods_name_row {
    border-top: 2px solid #dedede;
    border-bottom: 2px solid #dedede;
    padding: 5px 0;
    display: flex;
  }

  .goods_name_row .goods_name {
    flex: 5;
    color: black;
    font-size: 16px;
    padding: 0 5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
  }

  .goods_name_row .goods_collect {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #000;
  }

  .goods_name_row .goods_collect img {
    width: 30%;
  }

  .goods_info_title {
    font-size: 16px;
    color: var(--color-tint);
    font-weight: 600;
    padding: 10px;
  }

  .goods_info_content >>> p {
    margin: 0;
    padding: 0;
  }


  .btm_tool {
    border-top: 1px solid #ccc;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    background-color: #fff;
    display: flex;
  }

  .btm_tool .tool_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position: relative;
  }

  .btm_tool .tool_item .iconfont {
    text-align: center;
  }

  .btm_tool .tool_item .iconfont img {
    width: 50%;
  }

  .btm_tool .tool_item button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .btm_tool .btn_cart {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffa500;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }

  .btm_tool .btn_buy {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eb4450;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }


</style>