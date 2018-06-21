<template>
    <div class="carousel-wrapper">
        <no-ssr>
             <carousel class="latest-carousel" 
             :loop="true" 
             :autoplay="true" 
             :perPage="1"
             :autoplayHoverPause="true"
             :paginationEnabled="true"
             :paginationActiveColor="paginationColor"
             :paginationSize="15">

                <slide v-for="post in latest" :key="post.id">
                    <Last 
                    :id="post.id"
                    :img="post.better_featured_image.source_url"
                    :slug="post.slug"
                    :title="post.title.rendered"
                    :excerpt="post.excerpt.rendered"
                    :background="categories.find(cat => post.categories[0] === cat.id).color"
                    :category="categories.find(cat => post.categories[0] === cat.id).name"
                    :content="post.content.rendered"
                    :date="post.date"
                    :author="post.author"
                    />
            </slide>
        </carousel>
        </no-ssr>
    </div>
</template>

<script>
import Last from './Last.vue'
import { Carousel, Slide } from 'vue-carousel';
export default {
    components:{
        Last,
        Carousel,
        Slide
    },
    data(){
        return{
            paginationColor:'#e95280'
        }
        
    },
    computed:{
            latest(){
                return this.$store.getters['posts/getLatest']
            },
            categories(){
                return this.$store.getters['categories/getCategories']
            }
    }
}
</script>

<style lang="scss">
.carousel-wrapper{
    width:70%;
    height:50rem;
    padding:3rem;
    @media screen and (max-width:1200px) {
        width:100%;
        margin-bottom:2rem;
    }
}
.latest-carousel{
    height:100%;
    width:100%;
    & .VueCarousel-wrapper{
        height:100%
    }
    & .VueCarousel-wrapper .VueCarousel-inner{
        height: 100%;
    }
}


.VueCarousel-dot-button:focus{
    outline:0 !important;
}

 p.link-more{
    display: none;
}
</style>

