<template>
  <div class="menu">
    <div class="menu-title">
      <Title :isList="currentComponents == 'List'" @backToList="backToList" />
    </div>
    <div class="menu-content">
      <component
        :menuData="menuData"
        @chooseItem="chooseItem"
        @success="success"
        :is="currentComponents"
      ></component>
    </div>
  </div>
</template>

<script>
import PointForm from "@/views/form/point";
import PolylineForm from "@/views/form/polyline";
import PolygonForm from "@/views/form/polygon";
import Title from "./components/title.vue";
import List from "./components/list.vue";
import { mapState } from "vuex";
import { graphType } from "@/js/utils/dict";
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
      currentComponents: "List",
      menuData: null,
      eleList: [], // 当前文件元素的列表
    };
  },
  watch: {
    currentFileName(val) {
      console.log("currentFileName", val);
      this.backToList();
    },
  },
  computed: mapState("map", ["currentFileName"]),
  created() {},
  methods: {
    success() {},
    async chooseItem(index) {
      console.log(index);
      let type = this.eleList[index].type || "";
      if (!type) {
        this.$message.error("当前数据不可用");
        return;
      }
      this.menuData = this.eleList[index].formData || {};
      this.currentComponents = graphType[type].component;
    },
    async backToList() {
      this.eleList = await this.$yuxdb.getItem(this.currentFileName);
      this.menuData = Array.isArray(this.eleList) ? this.eleList : [];
      this.currentComponents = "List";
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  /* 减去1px边框 */
  height: calc(100% - 1px);
  &-title {
    height: $tool-height;
    line-height: $tool-height;
    border-bottom: $border;
    padding: 0 10px;
  }
  &-content {
    height: calc(100% - #{$tool-height});
    overflow-y: auto;
  }
}
</style>
