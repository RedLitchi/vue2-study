import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sendGrandpaMessage: Object,
        sendFatherMessage:Object,
        sendUncleMessage: Object,
        sendDaWaMessage:Object
    },
    getters: {
    },
    mutations: {
        sendGrandpa(state, val) { state.sendGrandpaMessage = val; },
        sendUncle(state, val) { state.sendUncleMessage = val; },
        sendFather(state, val) { state.sendFatherMessage = val; },
        sendDaWa(state, val) { state.sendDaWaMessage = val; }
    },
    actions: {
    },
    modules: {
    }
})
