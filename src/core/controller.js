import Vue from 'vue'
import api from '../plugins/api'

import '../assets/styles/api.css'

export default class Controller {
  constructor (App) {
    window.apiready = function () {
      // plugins
      Vue.use(api)

      return new Vue({
        el: '#app',
        render: h => h(App)
      })
    }
  }
}
