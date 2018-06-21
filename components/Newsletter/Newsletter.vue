<template>
    <form class="newsletter">
        <div>
            <input class="newsletter__input" type="mail" placeholder="Sign In to our Newsletter">
            <button class="newsletter__btn"><i class="fas fa-paper-plane"></i></button> <br>
        </div>
        <div class="newsletter__acceptance">
            <input id="check" class="check" type="checkbox">
            <label for="check" class="check__label">
                <span class="check__btn"></span>
            </label>
            <span class="check__text">i agree to the terms of use and privacy policy</span> 
        </div>
        
    </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.newsletter{
    padding:6rem;
    width:100%;
    @media screen and (max-width: 633px){
            padding:4rem;
        }
    &__acceptance{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:2rem;
        
    }
    &__input{
        padding:1rem 4rem;
        border-radius:$border-radius;
        outline:none;
        border:none;
        width:50rem;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
        transition: all .2s;
        @media screen and (max-width: 833px){
            width:30rem;
        }
        @media screen and (max-width: 633px){
            width:25rem;
        }
        @media screen and (max-width: 339px){
            width:20rem;
        }
        &:focus{
            outline: none;
            box-shadow: .2rem .4rem 2.6rem $color-one;
            & + button{
                box-shadow: .2rem .4rem 2.6rem $color-white;
            } 
        }
    }
    &__btn{
        padding:1rem 2rem;
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
        @media screen and (max-width: 296px){
            padding:1rem 1rem; 
        }
    }
}
.check{
    display:none;
    &__label{
        margin-right:1rem;
    }

    &__btn{
        display: inline-block;
        width:1.7rem;
        height:1.7rem;
        border:3px solid $color-white;
        cursor: pointer;
        border-radius:50%;
        position:relative;
        &::after{
            content:"";
            width:.8rem;
            height:.8rem;
            display: block;
            border-radius: $border-radius;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            background: $color-white;
            opacity:0;
            transition: opacity .2s;
        }
    }

    &__text{
        color:$color-white;
        text-transform: uppercase;
        font-size:1rem;
        font-weight: bold;
        letter-spacing: 1px;
    }
    &:checked ~ &__label &__btn::after{
        opacity:1
    }
}

</style>


