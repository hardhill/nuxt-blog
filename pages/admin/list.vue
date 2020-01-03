<template>
    <div>
        <el-table
    :data="posts"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Название"
    />
    <el-table-column
      label="Дата"
     >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="view"
      label="Просмотров"
    />
    <el-table-column
      label="Коментариев">
      <template slot-scope="scope">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ scope.row.comments.length }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Действия">
      <template slot-scope="scope">
        <el-button
          icon="el-icon-edit"
          circle
          type="primary"
          @click="open(scope.row._id)"/>
        <el-button
          icon="el-icon-delete"
          circle
          type="danger"
          @click="remove(scope.row._id)"/>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
    layout:'admin',
     middleware:['admin-auth'],
     async asyncData({store}){
         const posts = await store.dispatch('post/fetchAdmin')
         return {posts}
     },
     methods:{
       open(id){
         console.log('open-',id)
       },
       remove(id){
        console.log('del-',id)
       }
     }
}
</script>