<template>
    <div>
        <h1>Mi primer vue de viernes, que ilusion!!</h1>
        <img alt="Vue logo" src="./../assets/images/julian-alvarez.jpg">
        <h2>{{nombre}}</h2>
    </div>
</template>

<script>
    //VUE UTILIZA CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE GENERAREMOS DEBE TENER UN NOMBRE OBLIGATORIO
    //Y DEBEMOS EXPORTARLO CON DICHO NOMBRE. EL name ES LA ETIQUETA QUE 
    //UTILIZARAN OTROS COMPONENTS PARA DIBUJAR
    export default {
        name : "HolaMundo",
        data() {
            //LAS VARIABLES SON DECLARADAS EN FORMATO JSON 
            //DENTRO DE UN RETURN
            return {
                nombre: "Alex",
                edad: 25,
                miArray: [],
                miObjeto: {}
            }
        }
    }
</script>

<style scoped>
@import url('./../assets/css/estilos.css');
    h1 {color: blue}
</style>