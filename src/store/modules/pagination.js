const pagination = {
    namespaced: true,
    state: {
        page: 1,
    },
    mutations: {
        setIncrease(state) {
            state.page += 1;
        },
        setDecrease(state) {
            state.page -= 1;
        },
        setRestart(state) {
            state.page = 1;
        },
    },
    actions: {
        increasePage({commit}) {
            commit('setIncrease');
        },
        decreasePage({commit}) {
            commit('setDecrease');
        },
        restartPage({commit}) {
            commit('setRestart');
        }
    }
}

export default pagination;