<template>
    <div class="form-container"><el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h2>Создать нового пользователя</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input type="password" v-model="controls.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" round :loading="loading">Создать</el-button>
      </el-form-item>
    </el-form></div>
</template>
<script>
export default {
    layout:'admin',
     middleware:['admin-auth'],
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
                    
                    await this.$store.dispatch('auth/userCreated',formData)
                    this.$message.success('Новый пользователь добавлен')
                    this.controls.login = ''
                    this.controls.password = ''
                    this.loading = false
                    
                    
                  } catch (error) {
                      console.log(error)
                      this.loading = false
                  }
                  
              }
          })
      }
  }
}
</script>
<style lang="scss" scoped>
.form-container{
    width: 600px;
}
</style>