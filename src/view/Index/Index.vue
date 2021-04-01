<template>
  <div class="index">

    <!--轮播图-->
    <home-swiper :swiper="swiper"></home-swiper>
    <!--推荐-->
    <cat-item :catitems="catitems"></cat-item>
    <!--商品-->
    <goods-list :floordata="floordata"></goods-list>
  </div>
</template>

<script>
  import CatItem from "../../components/catitems/CatItem";
  import GoodsList from "../../components/goods/GoodsList";
  import HomeSwiper from "./HomeSwiper";

  import {getFloordataMultidata, getCatitemsMultidata, swiperdata} from "../../network/home";


  export default {
    name: "Index",
    components: {
      HomeSwiper,
      CatItem,
      GoodsList,
    },
    data() {
      return {
        floordata: [],
        catitems: [],
        swiper: [],
        currentType: 0,
      }
    },
    created() {
      this.getFloordataMultidata()
      this.getCatitemsMultidata()
      this.swiperdata()
    },
    methods: {
      //网络请求
      swiperdata() {
        swiperdata().then(res => {
          this.swiper = res.message
        })
      },
      getCatitemsMultidata() {
        getCatitemsMultidata().then(res => {
          this.catitems = res.message
        })
      },
      getFloordataMultidata() {
        getFloordataMultidata().then(res => {
          this.floordata = res.message
        })
      },
    }
  }
</script>

<style scoped>
  .index {
    height: calc(100vh - 49px - 44px);
    position: relative;
    overflow: scroll;
  }



</style>