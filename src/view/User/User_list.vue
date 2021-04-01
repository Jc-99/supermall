<template>
  <div class="user_list">
    <div class="user_main">
      <!--历史足迹-->
      <div class="history_wrap">
        <div class="item">
          <div class="his_num">0</div>
          <div class="his_name">收藏的店铺</div>
        </div>
        <div class="item">
          <div class="his_num">{{this.$store.state.collect.length?this.$store.state.collect.length:0}}</div>
          <div class="his_name">收藏的商品</div>
        </div>
        <div class="item">
          <div class="his_num">0</div>
          <div class="his_name">关注的店铺</div>
        </div>
        <div class="item">
          <div class="his_num">0</div>
          <div class="his_name">我的足迹</div>
        </div>
      </div>
      <!--我的订单-->
      <div class="orders_wrap">
        <div class="orders_title">我的订单</div>
        <div class="orders_content">
          <div class="orders_item">
            <div class="iconfont">dd</div>
            <div class="orders_name">全部订单</div>
          </div>
          <div class="orders_item">
            <div class="iconfont">fk</div>
            <div class="orders_name">待付款</div>
          </div>
          <div class="orders_item">
            <div class="iconfont">sh</div>
            <div class="orders_name">待收货</div>
          </div>
          <div class="orders_item">
            <div class="iconfont">tk</div>
            <div class="orders_name">退款/退货</div>
          </div>
        </div>
      </div>
      <!--收货地址管理-->
      <div class="address_wrap">
        收货地址管理
      </div>
      <!--应用信息相关-->
      <div class="app_info_wrap">
        <div class="app_info_item app_info_contact">
          <span>联系客服</span>
          <span>13005686529</span>
        </div>
        <div class="app_info_item">
          意见反馈
        </div>
        <div class="app_info_item">关于我们</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "User_list"
    }
</script>

<style scoped>
  .user_list {
    position: relative;
  }

  .user_main {
    color: #666;
    position: absolute;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
  }

  .history_wrap {
    background-color: #fff;
    display: flex;
  }

  .history_wrap .item {
    flex: 1;
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
  }

  .his_num {
    color: var(--color-tint);
  }

  .orders_wrap {
    background-color: #fff;
    margin-top: 15px;
  }

  .orders_title {
    padding: 10px;
    border-bottom: 1px solid #FF8198;
  }

  .orders_content {
    display: flex;
  }

  .orders_item {
    padding: 8px 0;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .orders_content .iconfont {
    color: var(--color-tint);
    font-size: 16px;
  }

  .address_wrap {
    margin-top: 10px;
    background-color: #fff;
    padding: 5px;
  }

  .app_info_wrap {
    margin-top: 10px;
    background-color: #fff;
  }

  .app_info_item {
    padding: 5px;
    border-bottom: 1px solid #FF8198;
  }

  .app_info_contact {
  display: flex;
    justify-content: space-between;

  }
</style>