import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CineComponent from './components/CineComponent.vue'
import MusicaComponent from './components/MusicaComponent.vue'
import CicloVida from './components/CicloVida.vue'
import DirectivasComponent from './components/DirectivasComponent.vue'
import ParImpar from './components/ParImpar.vue'
const myRoutes = [
    {path:"/", component: HomeComponent},
    {path: "/cine", component: CineComponent},
    {path:"/musica", component: MusicaComponent},
    {path:"/ciclovida", component: CicloVida},
    {path:"/directivas", component: DirectivasComponent},
    {path:"/parimpar", component: ParImpar}
]

// CREAMOS UNA VARIABLE PARA EL router INDICANDO EL TIPO DE NAVEGACION Y LAS RUTAS

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

// LA CONSTANTE ROUTER ES LA QUE UTILIZARA EL FICHERO main.js 
// DEBEMOS EXPORTARLA PARA QUE SEA UTILIZADA

export default router;