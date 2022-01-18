<template>    
    <div class="corpo">
        <div class="container">
            <h1 class="centralizado">{{ titulo1 }}</h1>
            <ul class="lista__fotos">
                <li class="lista__fotos__item" v-for="imagem of imagens" :key="imagem.alt">
                    <div class="painel">
                        <h2 class="painel__titulo">{{ imagem.titulo }}</h2>
                        <div class="painel__corpo">
                            <img v-bind:src="imagem.url" v-bind:alt="imagem.alt">
                        </div>
                    </div>                
                </li>            
            </ul>
        </div>        
    </div>
</template>

<script>
export default {
    data () {
        return {
            titulo1: 'Imagens',
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
    text-align: center;
}

.lista__fotos .lista__fotos__item {
    display: inline-block;
  }

.lista__fotos__item {
    margin-bottom: 1rem;   
}

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
</style>
