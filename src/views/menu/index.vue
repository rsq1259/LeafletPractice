<template>
  <div class="menu">
    <div class="menu-title">
      <Title />
    </div>
    <div class="menu-content">
      <component :is="currentComponents"></component>
    </div>
  </div>
</template>

<script>
import PointForm from "@/views/form/point";
import PolylineForm from "@/views/form/polyline";
import PolygonForm from "@/views/form/polygon";
import Title from "./components/title.vue";
import List from "./components/list.vue";
export default {
  name: "Menu",
  components: {
    PointForm,
    PolylineForm,
    PolygonForm,
    List,
    Title,
  },
  data() {
    return {
      currentComponents: "PointForm",
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  &-title {
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #ece1e1;
  }
  &-content {
    height: calc(100% - 42px);
    overflow-y: auto;
  }
}
</style>
