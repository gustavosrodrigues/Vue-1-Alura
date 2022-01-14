<template>    
    <div>
        <h1>{{ titulo1 }}</h1>
        <ul >
            <li v-for="imagem of imagens" :key="imagem.alt">
                <img v-bind:src="imagem.link" v-bind:alt="imagem.alt">
            </li>            
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            titulo1: 'Metroid',
            imagens: [
                {
                    link: 'https://images.nintendolife.com/2ba45e322a8c5/dread-wallpaper1.large.jpg',
                    alt: 'Samus Aran in armor with shadow figure in background'
                },
                {
                    link: 'https://sm.ign.com/ign_br/blogroll/default/metroid-dread-1625074657027-1635388627290_xzs9.jpg',
                    alt: 'Samus Aran in armor with robots in background'
                }                    
            ]
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
