<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h2>Post title</h2>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time"></i>
                {{new Date().toLocaleString()}}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div class="post-img">
                 <img alt="Post image" src="https://s1.1zoom.ru/big3/558/Prague_Czech_Republic_Houses_Rivers_Bridges_515442_5760x3840.jpg"/>
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus officiis voluptates dolorem eius dignissimos esse temporibus magnam nobis blanditiis.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure repellendus nisi vitae harum labore iusto temporibus, molestiae earum delectus quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe repudiandae quae possimus provident voluptas id necessitatibus est similique?</p>
        </main>
        <footer>
            <AppCommentForm/>
            <div class="comments" v-if="true">
                <AppComment
                    v-for="comment in 4"
                    :key="comment"
                    :comment="comment"
                />
            </div>
            <div class="text-center" v-else>
                Коментариев нет
            </div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
    validate({params}){
        return Boolean(params.id)
    },
    components:{
        AppComment,
        AppCommentForm
    }    
}
</script>
<style lang="scss" scoped>
.post{
    max-width: 600px;
    margin: 0 auto;
}
.post-header{
    margin-bottom: 1.5rem;
}
.post-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.post-info{
display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
}
.post-img img{
    width: 100%;
    height: auto;
}
.post-content{
    margin-bottom: 2rem;
}
</style>