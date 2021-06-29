<template>
  <div class="file-list">
    <div
      @click="chooseFile(item)"
      class="list-item"
      v-for="item in fileList"
      :key="item"
    >
      <div class="item-name">
        {{ item }}
      </div>
      <div @click.stop="del(item)" class="item-operate pointer">
        <i class="iconfont iconlajitong"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "FileList",
  data() {
    return {
      fileList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    ...mapMutations("map", {
      setCurrentFileName: "setCurrentFileName",
    }),
    async getList() {
      this.fileList = (await this.$yuxdb.keys()) || [];
    },
    chooseFile(name) {
      this.setCurrentFileName(name);
      this.$emit("success");
    },
    del(name) {
      this.$confirm("确定要删除该数据吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$yuxdb
            .removeItem(name)
            .then(() => {
              this.$message.success("删除成功！");
              this.getList();
            })
            .catch((err) => {
              console.error(err);
              this.$message.error("删除失败！");
            });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.file-list {
  width: 100%;
  height: 100%;
  .list-item {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 0 10px;
    border-bottom: $border;
    &:hover {
      background-color: #00000017;
    }
    .item-operate {
      color: $danger-color;
    }
  }
}
</style>
