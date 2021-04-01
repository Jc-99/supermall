<template>
  <div class="cat-item">
    <div class="cat-item_img" v-for="(item,index) in catitems" :key="index">
      <div @click="itemClick">
        <img :src="item.image_src" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Catitems",
    props: {
      catitems: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick() {
        this.$router.push('/category')
      }
    }
  }
</script>

<style scoped>
  .cat-item {
    display: flex;
  }

  .cat-item_img {
    flex: 1;
  }

  .cat-item_img img {
    width: 100%;
  }
</style>