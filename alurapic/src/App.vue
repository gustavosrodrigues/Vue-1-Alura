<template>    
    <div>
        <h1>{{ titulo1 }}</h1>
        <img v-bind:src="imagem.link" v-bind:alt="imagem.alt">       

    </div>
</template>

<script>
export default {
data () {
    return {
        titulo1: 'Minha Imagem',
        imagem: {
            link: 'https://images.nintendolife.com/2ba45e322a8c5/dread-wallpaper1.large.jpg',
            alt: 'Samus Aran in armor'
        }        
    }
}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

img {
    max-width: 100%;
}

div {
    text-align: center;
}

h1 {
    background-color: orange;
    padding: 2em 0
}

img {
    padding: 1em;
}
</style>
