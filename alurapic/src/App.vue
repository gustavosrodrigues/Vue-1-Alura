<template>    
    <div class="corpo">
        <h1 class="centralizado">{{ titulo1 }}</h1>
        <div class="container">
            <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre pelo título">            
            <ul class="lista__fotos">
                <li class="lista__fotos__item" v-for="imagem of imagensComFiltro" :key="imagem.alt">
                    <meu-painel v-bind:titulo="imagem.titulo">
                        <img v-bind:src="imagem.url" v-bind:alt="imagem.alt">
                    </meu-painel>                                  
                </li>            
            </ul>
        </div>        
    </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'

export default {
    
    components: {

        'meu-painel': Painel
    },

    data () {
        return {
            titulo1: 'Alurapic',
            imagens: [],
            filtro: ''
        }
    },

    computed: {

        imagensComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim() ,'i');
                return this.imagens.filter(imagem => exp.test(imagem.titulo));
            } else {
                return this.imagens;
            }
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

.filtro {
    width: 100%;
}
</style>
