<template>    
    <div class="corpo">

        <nav>
            <ul>
                <li v-for='route of routes' :key='route.titulo'>
                    <router-link :to="route.path ? route.path : '/'">
                        {{ route.titulo }}                       
                    </router-link>
                </li>                
            </ul>
        </nav>
        <router-view></router-view>

    </div>
</template>

<script>
    
    import { routes } from './routes'
    export default {    
        
        data () {

            return {
                routes
            }
        }
    }
</script>

<style>

    .corpo {
        font-family: Helvetica, sans-serif;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto      
    }

    p {
        text-align: center;
    }
</style>
