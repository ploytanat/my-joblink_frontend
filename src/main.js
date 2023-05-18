import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Vuelidate from 'vuelidate'
import 'bulma/css/bulma.css'


Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,  // add router here
  render: h => h(App),
}).$mount('#app')