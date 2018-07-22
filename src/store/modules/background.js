/**
 *
 * This is the background state that saves the image from the hover stream
 *
 * @type {{state: {hoverStream: null}, mutations: {updateHoverStream: ((state, string))}, actions: {updateBackground: (({ commit, state }:{commit: *, state: *}, string?))}, getters: {}}}
 */
const background = {
  state: {
    hoverStream: null
  },
  mutations: {
    updateHoverStream (state, string) {
      clearTimeout(changeBackground);
      if (state.hoverStream !== string) {
        state.hoverStream = null
      }
      let changeBackground = setTimeout(() => {
        state.hoverStream = string
      }, 250)
    }
  },
  actions: {
    updateBackground ({ commit }, string) {
      if (string !== null) {
        commit('updateHoverStream', string)
      } else {
        commit('updateHoverStream', null)
      }
    }
  },
  getters: {
  }
}

export default background
