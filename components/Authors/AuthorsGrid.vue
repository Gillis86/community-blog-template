<template>
    <div class="grid">
        <div class="author" v-for="author in authors" :key="author.id">
        <div @click="loadAuthor(author)" class="author__img" :style="{backgroundImage:'url('+author.img+')'}"></div>
         <h3 class="author__name">{{author.name}}</h3>   
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        authors(){
            return this.$store.getters['authors/getAuthors']
        }
    },
    methods:{
        loadAuthor(author){
            this.$store.dispatch('authors/setAuthor',author)
            this.$emit('changeAuthor')
        }
    }
}
</script>


<style lang="scss" scoped>
    .grid{
        display:flex;
        justify-content: space-around;
        width:100%;
        margin-top:4rem;
        flex-wrap:wrap;
        margin-bottom:2rem;
    }

    .author{
        margin:2rem;
        &__name{
            color:$color-white;
            background: $color-two;
            display: inline-block;
            padding:1rem 3rem;
            text-transform:uppercase;
            font-size:1.2rem;
            font-weight:bold;
            letter-spacing: 1px;
            border: .5rem solid $color-one;
        }
        &__img{
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            cursor: pointer;
            width:20rem;
            height:20rem;
            margin-bottom:3rem;
            position:relative;
            border: .5rem solid $color-one;
            border-radius:50%;
            transition: transform .2s;
            &:hover{
                transform: translateY(-1rem)
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
    }

</style>


