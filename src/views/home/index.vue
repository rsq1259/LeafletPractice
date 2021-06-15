<template>
  <div class="index">
    <header class="header">
      <Header />
    </header>
    <span>首页</span>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Index",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #ece1e1;
    // position: absolute;
  }
}
</style>
