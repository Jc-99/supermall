<template>
  <!--  搜索商品search头部-->
  <div>
    <div class="tabs_title">
      <div v-for="(item,index) in tabs" :key="item.id" class="tabs_item"
           @click="TabsClick(index)" :class="{isactive:currentIndex==index}">
        {{item.value}}
      </div>
    </div>
    <div class="tabs_content">
      <slot name="tabs-content"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            tabs: {
                type: Array,
                default() {
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            TabsClick(index) {
                this.currentIndex = index
            }
        }
    }
</script>

<style scoped>
  .tabs_title {
    display: flex;
  }

  .tabs_item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 10px 0;
  }

  .isactive {
    color: var(--color-tint);
    border-bottom: 2px solid currentColor;
  }
</style>