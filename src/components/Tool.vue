<template>
  <div class="tool">
    <div
      v-show="!isShowMenu"
      @click="showMenu(true)"
      class="toggle-btn pointer"
    >
      <i class="iconfont iconcancel-screen"></i>
    </div>
    <div class="tool-group operate-file">
      <span @click="fileOperate('addFile')" class="new-file pointer">
        <i class="iconfont iconfile"></i>
      </span>
      <span @click="fileOperate('fileList')" class="open-file pointer">
        <i class="iconfont iconwenjianjia"></i>
      </span>
      <span @click="fileOperate('saveFile')" class="save-file pointer">
        <i class="iconfont iconbaocun"></i>
      </span>
    </div>
    <div class="tool-group operate-draw">
      <span @click="triggerEventMap('addPoint')" class="add-point pointer">
        <i class="iconfont iconicon-test"></i>
      </span>
      <span
        @click="triggerEventMap('addPolyline')"
        class="add-polyline pointer"
      >
        <i class="iconfont iconxianduan"></i>
      </span>
      <span @click="triggerEventMap('addPolygon')" class="add-polygon pointer">
        <i class="iconfont iconmutp"></i>
      </span>
    </div>
    <div class="tool-group operate-change">
      <span @click="triggerEventMap('cancel')" class="point-default pointer">
        <i class="iconfont iconshubiaozhizhen"></i>
      </span>
      <span @click="triggerEventMap('choose')" class="point-choose pointer">
        <i class="iconfont iconjuxingxuanzefanwei"></i>
      </span>
      <span @click="triggerEventMap('move')" class="point-move pointer">
        <i class="iconfont iconyidong"></i>
      </span>
      <span @click="triggerEventMap('addLine')" class="point-add-line pointer">
        <i class="iconfont iconxianduan"></i>
      </span>
      <span
        @click="triggerEventMap('deleteLine')"
        class="poit-delete-line pointer"
      >
        <i class="iconfont iconxianduan"></i>
      </span>
      <span
        @click="triggerEventMap('deleteEntry')"
        class="point-delete pointer"
      >
        <i class="iconfont iconlajitong"></i>
      </span>
    </div>
    <div class="lock-group">
      <i
        @click="triggerEventMap('lock')"
        class="iconfont iconsuo1 lock pointer"
      ></i>
    </div>
    <el-dialog
      :visible.sync="isShowDialog"
      :append-to-body="true"
      :modal-append-to-body="true"
      :close-on-click-modal="false"
      :title="dialogTiltle"
      :modal="true"
      v-if="isShowDialog"
      width="600px"
    >
      <component
        v-if="isShowDialog"
        @success="isShowDialog = false"
        @cancel="isShowDialog = false"
        :is="fileComponemts"
      ></component>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import FileAdd from "@/components/FileAdd";
import FileList from "@/components/FileList";
export default {
  name: "Tool",
  components: {
    FileAdd,
    FileList,
  },
  data() {
    return {
      isShowDialog: false,
      dialogTiltle: "",
      fileComponemts: "",
    };
  },
  computed: mapState("map", ["isShowMenu"]),
  watch: {
    isShowDialog(val) {
      if (!val) {
        this.dialogTiltle = "";
      }
    },
  },
  created() {},
  methods: {
    ...mapMutations("map", {
      showMenu: "setIsShowMenu",
    }),
    fileOperate(evt) {
      console.log("evt", evt);
      switch (evt) {
        case "addFile":
          this.dialogTiltle = "新建文件";
          this.fileComponemts = "FileAdd";
          this.isShowDialog = true;
          break;
        case "fileList":
          this.dialogTiltle = "文件列表";
          this.fileComponemts = "FileList";
          this.isShowDialog = true;
          break;
        case "saveFile":
          // TODO 保存事件trigger
          break;
        default:
          break;
      }
    },
    triggerEventMap(evt) {
      this.$emit("operate", evt);
    },
  },
};
</script>

<style lang="scss" scoped>
$margin: calc((#{$tool-height} - 20px) / 2);
.tool {
  display: flex;
  & > div {
    height: $tool-height;
    line-height: $tool-height;
  }
  .iconfont {
    font-size: 20px;
  }
  .toggle-btn {
    flex-basis: $tool-height;
    background: #fff;
    border-right: $border;
  }
  span,
  .tool-group {
    margin: 0 $margin;
  }

  .lock-group {
    flex-grow: 1;
    .lock {
      float: right;
      margin-right: $margin;
    }
  }
}
</style>
