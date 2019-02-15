// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import {store} from './store'

import 'bulma/css/bulma.css'

import bulmaAccordion from 'bulma-accordion/dist/js/bulma-accordion.js'
import 'bulma-accordion/dist/css/bulma-accordion.min.css'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})

bulmaAccordion.attach()
