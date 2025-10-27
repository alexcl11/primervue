<template>
    <div>
        <h1>Par o Impar</h1>
        <hr>
        <label>Introduza el numero: </label>
        <input type="number" v-model="numero" />
        <button @click="aleatorio">Generar numero aleatorio</button>
        <hr>
        
        <h3 v-if="numero%2 == 0">Par</h3>
        <h3 v-else>Impar</h3>
    </div>
</template>

<script>
    export default {
        name: "ParImpar",
        data() {
            return {
                numero: 1,
            }
        },
        methods: {
            aleatorio(){
                this.numero = parseInt(Math.random()*100);
            },
            
        }
    }
</script>

