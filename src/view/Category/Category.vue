<template>
  <div class="goods">
    <div class="container">
      <!--左侧菜单-->
      <div class="left_menu">
        <div class="menu_item" v-for="(item,index) in leftMenuList" :key="index"
             :class="{active:currentIndex == index}" @click="GoodsClick(index)">
          {{item}}
        </div>
      </div>
      <!--      右侧商品内容-->
      <div class="right_content">
        <div class="right_group" v-for="(item,index) in rightContent" :key="index">
          <div class="right_title">
            / {{item.cat_name}} /
          </div>
          <div class="right_list">
            <div class="right_goods" v-for="item2 in item.children" :key="item2.cat_id"
                 @click="itemClick(item2.cat_id)">
              <img :src=item2.cat_icon alt="">
              <div class="right_name">
                {{item2.cat_name}}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {getGoodsMultidata} from "../../network/home";

  export default {
    name: "Goods",
    data() {
      return {
        goods: [],
        leftMenuList: [],
        rightContent: [],
        currentIndex: 0,
        scrollTop: 0
      }
    },
    components: {},
    created() {
      this.getGoodsMultidata()
    },
    methods: {
      getGoodsMultidata() {
        getGoodsMultidata().then(res => {
          this.goods = res.message
          this.leftMenuList = this.goods.map(v => v.cat_name)
          this.rightContent = this.goods[0].children
        })
      },
      GoodsClick(index) {
        this.currentIndex = index
        this.rightContent = this.goods[index].children
      },
      itemClick(id) {
        this.$router.push('/search?cid=' + id)
      },

    }
  }
</script>

<style scoped>
  .goods {
    height: calc(100vh - 49px - 44px);
    position: relative;
  }

  .container {
    display: flex;
    height: calc(100vh - 49px - 44px);
  }

  .active {
    border-left: 3px solid currentColor;
  }

  .left_menu {
    overflow: scroll;
    flex: 2;
  }

  .left_menu .menu_item {
    width: 70px;
    padding: 10px 0;
    text-align: center;
  }

  .right_content {
    overflow: scroll;
    flex: 6;
  }

  .right_title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .right_list {
    display: flex;
    flex-wrap: wrap;
  }

  .right_goods {
    width: 33.33%;
    text-align: center;
  }

  .right_list img {
    width: 50px;
    height: 50px;
  }


</style>