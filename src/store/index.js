import { createStore } from 'vuex'
import { _getOrgs } from '../api/orgs'

export default createStore({
  state: {
    organizations: [],
    error: "",
    orgDetail: {},
    hasSearched: false,
    perPage: 5
  },
  mutations: {
    setOrgs(state, orgs) {
      state.organizations = orgs;
    },
    setError(state, error) {
      state.error = error
    },
    setOrgDetail(state, orgDetail) {
      state.orgDetail = orgDetail
    },
    setHasSearched(state) {
      state.hasSearched = !state.hasSearched
    },
    setPerPage(state, perPage) {
      state.perPage += perPage
    }
  },
  actions: {
    getOrgs: async ({ commit }, payload) => {
      try {
        const orgs = await _getOrgs(`https://api.github.com/organizations?per_page=${payload}`)
        commit('setOrgs', orgs)
      } catch ({ message }) {
        commit('setError', message)
      }
    },
    getOrg: async ({ commit }, payload) => {
      try {
        const org = await _getOrgs(`https://api.github.com/orgs/${payload}`)
        commit('setOrgs', [org])
      } catch ({ message }) {
        commit('setError', message)
      }
    },
    getOrgDetail: async ({ commit }, payload) => {
      try {
        const orgDetail = await _getOrgs(`https://api.github.com/orgs/${payload}`)
        commit('setOrgDetail', orgDetail)
      } catch ({ message }) {
        commit('setError', message)
      }
    }
  },
  modules: {
  }
})
