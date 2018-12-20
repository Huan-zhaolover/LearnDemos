// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import './assets/css/base.css'
import './assets/css/public.css'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
