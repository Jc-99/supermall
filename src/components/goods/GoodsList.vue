<template>
  <div class="goods">
    <div class="goods_group" v-for="item in floordata" :key="item.floor_title.name">
      <div class="goods_title">
        <img :src=item.floor_title.image_src alt="">
      </div>
      <div class="goods_list">
        <div class="goods_list_content" v-for="item2 in item.product_list" :key="item2.name">
          <img :src=item2.image_src alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "GoodList",
    components: {},
    props: {
      floordata: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .goods .goods_group .goods_title {
    padding: 10px 0 0 0;
  }

  .goods .goods_group .goods_title img {
    width: 100%;
  }

  .goods_list_content {
    float: left;
    width: 33%;
  }

  .goods_list_content img {
    width: 100%;
    height: 100%;
  }

  .goods_list_content:nth-last-child(-n+4) {
    height: 27.5vw;
    border-left: 1px solid #fff;
  }

  .goods_list_content:nth-last-child(2) {
    border-bottom: 1px solid #fff;
  }

  .goods_list_content:nth-last-child(3) {
    border-bottom: 1px solid #fff;
  }
</style>