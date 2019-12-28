<template>
    <div class="empty-layout">
        <nuxt/>
    </div>
</template>

<script>
export default {
    computed:{
        error(){
            return this.$store.getters.getError
        }
        
    },
    watch:{
        error(value){
            this.$message.error(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.empty-layout{
    display: flex;
    justify-content: center;
    padding-top: 4rem;
}
</style>