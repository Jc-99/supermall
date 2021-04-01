<template>
  <div>
    <div class="header">
      <img @click="backClick" src="../../assets/images/detail/bottom/left.png" alt="">
      <span>商品列表</span>
    </div>

    <div class="search">
      <tabs :tabs="tabs">
        <div slot="tabs-content">
          <div class="first_tab">
            <div class="goods_item" v-for="(item,index) in search" :key="item.goods_id"
                 @click="itemClick(item.goods_id)">
              <!--        左侧图片-->
              <div class="goods_img_wrap" v-if="search[index].goods_small_logo.length>0">
                <img :src=search[index].goods_small_logo alt="">
              </div>
              <div class="goods_img_wrap" v-else>
                <img :src=imgs alt="">
              </div>

              <!--        右侧商品信息-->
              <div class="goods_info_wrap">
                <div class="goods_name">
                  {{search[index].goods_name}}
                </div>
                <div class="goods_price">
                  ￥{{search[index].goods_price}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </tabs>

    </div>
  </div>

</template>

<script>
    import {getsearch} from "../../network/home";
    import Tabs from "../../components/tabs/Tabs";

    export default {
        name: "Search",
        data() {
            return {
                tabs: [
                    {
                        id: 0,
                        value: "综合",
                        isActive: true
                    },
                    {
                        id: 1,
                        value: "销量",
                        isActive: false
                    },
                    {
                        id: 2,
                        value: "价格",
                        isActive: false
                    },
                ],
                search: [],
                imgs: 'https://ftp.bmp.ovh/imgs/2021/03/f2e2d5d76473b68f.png'
            }
        },
        components: {
            Tabs,
        },
        created() {
            this.getsearch()
        },
        methods: {
            getsearch() {
                getsearch().then(res => {
                    this.search = res.message.goods
                })
            },
            itemClick(id) {
                this.$router.push('/detail/' + id)
            },
            backClick() {
                this.$router.go(-1)
            }
        }
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

  .first_tab {
    overflow: scroll;
    height: calc(100vh - 44px - 40px);
  }

  .goods_item {
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .goods_img_wrap {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .goods_img_wrap img {
    width: 70%;
  }

  .goods_info_wrap {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .goods_name {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
</style>