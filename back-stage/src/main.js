import Vue from 'vue'
import App from './App.vue'
import element from "./element/index"
import router from './router'
import store from './store'
import http from 'axios'

Vue.config.productionTip = false
Vue.use(element)
Vue.prototype.$http=http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
