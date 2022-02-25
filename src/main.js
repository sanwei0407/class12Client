import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $api from './api/api'

Vue.config.productionTip = false
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib-vw/mand-mobile.css'

Vue.prototype.$api = $api;

Vue.use(mandMobile);

// 路由守卫

// router.beforeEach((to,from,next)=>{
//
// })



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
