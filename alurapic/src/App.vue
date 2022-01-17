<template>    
    <div>
        <h1>{{ titulo1 }}</h1>
        <ul >
            <li v-for="imagem of imagens" :key="imagem.alt">
                <img v-bind:src="imagem.url" v-bind:alt="imagem.alt">
            </li>            
        </ul>        
    </div>
</template>

<script>
export default {
    data () {
        return {
            titulo1: 'Metroide',
            imagens: []
        }
    },

    created() {

        this.$http.get('http://localhost:3000/v1/fotos')
            .then(res => res.json())
            .then(fotos => this.imagens = fotos);
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

ul {
    list-style: none;
}

h1 {
    background-color: orange;
    padding: 2em 0
}

img {
    padding: 1em;    
}
</style>
