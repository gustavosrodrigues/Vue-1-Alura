<template>        
    <div class="painel">
        <h2 class="painel__titulo"></h2>
        <div class="painel__corpo">            
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style>
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
