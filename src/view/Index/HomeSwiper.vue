<template>
  <swiper ref="swiper" v-if="swiper.length">
    <swiper-item v-for="(item, index) in swiper" :key="index">
      <a :href="item.link">
        <img :src="item.image_src" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

    import {Swiper, SwiperItem} from '../../components/swiper'

    export default {
        name: "HomeSwiper",
        props: {
            swiper: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                isLoad: false
            }
        },
        components: {
            Swiper,
            SwiperItem
        },
        methods: {
            imageLoad() {
                if (!this.isLoad) {
                    this.$emit('swiperImageLoad')
                    this.isLoad = true
                }

            }
        },
    }
</script>

<style scoped>

</style>