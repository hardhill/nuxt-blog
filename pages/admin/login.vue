<template>
  <el-card shadow="always" :style="{width:'500px'}">
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h2>Авторизация</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input type="password" v-model="controls.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="loading">Войти</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: "empty",
   data: () => {
    return {
      loading: false,
      controls: {
        login: "",
        password: ""
      },
      rules: {
        login: [
          {
            required: true,
            message: "Введите логин",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Пароль обязателен",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted(){
      const {message} = this.$route.query
      switch (message){
      case 'login':
        this.$message.info('Для начала надо авторизоваться')
        break
        case 'logout':
        this.$message.success('Вы успешно вышли из системы')
        break
      }
      
  },
  methods:{
      onSubmit(){
          this.$refs.form.validate(async valid=>{
              if(valid){
                  this.loading = true
                  try {
                     const formData = {
                         login:this.controls.login,
                         password:this.controls.password
                     } 
                    
                    await this.$store.dispatch('auth/actLogin',formData)
                    this.loading = false
                    this.$router.push('/admin')
                  } catch (error) {
                      console.log(error)
                      this.loading = false
                  }
              }
          })
      }
  }
};
</script>