<template>
  <div class="file-add">
    <el-form
      ref="file-add-form"
      :model="form"
      label-width="100px"
      :rules="formRules"
    >
      <el-form-item label="文件名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入文件名称"></el-input>
      </el-form-item>
    </el-form>
    <footer class="form-footer">
      <el-button type="default" @click="cancel">取消</el-button>
      <el-button type="primary" @click="success">保存</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FileAdd",
  data() {
    let that = this;
    const nameValidatot = async (rule, value, callback) => {
      let names = (await that.$yuxdb.keys()) || [];
      if (names.includes(value)) {
        return callback(new Error("文件名称已存在"));
      } else {
        return callback();
      }
    };
    return {
      form: {
        name: "",
      },
      formRules: {
        name: [
          { required: true, message: "文件名称不能为空", trigger: "blur" },
          { validator: nameValidatot, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    success() {
      this.$refs["file-add-form"].validate(async (valid) => {
        if (!valid) return;
        await this.$yuxdb.setItem(this.form.name, [
          {
            name: "点测试",
            type: "point",
          },
          {
            name: "线测试",
            type: "polyline",
          },
          {
            name: "面测试",
            type: "polygon",
          },
        ]);
        this.$message.success("保存成功！");
        this.$emit("success");
      });
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss" scoped>
.file-add {
  width: 100%;
  height: 100%;
  .form-footer {
    text-align: right;
  }
}
</style>
