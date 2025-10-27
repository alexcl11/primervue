import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);
app.config.globalProperties.$filters = {
    // CREAMOS DOS METODOS QUE RECIBIRAN "ALGO"
    // Y DEVOLVERAN UN RESULTADOS
    mayusculas(dato){
        return dato.toUpperCase()
    },

    getNumeroDoble(num) {
        return num*2
    }
}

app.use(router).mount('#app')
