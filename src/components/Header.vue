<template>
  <div class="header">
    <div class="title-container">
      <i class="iconfont iconxingqiu"></i>{{ title }}
    </div>
    <div class="info-container">
      <div class="nickname">你好，{{ nickname }}</div>
      <div class="avator">
        <el-image class="avator-img" :src="avator" fit="cover"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "地理信息数据编辑器",
      nickname: "pipo",
      avator:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .title-container {
    display: flex;
    padding-left: 15px;
    i {
      color: #246bfc;
      font-size: 25px;
      margin-right: 7px;
    }
    font-size: 18px;
    font-weight: 700;
  }
  .info-container {
    display: flex;
    align-items: center;
    .nickname {
      margin-right: 10px;
    }
    .avator {
      margin-right: 20px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      &-img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        ::v-deep img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
