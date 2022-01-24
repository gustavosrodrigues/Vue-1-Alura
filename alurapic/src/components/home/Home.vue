<template>    
    <div>
        <h1 class="centralizado">{{ titulo1 }}</h1>    
        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre pelo título">            
        <ul class="lista__fotos">
            <li class="lista__fotos__item" v-for="imagem of imagensComFiltro" :key="imagem.alt">
                <meu-painel v-bind:titulo="imagem.titulo">
                    <imagem-responsiva v-bind:url="imagem.url" v-bind:alt="imagem.titulo"/>
                    <meu-botao tipo="button" rotulo="REMOVER" :confirmacao="true" estilo="perigo" v-on:botaoAtivado="remove(imagem)"/>
                </meu-painel>                                  
            </li>            
        </ul>            
    </div>
</template>

<script>
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';

export default {
    
    components: {

        'meu-painel': Painel,
        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
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

    methods: {

        remove(foto) {

            alert(`${foto.titulo} removido!`)
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

.centralizado {
    padding: 2em;
    text-align: center;
}

.lista__fotos {
    list-style: none;
    display: flex;
    justify-content: center;    
    flex-wrap: wrap;
    
}

.lista__fotos__item {
    margin-bottom: 1rem;   
}

.filtro {
    width: 100%;
}
</style>
