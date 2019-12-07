<template>
  <el-form 
  :model="controls" 
  :rules="rules" 
  ref="form"
  @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name"></el-input>
    </el-form-item>
    <el-form-item label="Коментарий" prop="text">
      <el-input type="textarea" 
      v-model="controls.text"
        resize="none"
        :rows="2"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button 
      type="primary" 
      native-type="submit"
      round
      >Добавить коментарий</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data: () => {
    return {
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
            message: "Введите Ваш коментарий",
            trigger: "blur"
          },
          {
              max:255,
              message:'Коментарий не должен превышать 255 символов',
              trigger:'change'
          }
        ]
      }
    }
  },
  methods:{
      onSubmit(){
          console.log('Submit form')
      }
  }
}
</script>
<style lang="scss" scoped>
</style>