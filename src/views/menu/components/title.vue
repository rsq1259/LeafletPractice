<template>
  <div class="menu-title">
    <div class="menu-title-content">
      <span class="menu-title-icon vertical-middle">
        <i class="iconfont icontable"></i>
      </span>
      <span class="menu-title-text">
        {{ title }}
      </span>
    </div>
    <div class="full-screen pointer">
      <i @click="backToList" v-if="!isList" class="iconfont iconfanhui"></i>
      <i
        @click="hideMenu(false)"
        class="iconfont iconquanping1 vertical-middle"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "MenuTitle",
  props: {
    isList: Boolean,
  },
  data() {
    return {
      title: "元素列表",
    };
  },
  watch: {
    isList: {
      immediate: true,
      handler(val) {
        console.log(val);
      },
    },
  },
  methods: {
    ...mapMutations("map", {
      hideMenu: "setIsShowMenu",
    }),
    backToList() {
      this.$emit("backToList");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .full-screen {
    width: $tool-height;
  }
}
</style>
