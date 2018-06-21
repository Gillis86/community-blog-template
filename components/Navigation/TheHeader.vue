<template>
  <header class="header">
    <div class="title">
      <nuxt-link tag="div" to="/" class="title__logo"></nuxt-link>
      <h1 class="title__text">community blog</h1>
    </div>
    <nav v-if="$route.name !== 'slug'" class="navigation">
      <ul class="navigation__list">
        <li @click="$emit('display')" class="navigation__list--item">categories</li>
      </ul>
    </nav>
    
  </header>
</template>

<script>


export default {

}
</script>


<style lang="scss" scoped>
.header{
  background: $color-one;
  width:100%;
  display: flex;
  border-radius:$border-radius $border-radius 0 0;
  justify-content:space-between;
  align-items:center;
  @media screen and (max-width:600px){
      border-radius:0px !important;
    }
  @media screen and (max-width: 710px){
    flex-direction: column
  }
}
.title{
  display:flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 710px){
    flex-direction: column;
    width:100%;
    margin-bottom:2rem;
  }
  &__logo{
    background-image: url('/img/logo.jpg');
    background-position:50% 50%;
    background-repeat: no-repeat;
    background-size:cover;
    width:12rem;
    height:12rem;
    cursor: pointer;
  }
  &__text{
    color:$color-white;
    text-transform: uppercase;
    letter-spacing:1px;
    border: 2px solid $color-white;
    padding:.7rem 1rem;
    border-radius:$border-radius;
    font-size:2.5rem;
  }
}

.navigation{
  margin-right:1rem;
   @media screen and (max-width: 710px){
    padding-bottom:2rem;
  }
  &__list{
    display:flex;
    list-style-type:none;
    &--item{
      font-size:1.5rem;
      font-weight:bold;
      cursor:pointer;
      border: 2px solid $color-white;
      padding:.7rem 1rem;
      border-radius:$border-radius;
      color:$color-white;
      letter-spacing:1px;
      text-transform:uppercase;
      &:not(:last-child){
        margin-right:1rem;
      }
    }
  }
}
</style>
