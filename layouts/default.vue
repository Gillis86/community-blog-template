<template>
  <div class="main-wrapper">
    <div id="menu" class="menu">
      <TheHeader @display="displayCategories = !displayCategories" />
      <transition name="displaycat">
        <Categories v-show="displayCategories && $route.name !== 'slug'" />
      </transition>
      <div class="spacer"></div>  
    </div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader.vue';
import Categories from '@/components/Navigation/Categories.vue'
import Footer from '@/components/Footer/Footer.vue'
export default{
  components:{
    TheHeader,
    Categories,
    Footer
  },
   data(){
    return{
      displayCategories:false
    }
  },
  created(){
    this.$on('close',()=>{
      this.displayCategories = false
    })
  }
}

</script>


<style lang="scss">
  .main-wrapper{
    margin: 4rem;
    background: $color-four;
    border-radius:$border-radius;
    overflow:hidden;
    position:relative;
    @media screen and (max-width:600px){
      margin:0
    }
  }
  .menu{
    position:absolute;
    top:0;
    left:0;
    width:100%;
  }
  .displaycat-enter-active{
    
    transition:transform .2s, opacity .2s;
    
  }
  .displaycat-leave-active{
    transition: transform .4s , opacity .2s;
  }

  .displaycat-enter{
    opacity:0;
    transform:translateY(-20px); 
  }
  .displaycat-leave-to{
    opacity:0;
    transform:translateY(-20px);
    z-index: 1;
  }

  .spacer{
    height: 50px;
    margin: 0 0 -50px 0;
    /* margin: 20px 0 -50px 0; use this if you want #container to have a 'bottom padding', in this case of 20px */
    background: transparent;
  }

</style>
