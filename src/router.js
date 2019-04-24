import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/pages/Inicio'
import Comprar from './components/pages/Comprar.vue'
import Vender from './components/pages/Vender.vue'
import Noticias from './components/pages/Noticias.vue'
import Entrar from './components/pages/Entrar'
import Cadastrar from './components/pages/Cadastrar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/comprar',
        component: Comprar
    }, {
        path: '/vender',
        component: Vender
    }, {
        path: '/noticias',
        component: Noticias
    }, {
        path: '/entrar',
        component: Entrar
    }, {
        path: '/cadastrar',
        component: Cadastrar
    }]
})