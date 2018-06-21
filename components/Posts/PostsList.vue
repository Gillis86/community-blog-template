<template>
<div id="posts">
<div  v-if="!displaySideNav" class="categories">
        <div class="sidenav__btn" @click="displaySideNav=true"><i class="fas fa-bars fa-3x"></i></div>
        <ul style="padding:2rem" class="categories__list">
            <li :class="{active: active === 'all' }" style="padding:.7rem" class="categories__list--item" @click="setCategory('all')">all</li>
            <li :class="{active: active === cat.id }" @click="setCategory(cat.id)" style="padding:.7rem" v-for="cat in categories" :key="cat.id" class="categories__list--item">{{cat.name}}</li>
        </ul>
        <form class="search">
            <input v-model="searchTerm" class="search__input" placeholder="Search" type="text">
            <button @click.prevent="search" class="search__btn"><i class="fas fa-search"></i></button>
        </form>
    </div>
    <transition name="side">
    <div v-if="displaySideNav" class="sidenav">
        <div @click="displaySideNav = false" class="sidenav__close"><i class="fas fa-times fa-3x"></i></div>
        <ul class="sidenav__list">
            <li :class="{activeSidenav: active === 'all' }" class="sidenav__list--item" @click="setCategory('all')">all</li>
            <li :class="{activeSidenav: active === cat.id }" @click="setCategory(cat.id)" v-for="cat in categories" :key="cat.id" class="sidenav__list--item">{{cat.name}}</li>
        </ul>
        <form class="sidenav__search">
            <input v-model="searchTerm" class="search__input" placeholder="Search" type="text">
            <button @click.prevent="search" class="search__btn"><i class="fas fa-search"></i></button>
        </form>
    </div>
    </transition>
    <div class="posts">
        <Post v-for="post in posts" 
        :key="post.id"
        :id="post.id"
        :img="post.better_featured_image.source_url"
        :slug="post.slug"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :background="currentCategory === 'all' || currentCategory === null ? categories.find(cat => post.categories[0] === cat.id).color : categoryBackground"
        :category="categories.find(cat => post.categories[0] === cat.id).name"
        :content="post.content.rendered"
        :date="post.date"
        :author="post.author" />
    </div>
    <div class="load" v-if="!searchResult.length">
        <scale-loader :loading="isLoading" :color="color"></scale-loader>
        <button id="load" @click="loadMorePosts" v-if="!isLoading" class="load__btn">load more</button>
    </div> 
    <div class="load" v-else >
        <scale-loader :loading="isLoading" :color="color"></scale-loader>
        <button id="load" @click="loadMoreSearchResults" v-if="!isLoading" class="load__btn">load more</button>
    </div>
</div>

</template>

<script>
import Post from '@/components/Posts/Post.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
let currentCat = null;
let currentBG = null;
let activeCatClass = null;
export default {
    components:{
        Post,
        ScaleLoader
    },
    data(){
        return{
            currentCategory:null,
            color:'#e95280',
            active:null,
            categoryBackground:null,
            searchTerm:'',
            displaySideNav:false
        }
    },
    computed:{
        posts(){
            return this.$store.getters['posts/getSearchResults'].length > 0 ? this.$store.getters['posts/getSearchResults'] 
            : this.$store.getters['posts/getPosts']
        },
        searchResult(){
            return this.$store.getters['posts/getSearchResults']
        },
        categories(){
            return this.$store.getters['categories/getCategories']
        },
        isLoading(){
            return this.$store.getters['posts/getIsLoading']
        },
        query(){
            return this.searchTerm.split(' ').join('+').trim().toLowerCase()
        }
        
    },
    watch:{
     currentCategory: function(cat){
         if(this.$store.getters['posts/getSearchResults'].length>0){
             this.$store.commit('posts/RESET_SEARCH_RESULTS')
         }
         this.$store.commit('posts/RESET_POSTS')
         this.$store.commit('posts/RESET_SEARCH_RESULTS')
         this.loadMorePosts()
         }  
    },
    methods:{
        loadMorePosts(){
            this.$store.dispatch('posts/loadPosts',this.currentCategory)
            
        },
        setCategory(id){
            this.displaySideNav = false;
            this.currentCategory = id
            this.active = id
            if(typeof id === 'number'){ //avoid the 'all' keyword
                this.categoryBackground = this.categories.find(cat => cat.id === id).color
            }
            
        },
        search(){
            this.displaySideNav = false;
            this.$store.commit('posts/RESET_POSTS')
            this.currentCategory = 'all' //reset the currentCategory to all in order to give, for every search result, the correct background
            this.$store.commit('posts/RESET_SEARCH_RESULTS')
            this.$store.dispatch('posts/searchPosts',this.query)
            //this.categoryBackground = null
        },
        loadMoreSearchResults(){
            this.$store.dispatch('posts/searchPosts',this.query)
        }
    },
    created(){
        if(currentCat !== null){
        this.currentCategory = currentCat
        }
        if(currentBG !== null){
            this.categoryBackground = currentBG
        }
        if(activeCatClass !== null){
            this.active = activeCatClass
        }

    },
    beforeDestroy(){
        currentCat = this.currentCategory
        currentBG = this.categoryBackground
        activeCatClass = this.active
    },  
}
</script>


