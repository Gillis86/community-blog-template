<template>
    <div class="post">
        <div class="post__text" :style="{background:background}">
            <div class="post__text--wrapper">
                <h3 class="title" v-html="title"></h3>
                <h4 class="excerpt" v-html="excerpt"></h4>
                <nuxt-link :style="{color:background}" class="read" :to="{name:'slug',params:{
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
                    
                }}" tag="button">read</nuxt-link>
            </div>
        </div>
        <div :style="{ backgroundImage: 'url(' + img + ')' }" class="post__img"></div>
        <div :style="{background:background}" class="post__category"><h3>{{category}}</h3></div>
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
        display: flex;
        width:100%;
        height:100%;
        position: relative;
        overflow: visible;
        @media screen and (max-width:738px) {
            flex-direction: column;
        }
        &__category{
            position:absolute;
            top:0;
            right:0;
            padding:2rem 4rem;
            h3{
                font-size:1.5rem;
                color:$color-white;
                text-transform:uppercase;
            }
            
        }
        &__text{
            width:60%;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            z-index:0;
            @media screen and (max-width:738px) {
                width:100%;
                order:0;
        }
            &::before{
                transform: skewX(-5deg);
				content: "";
				background: inherit;
				width: 100%;
				z-index: -1;
                height:100%;
				position: absolute;
                left: 2rem;
                top: 0;
				bottom: 0;
            }
            &--wrapper{
                padding:3rem;
                text-align:center;
                
            }
        }
        &__img{
            background-position:50% 50%;
            background-repeat: no-repeat;
            background-size:cover;
            height:100%;
            width:40%;
              @media screen and (max-width:738px) {
                width:100%;
                order: -1;

        }
           
        }
    }
    .title{
        color:$color-white;
        font-size:2.5rem;
        text-transform:uppercase;
        margin-bottom:1rem; 
        letter-spacing: 1px;
           @media screen and (max-width:738px) {
                font-size:2rem;

        }
    }
    .excerpt{
        color:$color-white;
        font-size:1.5rem;
        margin-bottom:2rem;
        text-align: justify;
        @media screen and (max-width:468px) {
                display: none;

        }
        @media screen and (max-width:738px) {
                font-size:1.2rem;
        }
    }
    .read{
        display:inline;
        padding:1rem 5rem;
        text-transform:uppercase;
        cursor:pointer;
        background: $color-white;
        border-radius:$border-radius;
        outline:0;
        border:none;
        
        
    }
   

</style>