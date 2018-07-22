/**
 *
 * This is Loading state that saves all loadings available on the website and determinate the state of each
 *
 * @type {{state: {entryLoading: boolean, searchLoading: boolean}, mutations: {updateEntryLoading: ((state, bool)), updateSearchLoading: ((state, bool))}, actions: {updateEntry: (({ commit, state }:{commit: *, state: *}, bool?)), updateSearch: (({ commit, state }:{commit: *, state: *}, bool?))}, getters: {}}}
 */
const loading = {
  state: {
    entryLoading: true,
    searchLoading: false
  },
  mutations: {
    updateEntryLoading (state, bool) {
      state.entryLoading = bool
    },
    updateSearchLoading (state, bool) {
      state.searchLoading = bool
    }
  },
  actions: {
    updateEntry ({ commit }, bool) {
      commit('updateEntryLoading', bool)
    },
    updateSearch ({ commit }, bool) {
      commit('updateSearchLoading', bool)
    }
  },
  getters: {
  }
}

export default loading
