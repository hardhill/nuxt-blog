<template>
    <div>Post show </div>
</template>

<script>

export default {
    validate({params}){
        return Boolean(params.id)
    }    
}
</script>