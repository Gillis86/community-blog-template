<template>
            <nuxt-link tag="div" :to="{name:'slug',params:{
                    slug,
                    post:{
                        img,
                        title,
                        background,
                        category,
                        id,
                        content,
                        date,
                        author
                    },
                    
                }}"  class="post">
                <div class="post__img" 
                    :style="{backgroundImage:'url('+img+')'}"></div>
                <div :style="{background:background}" 
                    class="post__text">
                    <h3 class="post__text--title" v-html="title"></h3>
                </div>
            </nuxt-link>
        
</template>

<script>
export default {
    props:{
        id:{
            type:Number,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
        excerpt:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        background:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        author:{
            type:Number,
            required:true
        }
    }
    
}
</script>


<style lang="scss" scoped>
    .post{
    display: flex;
    flex-direction:column;
    width:40rem;
    cursor: pointer;
    margin:2rem;
    &__img{
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height:20rem;
    }
    &__text{
        padding:3rem;
        &--title{
            color:$color-white;
            font-size:1.5rem;
            text-transform:uppercase;
        }
    }
}
</style>