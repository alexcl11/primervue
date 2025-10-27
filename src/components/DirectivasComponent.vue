<template>
    <div>
        <h1>Directivas Component</h1>
        <!-- <h3>{{numero}} - {{nombre}}</h3> -->
        <h3>{{$data}}</h3>

        <label>Introduce una serie: </label>
        <input type="text" v-model="serieNueva"/>
        <button @click="nuevaSerie()">Añadir</button>

        <label>Introduzca un numero: </label>
        <input type="number" v-model="numero"/>
        <label>Introduzca un nombre: </label>
        <input type="text" v-model="nombre"/>
        <h3 v-if="numero > 0">Positivo</h3>
        <h3 v-else-if="numero < 0">Negativo</h3>
        <h3 v-else>Cero</h3>
        <h3 style="color:blue" v-if="numero%2== 0">Par</h3>
        <h3 style="color:blue" v-else>Impar</h3>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "DirectivasComponent",
        data() {
            return{
                numero: 0,
                nombre: "Alejandro",
                series: ["Pokemon", "The Boys", "Los Simpson", "Doraemon"],
                serieNueva:""
            }
        },
        methods: {
            nuevaSerie() {
                this.series.push(this.serieNueva)
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }
</style>