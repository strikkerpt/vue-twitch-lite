import Vue from 'vue'
import Vuex from 'vuex'
import Search from '@/store/modules/search'
import Loading from '@/store/modules/loading'
import Background from '@/store/modules/background'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Search,
    Loading,
    Background
  }
})

export default store
