<template>
    <h1 style="color: Blue">Propiedad Conmutada</h1>
    <h4>Numero: {{numero}}</h4>
    <input v-model="numero">
    <div  v-html="evaluarNumero"></div>
    <ul>
        <li v-for="game in juegosRojos" :key="game" v-html="game">

        </li>
    </ul>
    <ul>
        <li v-for="game in juegos" :key="game">
            {{game}}
        </li>
    </ul>
</template>

<script>
    export default {
        name : "PropiedadConmutada",
        computed: {
            //SE ESCRIBE COMO UN METODO PERO SE UTILIZA COMO UNA PROPIEDAD
            juegosRojos(){
                var datos = this.juegos;
                var i = 0
                for(var juego of this.juegos){
                     var juegoRojo = "<span style='color:red'>"+juego+"</span>";
                     datos[i] = juegoRojo;
                     i++;
                }
                return datos
            },
            evaluarNumero() {
                var resultado = "";
                if(this.numero %2 == 0){
                    resultado = "<span style='color:blue'>PAR</span>";
                } else {
                    resultado = "<span style='color:red'>IMPAR</span>";
                }
                return resultado
            }
        },
        data() {
            return {
                juegos: ["Parchís", "Canicas", "Luz verde, luz roja", "La galleta"],
                numero: 9,
            }
        }
    }
</script>