<template>
<div class="layout-admin">
  <el-container :style="{height:'100%'}">
    <el-aside width="225px">
        <AppAside/>
    </el-aside>
    <el-main>
        <nuxt/>
    </el-main>
  </el-container>
</div>
</template>

<script>
import AppAside from '@/components/admin/Aside'
export default {
    components:{
        AppAside
    },
   
}
</script>

<style lang="scss" scoped>
.layout-admin{
    width: 100%;
    height: 100vh;
}

</style>