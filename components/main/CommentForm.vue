<template>
  <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
    <h2>Ваш комментарий</h2>
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name"></el-input>
    </el-form-item>
    <el-form-item label="Текст комментария" prop="text">
      <el-input type="textarea" v-model="controls.text" resize="none" :rows="2"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit" round :loading="loading">Добавить комментарий</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: () => {
    return {
      loading: false,
      controls: {
        name: "",
        text: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Введите имя",
            trigger: "blur"
          },
          {
            min: 1,
            max: 20,
            message: "Имя не должно превышать 20 знаков",
            trigger: "change"
          }
        ],
        text: [
          {
            required: true,
            message: "Введите Ваш комментарий",
            trigger: "blur"
          },
          {
            max: 255,
            message: "Комментарий не должен превышать 255 символов",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          var formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: ""
          };
          try {
            setTimeout(() => {
              //для связывания с родительским компонентом
              this.$emit("created");
              //для показа сообщения успешного
              this.$message.success("Коментарий добавлен");
            }, 2000);
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>