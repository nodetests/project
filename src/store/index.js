import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http/'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        name: "",
    },
    mutations: {
        'SET_LIST' (state, date) {
            state.list = date
        }
    },
    actions: {
        async getList({ commit }, id) {
            let res = await axios.req(`/api/topic/${id}`)
            commit('SET_LIST', res.data)
        }
    },
})