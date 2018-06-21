<template>
   <section class="container">
    <section class="intro">
      <Latest />
      <About />
    </section>
    <section class="newsletter">
      <Newsletter />
    </section>
    <section class="authors">
      <div class="authors__title">
        <h2 v-if="currentComponent === 'AuthorsGrid'">Our writers</h2>
        <transition name="slide" mode="out-in">
          <component 
            @changeAuthor="currentComponent = 'Author'"
            @changeToAuthors="currentComponent = 'AuthorsGrid'" 
            :is="currentComponent" />
        </transition>
      </div>
    </section>
    <section class="posts">
      <div class="posts__heading">
        <h2 class="posts__heading--title">our posts</h2>
      </div>
          <PostsList />
    </section>
  </section>

 
</template>

<script>
import Latest from '@/components/Intro/Latest.vue'
import About from '@/components/Intro/About.vue'
import Newsletter from '@/components/Newsletter/Newsletter.vue'
import AuthorsGrid from '@/components/Authors/AuthorsGrid.vue'
import Author from '@/components/Authors/Author.vue'
import Categories from '@/components/Navigation/Categories.vue'
import PostsList from '@/components/Posts/PostsList.vue'
export default {
 components:{
   Latest,
   About,
   Newsletter,
   AuthorsGrid,
   Author,
   Categories,
   PostsList,
 },
 data(){
   return{
     currentComponent: 'AuthorsGrid'
   }
 }
}
</script>

<style lang="scss">
.container{
margin-top:12rem;
width:100%;
@media screen and (max-width:711px) {
                margin-top:23rem

        }
}

.intro{
  width:100%;
  display: flex;
  background: $color-three;
  @media screen and (max-width:1200px) {
        flex-direction: column;
    }
}

.newsletter{
  background:$color-two;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.authors{
  background: $color-four;
  width:100%;
  display: flex;
  &__title{
    text-align: center;
    width:100%;
    padding:1rem;
    margin:2rem 0;
    h2{
      color:$color-white;
       background: $color-two;
       display: inline-block;
       padding:1rem 3rem;
       text-transform:uppercase;
       font-size:2rem;
       font-weight:bold;
       letter-spacing: 1px;
       border: .5rem solid $color-one;
       border-radius:$border-radius;
    }
    }
  }

  .posts{
    margin-top:2rem;
    background: $color-four;
    &__heading{
      background:$color-one;
      padding:3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &--title{
        color:$color-white;
        text-transform: uppercase;
        letter-spacing:1px;
        border: 2px solid $color-white;
        padding:1rem 3rem;
        border-radius:$border-radius;
        font-size:2rem;
      }
    }
    width:100%;
  }



  .slide-enter{
    opacity: 0;
    transform: translateX(-10rem)
  }

  .slide-enter-active{
    transition: transform .4s , opacity .2s;
  }

  .slide-leave-to{
    opacity: 0;
    transform: translateX(-10rem)
  }

  .slide-leave-active{
    transition: transform .4s , opacity .2s;
  }

</style>
