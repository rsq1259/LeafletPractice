<template>
  <div class="index">
    <header class="header">
      <Header />
    </header>
    <div class="content">
      <div v-show="isShowMenu" class="menu-wraper">
        <router-view></router-view>
      </div>
      <div class="map-wraper">
        <Map />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
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
  computed: mapState("map", ["isShowMenu"]),
  watch: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  position: relative;
  .header {
    width: 100%;
    height: $title-height;
    background-color: #fff;
    border-bottom: $border;
    // position: absolute;
  }
  .content {
    display: flex;
    width: 100%;
    height: calc(100vh - #{$title-height} - 1px);
    .menu-wraper {
      width: 20vw;
      min-width: 150px;
      height: 100%;
      border-right: $border;
    }
    .map-wraper {
      height: 100%;
      flex-grow: 1;
    }
  }
}
</style>
