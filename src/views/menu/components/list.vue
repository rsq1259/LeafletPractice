<template>
  <div class="menu-list">
    <div
      class="list-container"
      v-if="graphType && menuData && menuData.length > 0"
    >
      <div
        @click="chooseItem(index)"
        class="list-item"
        v-for="(item, index) in menuData"
        :key="item.name"
      >
        <div class="item-content">
          <span class="item-icon">
            <i :class="graphType[item.type].icon"></i>
          </span>
          <span>
            {{ item.name }}
          </span>
        </div>
        <div class="item-operate">
          <i @click.stop="edit(index)" class="iconfont iconbianji pointer"></i>
          <i @click.stop="del(index)" class="iconfont iconlajitong pointer"></i>
        </div>
      </div>
    </div>
    <div class="tips" v-else>点击右侧添加数据</div>
  </div>
</template>

<script>
import { graphType } from "@/js/utils/dict";
export default {
  name: "MenuList",
  props: {
    menuData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      graphType,
    };
  },
  watch: {
    menuData: {
      immediate: true,
      deep: true,
      handler: (val) => {
        console.log("menuData", val);
      },
    },
  },
  methods: {
    chooseItem(index) {
      this.$emit("chooseItem", index);
    },
    edit(index) {
      console.log(index);
    },
    del(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
$padding: 10px;
.menu-list {
  height: 100%;
  .list-container {
    height: calc(100% - #{2 * $padding});
    padding: $padding;
    overflow-y: auto;
    .list-item {
      display: flex;
      justify-content: space-between;
      height: 40px;
      line-height: 40px;
      border-bottom: $border;
      .item-operate {
        flex-basis: 50px;
        display: flex;
        justify-content: space-around;
        i.iconlajitong {
          color: $danger-color;
        }
      }
    }
  }
  .tips {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: $tip-color;
    height: 100%;
  }
}
</style>
