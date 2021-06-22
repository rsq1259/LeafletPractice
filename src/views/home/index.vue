<template>
  <div class="index">
    <header class="header">
      <Header />
    </header>
    <div class="content">
      <div class="menu-wraper">
        <router-view></router-view>
      </div>
      <div class="map-wraper">
        <Map />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Map from "../map";
export default {
  name: "Index",
  components: {
    Header,
    Map,
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
  .content {
    display: flex;
    width: 100%;
    height: calc(100vh - 61px);
    .menu-wraper {
      width: 20vw;
      min-width: 150px;
      height: 100%;
      border-right: 1px solid #ece1e1;
    }
    .map-wraper {
      height: 100%;
      flex-grow: 1;
    }
  }
}
</style>
