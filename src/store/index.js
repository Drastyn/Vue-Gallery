import Vue from 'vue'
import Vuex from 'vuex'

import images from './modules/images';
import pagination from './modules/pagination';
import forms from './modules/forms';
import notifications from './modules/notifications';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    images: images,
    pagination: pagination,
    forms: forms,
    notifications: notifications,
  },
})

export default store;