import Vue from 'vue'
import Vuex from 'vuex'

import questions from './module-perguntas'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    questions
  }
})

export default store
