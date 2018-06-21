<template>
    <footer class="footer">
        <section class="footer__top">
            <div class="latest">
                <h3 class="latest__title">Latest</h3>
                <ul class="latest__list">
                    <li v-for="post in latest" :key="post.id" class="latest__list--item">
                        <FooterPost
                         :id="post.id"
                        :img="post.better_featured_image.source_url"
                        :slug="post.slug"
                        :title="post.title.rendered"
                        :excerpt="post.excerpt.rendered"
                        :background="categories.find(cat => post.categories[0] === cat.id).color"
                        :category="categories.find(cat => post.categories[0] === cat.id).name"
                        :content="post.content.rendered"
                        :date="post.date"
                        :author="post.author"/>
                    </li>
                </ul>
        </div>
        <div class="logo">
            <img src="img/footer-logo.jpg" class="logo__img" alt="logo">
            <h2 class="logo__title">community blog</h2>
        </div>
        <footer-newsletter />
        </section>
        <section class="footer__bottom">
            <div class="copyright">Copyright © 2018 Giacomo Ciampoli</div>
            <ul class="social">
                <li class="social__icon"><i class="fab fa-facebook-f fa-3x"></i></li>
                <li class="social__icon"><i class="fab fa-twitter fa-3x"></i></li>
                <li class="social__icon"><i class="fab fa-google-plus-g fa-3x"></i></li>
            </ul>
            <div class="privacy">Privacy Policy</div>
        </section>
        
    </footer>
</template>

<script>
import FooterPost from '@/components/Footer/FooterPost.vue'
import FooterNewsletter from '@/components/Footer/FooterNewsletter.vue'
export default {
    components:{
        FooterPost,
        FooterNewsletter
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

<style lang="scss" scoped>
    .footer{
        width:100%;
        background: $color-two;
        margin-top:4rem;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        border-top:3rem solid $color-one;
        &__top{
            justify-content: space-around;
            align-items: center;
            display: flex;
            width:100%;
            @media screen and (max-width: 1270px) {
                flex-direction: column;
            }
        }
        &__bottom{
            width:100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: $color-one;
            padding:3rem;
            @media screen and (max-width:846px) {
                flex-direction: column
            }
        }
    }

    .copyright, .privacy{
        color:$color-white;
        text-transform: uppercase;
        font-size:1.3rem;
        
    }

    .privacy{
        cursor: pointer;
        @media screen and (max-width:846px) {
                order:3
            }
    }
    .copyright{
        @media screen and (max-width:846px) {
                margin-bottom:2rem;
                order:2
            }
    }
.social{
    list-style-type: none;
    display: flex;
    @media screen and (max-width:846px) {
                margin-bottom:2rem;
                order:1;
            
            }
    &__icon{
        color:$color-white;
        cursor: pointer;
        &:not(:last-child){
            margin-right:2rem;
        }

    }
}

    .latest{
        padding:3rem;
        width:33%;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1270px) {
                order:2;
                width:100%;
            }
        &__title{
            font-size:2rem;
            color:$color-white;
            text-transform: uppercase;
            margin-bottom:1rem;
            letter-spacing:1px;
            border: 2px solid $color-white;
            padding:.7rem 1rem;
            border-radius:$border-radius;
        }
        &__list{
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
        }
    }

    .logo{
        width:33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:3rem;
        @media screen and (max-width: 1270px) {
                width:100%;
                order:1;
            }

        &__img{
            width:12rem;
            margin-bottom:2rem;
        }

        &__title{
            color:$color-white;
            text-transform: uppercase;
            letter-spacing:1px;
            border: 2px solid $color-white;
            padding:.7rem .5rem;
            border-radius:$border-radius;
            font-size:2rem;
            display: inline-block
        }
    }

</style>


