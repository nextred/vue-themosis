// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClazyLoad from 'vue-clazy-load'
import VueOnsen from 'vue-onsenui'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueOnsen)
Vue.use(VueClazyLoad)

Vue.use(VueAxios, axios)
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  direction: 'horizontal'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
