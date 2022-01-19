<template>        
    <div class="painel">
        <h2 class="painel__titulo" v-on:dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">        
            <div class="painel__corpo" v-show="visivel">
                <slot>
                </slot>
            </div>
        </transition>
    </div>    
</template>

<script>
export default {    
    props: ['titulo'],

    data () {
        return {
        
            visivel: true         
        }
    }
}
</script>

<style scoped>
/* estilo do painel */ 

    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 0.30em;
        box-shadow: 5px 5px 10px grey;
        width: 15em;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    .painel .painel__titulo {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 1em 0;
        padding: 0.75em;
        text-transform: uppercase;
    }

    * {
        box-shadow: 5px 5px 5px;
    }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s
    }
</style>
