import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/scss/main.scss'
Vue.component('ValComp', require('./components/ValComp.vue').name);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
