import './css/compiler/bootstrap.css'
import './css/main.css'
import './js/main.js'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
