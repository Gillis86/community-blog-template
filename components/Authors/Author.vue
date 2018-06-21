<template>
<div>
     <div class="author">
         <div class="author__heading">
             <button class="back" @click="back()">&larr;</button>
            <div class="author__heading--img" :style="{backgroundImage:'url('+author.img+')'}"></div>
            <h3 class="author__heading--name">{{author.name}}</h3> 
         </div>
        <div class="author__posts">
            <Post v-for="post in posts" 
                :key="post.id"
                :id="post.id"
                :img="post.better_featured_image.source_url"
                :slug="post.slug"
                :title="post.title.rendered"
                :excerpt="post.excerpt.rendered"
                :background="categories.find(cat => post.categories[0] === cat.id).color"
                :category="categories.find(cat => post.categories[0] === cat.id).name"
                :content="post.content.rendered"
                :author="post.author"
                :date="post.date" />
        </div>   
    </div>
</div> 
</template>

<script>
import Post from '@/components/Posts/Post.vue'
export default {
    components:{
        Post
    },
    computed:{
        author(){
            return this.$store.getters['authors/getCurrentAuthor']
        },
        posts(){
            return this.$store.getters['authors/getAuthorPosts']
        },
        categories(){
             return this.$store.getters['categories/getCategories']
        }
    },
    methods:{
        back(){
            this.$emit('changeToAuthors')
            this.$store.commit('authors/RESET_AUTHOR_POSTS')
        }
    }
}
</script>

<style lang="scss" scoped>
.author{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__heading{
        display: flex;
        width:100%;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        &--img{
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            width:10rem;
            height:10rem;
            margin-right:3rem;
            position:relative;
            border: .5rem solid $color-one;
            border-radius:50%;
            @media screen and (max-width: 350px){
                margin-bottom:1rem;
            }
            &::before{
                content:"";
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background: rgba($color-four,.12)
            }
        }
        &--name{
            color:$color-white;
            background: $color-two;
            padding:1rem 3rem;
            text-transform:uppercase;
            font-size:1rem;
            font-weight:bold;
            letter-spacing: 1px;
            border: .5rem solid $color-one;
        }
    }
    &__posts{
        display: flex;
        width:100%;
        justify-content: space-around;
        margin:4rem 0;
        flex-wrap: wrap;
    }
}

.post{
    display: flex;
    flex-direction:column;
    width:40rem;
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

.back{
    background: none;
    color:$color-one;
    padding:.1rem 1rem;
    outline:none;
    border:none;
    cursor: pointer;
    //border-radius:$border-radius;
    //border: .5rem solid $color-one;
    margin-right:3rem;
    font-weight: 900;
    font-size:3rem;
}
</style>


