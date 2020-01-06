<template>
    <dev>
        <el-breadcrumb>
            <el-breadcrumb-item to="/admin/list">Пост</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.params.id}}</el-breadcrumb-item>
        </el-breadcrumb>
        Post
        </dev>
</template>
<script>
export default {
    layout:'admin',
    middleware:['admin-auth']
}
</script>