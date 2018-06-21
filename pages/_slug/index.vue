<template>
    <article class="content">
          <div class="content__inner">
              <h1 v-html="post.title" :style="{background:post.background}" class="content__title"></h1>
                <div :style="{ backgroundImage: 'url(' + post.img + ')' }" class="content__img"></div>
                <div class="content__meta" :style="{background:post.background}">
                    <h5>{{post.author}}</h5>
                    <h5>published: {{post.date | formatDate}}</h5>    
                </div>
                <div v-html="post.content" class="content__text"></div>
          </div>
        <div class="sharing">
            <h3 class="sharing__title">share post</h3>
            <ul class="sharing__list">
                <li class="sharing__list--item"><i class="fab fa-facebook-f fa-3x"></i></li>
                <li class="sharing__list--item"><i class="fab fa-twitter fa-3x"></i></li>
                <li class="sharing__list--item"><i class="fab fa-google-plus-g fa-3x"></i></li>
                <li class="sharing__list--item"></li>
            </ul>
        </div>
  </article>
</template>

<script>
import * as moment from 'moment'
export default {
    filters:{
        formatDate: function(value){
         return moment(value).format('DD MM YYYY')
     }
    },
    created(){
        console.log(this.post)
    },
    head(){
        return{
            title: this.post.title,
            meta:[
                { property: 'og:title', content: `${this.post.title}` }
            ]
        }
    },
    asyncData(context){
        if(context.params.post){
            return{
                post:{
                    id: context.params.post.id,
                    content: context.params.post.content,
                    title: context.params.post.title,
                    img: context.params.post.img,
                    background: context.params.post.background,
                    date: context.params.post.date,
                    author: context.app.store.getters['authors/getAuthors'].find(author => author.id === context.params.post.author).name
                }
            }
        }else{
            return context.app.$axios.$get(`/posts?slug=${context.params.slug}`)
            .then(data => data[0])
            .then(function(d){
                return{
                    post:{
                        id: d.id,
                        date: d.date,
                        title: d.title.rendered,
                        content: d.content.rendered,
                        img: d.better_featured_image.source_url,
                        author: context.app.store.getters['authors/getAuthors'].find(author => author.id === d.author).name,
                        background:context.app.store.getters['categories/getCategories'].find(cat => cat.id === d.categories[0]).color
                    }
                }
            })
        }
    }
    
}
</script>

<style lang="scss">
    .content{
        margin-top:15rem;
        margin-bottom: 10rem;
        width:100%;
        &__inner{
            background: #fff;
            width:100%;
            max-width:750px;
            margin: 0 auto;
            padding:3rem;
            box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
            border-radius:$border-radius;
            @media screen and (max-width:600px) {
                padding:2rem;
            }
        }
        &__title{
            text-align: center;
            margin-top:3rem;
            text-transform: uppercase;
            font-size:30px; 
            color: $color-white;
            padding:2rem; 
            letter-spacing: 1px;
        }
        &__meta{
            padding:1rem;
            display: flex;
            justify-content: space-between;
            @media screen and (max-width:390px) {
                flex-direction: column;
            }
            & h5{
                color: $color-white;
                display:inline-block;
                font-size:1.6rem;
                letter-spacing: 1px;
                &:not(:last-child){
                    margin-right:auto;
                }
                @media screen and (max-width:390px) {
                &:not(:last-child){
                    margin-bottom:1rem;
                    margin-right:0;
                }
            }
            }
        }
        &__img{
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            width:100%;
            height:400px;
        }
        &__text{
            margin-top:2rem;
            & img{
                margin:20px 0;
                width:100%;
                height:auto;
            }
           & h2{
               font-size:23px;
               margin:30px 0;
               color: rgba($color-black,.65);
               
           }
            & h3{
               font-size:2rem;
               margin: 30px 0;
               color: rgba($color-black,.65);
           }
           & h4{
              color: rgba($color-black,.65);
              font-size:2rem; 
           }
           & h5{
               color: rgba($color-black,.65);
              font-size:1.7rem; 
           }
           & p{
               font-size:1.8rem;
               text-align: justify;
               margin: 1rem auto;
               line-height: 27px;
           }
           & ul li{
               font-size:18px;
               text-align: justify;
               margin-left:4rem;
               &:not(:last-child){
                   margin-bottom:10px;
               }
           }
           & ul,ol{
               margin:30px 0
           }
           & ol li{
               font-size:18px;
               text-align: justify;
               &:not(:last-child){
                   margin-bottom:10px;
               }
           } 
        }
    }

    .sharing{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #fff;
        padding:3rem;
        box-shadow: 0 3px 7px -3px rgba(0, 0, 0, 0.3);
        border-radius:$border-radius;
        margin:2rem auto;
        width:auto;
        max-width:750px;
        &__title{
            color:$color-one;
            text-transform: uppercase;
            font-size:1.5rem;
            margin-bottom:2rem;
        }
        &__list{
            list-style-type: none;
            display: flex;
            &--item{
                color:$color-one;
                cursor:pointer;
                &:not(:last-child){
                    margin-right:2rem;
                }
            }
        }
    }
</style>


