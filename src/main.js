// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookies from '@/util/cookies'
import Requests from '@/util/requests'

// Import Plugins/Resources
import VueResource from 'vue-resource'

// Import Configs
import Config from '@/config/config'

// Import CSS
import './../node_modules/bootstrap/scss/bootstrap.scss'
import '@/styles/main.scss'

// Declare Vue.uses
Vue.use(VueResource)

// Vue Prototypes to use as global variables
Vue.prototype.$config = Config
Vue.prototype.$cookies = Cookies
Vue.prototype.$requests = Requests

// Vue Configs
Vue.http.options.root = '/root'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
