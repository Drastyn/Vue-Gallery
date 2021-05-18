import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import LoginLogic from '../logic/login';

import images from './modules/images';
import pagination from './modules/pagination';
import forms from './modules/forms';
import notifications from './modules/notifications';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    headers: {},
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
    setHeaders(state) {
      state.headers = {
        'Content-Type': 'application/json',
        'Accpet': 'application/json',
        'Authorization': state.token,
      }
    },
  },
  actions: {
    doLogin({commit}, user) {
      return new Promise((resolve, reject) => {
        LoginLogic.post(user)
        .then(response => {
          commit('setToken', `Bearer ${response.data.token}`);
          resolve({ path: 'images_path' });
        })
        .catch(error => reject(error));
      });
    },
    doLogOut({ commit }) {
      commit('removeToken');
      commit('setHeaders');
    },
  },
  modules: {
    images: images,
    pagination: pagination,
    forms: forms,
    notifications: notifications,
  },
  plugins: [
    createPersistedState({
      paths: ['token'],
      storage: window.sessionStorage,
    })
  ]
})

export default store;