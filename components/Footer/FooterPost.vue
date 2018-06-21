<template>
    <div class="post">
        <div class="post__category" :style="{background:background}"></div>
        <div class="post__title">
            <nuxt-link tag="h3" :to="{name:'slug',params:{
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
                    
                }}">{{title}}</nuxt-link>
        </div>
    </div>
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
        display:table;
        margin:1rem 0;
        border-spacing:.5rem;
        border-collapse:separate;
        &__title{
            display: table-cell;
            & h3{
                color:$color-white;
                text-transform: uppercase;
                font-size:1.2rem;
                cursor: pointer;
            }
        }
        &__category{
            display: table-cell;
            width:2rem;
            height:1rem;
        }
    }
</style>


