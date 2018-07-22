import Vue from 'vue'
import Cookies from '@/util/cookies'

/**
 *
 * This is the Search State, this will fetch and save the results from Twitch API
 *
 * @type {{state: {searchQuery: string, streams: Array}, mutations: {updateSearchQuery: ((state, string)), updateStreamsList: ((state, streams))}, actions: {searchStreams: (({ commit, state }:{commit: *, state: *})), cleanStreams: (({ commit, state }:{commit: *, state: *}))}, getters: {getSearchQuery: ((state))}}}
 */
const search = {
  state: {
    searchQuery: '', // Here we can store the search query
    streams: [] // Here we can store the streams that we receive
  },
  mutations: {
    updateSearchQuery (state, string) {
      state.searchQuery = string
    },
    updateStreamsList (state, streams) {
      this.dispatch('updateSearch', false)
      state.streams = streams
    }
  },
  actions: {
    searchStreams ({ commit, state }) {
      const apiKey = Vue.prototype.$config.twitch.apiKey
      commit('updateStreamsList', [])
      this.dispatch('updateSearch', true)
      let params = {
        query: state.searchQuery,
        client_id: apiKey,
        limit: (Cookies.getCookie('searchLength') ? Cookies.getCookie('searchLength') : 10)
      }
      Vue.prototype.$requests.get('search/streams', params).then((response) => {
        if (response.data.streams.length !== 0) {
          commit('updateStreamsList', response.data.streams)
        } else {
          commit('updateStreamsList', null)
        }
      }).catch(() => {
        // TODO: Redirect to a maintenance state or a error page.
        commit('updateStreamsList', null)
      })
    },
    cleanStreams ({ commit }) {
      commit('updateSearchQuery', '')
      commit('updateStreamsList', [])
    }
  },
  getters: {
    getSearchQuery (state) {
      return state.searchQuery
    }
  }
}

export default search