<style lang="scss" scoped>

    #posts{
        height:80vh;
        overflow: auto;
        width:100%;

    }
     .categories{
        width:100%;
        background:$color-two;
        position:sticky;
        top:0;
        display:flex;
        justify-content:space-around;
        z-index:9999;
        align-items:center;
        flex-wrap: wrap;
          @media screen and (max-width:730px) {
            justify-content: flex-start;
            z-index:0;
        }
        &__list{
            display:flex;
            list-style-type:none;
            padding:2rem;
            @media screen and (max-width:730px) {
            display: none;
        }
            &--item{
                color:$color-white;
                font-size:1.5rem;
                cursor:pointer;
                text-transform:uppercase;
                position:relative;
                border: 2px solid $color-white;
                padding:.7rem;
                border-radius:$border-radius;
                &:not(:last-child){
                    margin-right:3rem;
                }
            }
        }
    }
    .active{
        background: $color-one
    }
    .activeSidenav{
        background: $color-one;
        border: 2px solid $color-white;
        border-radius:$border-radius;
        padding:.7rem;
    }
    .posts{
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        margin: 5rem 0;
    }
    .load{
        width:100%;
        display:flex;
        justify-content: center;
        margin: 4rem 0;
        &__btn{
            background: $color-one;
            color:$color-white;
            padding:1rem 4rem;
            text-transform:uppercase;
            outline:none;
            border:none;
            cursor: pointer;
            border-radius:$border-radius;
        }
    }
    .search{
        @media screen and (max-width:1048px) {
            margin:2rem 0;
        }
         @media screen and (max-width:730px) {
            display: none;
        }
        &__input{
            padding:.6rem 3rem;
            border-radius:$border-radius;
            outline:none;
            border:none;
            border-top-right-radius:0;
            border-bottom-right-radius:0;
            transition: all .2s;
            &:focus{
                outline: none;
                box-shadow: .2rem .4rem 2.6rem $color-one;
                & + button{
                    box-shadow: .2rem .4rem 2.6rem $color-white;
                } 
        }
        }
        &__btn{
            padding:.6rem 2.5rem;
            background: $color-one;
            color:$color-white;
            transition: all .2s;
            cursor: pointer;
            outline:none;
            border:none;
            border-radius:$border-radius;
            border-top-left-radius:0;
            border-bottom-left-radius:0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

    .sidenav{
        position: sticky;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background: $color-two;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        z-index:999;
        &__close{
            color:$color-white;
            position:absolute;
            top:5%;
            right:5%;
            cursor: pointer;
        }
        &__search{
            margin-top:2rem;
        }
        &__list{
            display:flex;
            list-style-type:none;
            padding:2rem;
            flex-direction: column;
            &--item{
                    text-align: center;
                    border-bottom: 2px solid $color-white;
                    color:$color-white;
                    font-size:1.5rem;
                    cursor:pointer;
                    text-transform:uppercase;
                    padding-bottom:1rem;
                    &:not(:last-child){
                    margin-bottom:2.5rem;
                }
            }
        }

        &__btn{
            color:$color-white;
            padding: 1rem 2rem;
            background: transparent;
            cursor:pointer;
            @media screen and (min-width:730px) {
            display: none;  
        }
        }
    }

    .side-enter-active{
    
    transition: opacity .2s;
    
  }
  .side-leave-active{
    transition: opacity .2s;
  }

  .side-enter{
    opacity:0;
  }
  .side-leave-to{
    opacity:0;
  }
    
</style>


