<template>
    <div class="categories">
        <ul class="categories__list">
            <li v-for="cat in categories" :key="cat.id" class="categories__list--item">
               <a @click.prevent="setCurrent(cat.id)" href="#" v-scroll-to="{
                   el:'#posts',
                   container:'body',
                   ease:'ease-in-out',
                   onDone:changeCategory
               }">{{cat.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    computed:{
        categories(){
            return this.$store.getters['categories/getCategories']
        }
    },
    methods:{
        changeCategory(e){
            e.__vue__.currentCategory = this.$store.getters['categories/getCurrent']
            e.__vue__.active = this.$store.getters['categories/getCurrent']
            e.__vue__.categoryBackground = this.categories.find(cat => cat.id === this.$store.getters['categories/getCurrent']).color

        },
        setCurrent(id){
            this.$store.commit('categories/SET_CURRENT',id)
            this.$parent.$emit('close')
        }
    }
}


</script>


<style lang="scss" scoped>
    .categories{
        width:100%;
        background:$color-two;
        display:flex;
        justify-content:center;
        z-index:9999;
        position:relative;
        align-items:center;
        &__list{
            display:flex;
            list-style-type:none;
            padding:2rem;
            @media screen and (max-width:660px) {
                flex-direction: column;
                width:100%;

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
                @media screen and (max-width:660px) {
                    text-align: center;
                    border:none;
                    border-width:100%;
                    border-bottom: 2px solid $color-white;
                    &:not(:last-child){
                    margin-bottom:3rem;
                    margin-right:0;
                    
                }

        }
            }
        }
    }

</style>