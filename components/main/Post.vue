<template>
  <el-card
    shadow="hover"
    :body-style="{padding:0}"
    class="post"
  >
    <header slot="header" class="post-header">
        <h3>Post title</h3>
        <small>
            <i class="el-icon-time"></i>
            {{new Date().toLocaleString()}}
        </small>
    </header>
    <div class="post-body">
        <img class="post-img" alt="Post image" src="https://s1.1zoom.ru/big3/558/Prague_Czech_Republic_Houses_Rivers_Bridges_515442_5760x3840.jpg"/>
    </div>
    <footer class="post-footer">
        <el-button round @click="openPost">Открыть</el-button>
        <span>
            <i class="el-icon-message"></i>
            12
        </span>
    </footer>
  </el-card>
</template>

<script>
export default {
    methods:{
        openPost(){
            console.log('Open post')
            var id = 'test-id'
            this.$router.push(`/post/${id}`)
        }
    }
}

</script>

<style lang="scss" scoped>
.post {
    margin-bottom: 1.5rem;
}
.post-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-img{
    width: 100%;
    height: auto;
}
.post-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}
</style>