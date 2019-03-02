import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.$ = require('jquery')
window.JQuery = require('jquery')
import 'bootstrap';


import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue,VueAwesomeSwiper);
new Vue({
  render: h => h(App),
}).$mount('#app')
