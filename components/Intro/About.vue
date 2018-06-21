<template>
    <div class="about-wrapper">
        <div class="about">
            <div class="about__header">
                <img src="/img/about_logo.jpg" alt="" class="about__img">
                <h3 class="about__title">about us</h3>
            </div>
            <div class="about__content">
                <p class="about__content--paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at condimentum neque, vitae viverra nisl. Ut odio nisi, iaculis sit amet sagittis non, posuere vitae ligula. Phasellus maximus viverra diam et porta. Praesent vulputate diam ornare massa ornare mattis. Phasellus efficitur euismod nisi, eu sollicitudin massa elementum vitae. Aliquam egestas dolor id dolor sollicitudin consectetur. Curabitur congue metus eu mi varius consequat vitae at augue.</p>
                <p class="about__content--paragraph">Sed condimentum tellus lacus, nec finibus erat sodales vel. Suspendisse pellentesque, lorem non ullamcorper hendrerit, ligula risus aliquet felis, a rutrum diam orci eu risus. Aenean quam eros, gravida in erat eu, tincidunt ornare dui. Etiam ac mattis tellus. Integer ornare leo eget magna mattis viverra. Integer nisl justo, laoreet vitae orci sit amet, vulputate tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis elit accumsan, pharetra ligula nec, tempus diam. Quisque tempor vestibulum nisi, nec rutrum purus viverra ac. Suspendisse potenti. Nullam sagittis pharetra egestas. </p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.about-wrapper{
    height:100%;
    padding:3rem;
    width:30%;
    display:flex;
    justify-content: center;
    align-items:flex-start;
    @media screen and (max-width:1200px) {
        width:100%
    }
}

.about{
    background: $color-four;
    padding:2rem;
    width:100%;
    height:100%;

    &__title{
        color:$color-white;
        font-size:1.5rem;
        text-transform: uppercase;
    }
    &__header{
        background:$color-one;
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    &__img{
        width:5rem;
        height:auto;
        margin-right:1rem;
    }

    &__content{
        width:100%;
        margin-top:2rem;
        &--paragraph{
            font-size:1.3rem;
            color:rgba($color-black,.75);
            text-align:justify;
            padding:.5rem;
            }
        }
    }

</style>