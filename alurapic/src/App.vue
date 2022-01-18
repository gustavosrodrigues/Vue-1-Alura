<template>    
    <div class="corpo">
        <h1 class="centralizado">{{ titulo1 }}</h1>
        <div class="container">            
            <ul class="lista__fotos">
                <li class="lista__fotos__item" v-for="imagem of imagens" :key="imagem.alt">
                    <meu-painel v-bind:titulo="imagem.titulo">
                        <img v-bind:src="imagem.url" v-bind:alt="imagem.alt">
                    </meu-painel>                                  
                </li>            
            </ul>
        </div>        
    </div>
</template>

<script>
export default {
    data () {
        return {
            titulo1: 'Alurapic',
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

html, .painel {
    background-color: darkkhaki;
}

img {
    max-width: 100%;    
}

.corpo {
    font-family: Helvetica, sans-serif;        
}

.container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto
}

.centralizado {
    padding: 2em;
    text-align: center;
}

.lista__fotos {
    list-style: none;        
    /* text-align: center; */
    
    display: flex;
    justify-content: center;    
    flex-wrap: wrap;
    
}

/* .lista__fotos .lista__fotos__item {
    display: inline-block;
} */

.lista__fotos__item {
    margin-bottom: 1rem;   
}
</style>
