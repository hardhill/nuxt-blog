<template>
    <el-card class="comment">
        <div class="comment-header">
            <span>Person name</span>
            <span>
                <i class="el-icon-time"></i>
                {{new Date().toLocaleString()}}
            </span>
        </div>
        <div class="comment-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum magni porro cumque maxime quas! Ut aperiam corrupti quae dignissimos.
        </div>
    </el-card>
</template>

<script>
export default {
    props:['comment'] //свойство компонента
}

</script>
<style lang="scss" scoped>
.comment{
    margin-bottom: 1rem;
}
.comment-header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: .8rem;
}
.comment-text{
    white-space: pre-line;
}
</style>