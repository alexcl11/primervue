<template>
    <h1>Métodos Globales</h1>
    <ul>
       <li v-for="numero in numeros" :key="numero">
            Número: {{numero}}
            Doble: {{$filters.getNumeroDoble(numero)}}
        </li> 
    </ul>
    <li v-for="nombre in nombres" :key="nombre">
            Nombre en mayusculas: {{$filters.mayusculas(nombre)}}
        </li> 
    <h5 v-html="getNumeroDoble"></h5>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data(){
            return{
                numeros:[22,25,12,13,55,75,56,78,67,98,86,89,74],
                nombres: ["Valeria", "Alejandro", "Diego", "Jorge", "Marcos", "Pedro"]
            }
        }
    }
</script>