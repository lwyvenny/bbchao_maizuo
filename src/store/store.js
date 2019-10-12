import Vue from 'vue'
import Vuex from 'vuex'

import FilmModule from './modules/films'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film: FilmModule
  }
})

export default store
