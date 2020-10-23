export const getters = {
  getProfile(state){
    return state.localStorage.profile
  }
}

export const mutations = {
  setProfile(state, val) {
    state.localStorage.profile.push(val)
  },
  clearProfile(state) {
    state.localStorage.profile = []
  }
}