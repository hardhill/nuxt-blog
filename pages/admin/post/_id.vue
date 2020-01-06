<template>
  <div class="page-wrap">
    <el-breadcrumb class="mb" separator="|">
      <el-breadcrumb-item to="/admin/list">Пост</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h2>Авторизация</h2>
      <el-form-item label="Текст в формате md или html" prop="text">
        <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="10"></el-input>
      </el-form-item>
      <div class="mb">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ post.date }}</span>
        </small>
        <small style="margin-left:3rem;">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ post.view }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="loading">Обновить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  validate({ params }) {
    return Boolean(params.id);
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`
    };
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data: () => {
    return {
      loading: false,
      controls: {
        text: ""
      },
      rules: {
        text: [
          {
            required: true,
            message: "Текст не должен быть пустым",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            text: this.controls.text,
            id: this.post._id
          };
          try {
            await this.$store.dispatch("post/update", formData);
            this.$message.success("Пост обновлен");
            this.loading = false;
          } catch (e) {}
          this.loading = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
</style>