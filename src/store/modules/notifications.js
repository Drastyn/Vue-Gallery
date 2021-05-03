const notifications = {
    namespaced: true,
    state: {
        notification: '',
    },
    mutations: {
        setNotification(state, notification) {
            state.notification = notification;
        },
        clearNotification(state) {
            state.notification = '';
        },
    },
    actions: {
        loginMessage({commit}, message) {
            commit('setNotification', {
                title: message,
                contentClass: 'flash-message-text',
                icon: '/logo.png',
            })
        },
        successMessage({ commit }, message) {
            commit('setNotification', {
                title: message,
                contentClass: 'flash-message-text',
                icon: '/logo.png',
            });
        },
        errorMessage({ commit }, error) {
            commit('setNotification', {
                title: error,
                contentClass: 'flash-message-text',
                icon: '/logo.png',
            });
        },
        cleanNotification({ commit }) {
            commit('clearNotification');
        }
    }
}

export default notifications;