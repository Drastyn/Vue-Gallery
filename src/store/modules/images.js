import ImagesLogic from '@/logic/images';

const images = {
    namespaced: true,
    state: {
        images: [],
        image: {},
    },
    mutations: {
        setHeaders(state, rootState) {
            state.headers = {
                "Content-Type": "application/json",
                "Accpet": "application/json",
                "Authorization": rootState.token,
            };
        },
        setImages(state, images) {
            state.images = images;
        },
        setImage(state, image) {
            state.image = image;
        },
        clearImages(state) {
            state.images = [];
        },
        clearImage(state) {
            state.image = {};
        },
    },
    actions: {
        getImages({commit, rootState, state}, params) {
            commit('setHeaders', rootState);
            return new Promise((resolve, reject) => {
                ImagesLogic.fetchImages(params, state.headers)
                .then(response => {
                    commit('setImages', response.data);
                    resolve(response);
                })
                .catch(error => reject(error));
            })
        },
        getImage({commit, rootState, state}, token) {
            commit('setHeaders', rootState);
            return new Promise((resolve, reject) => {
                ImagesLogic.get(token, state.headers)
                .then(response => {
                    commit('setImage', response);
                    resolve(response);
                })
                .catch(error => reject(error));
            })
        },
        postImage({commit, rootState, state}, image) {
            commit('setHeaders', rootState);
            return new Promise((resolve, reject) => {
                ImagesLogic.post(image, state.headers)
                .then(response => {
                    commit('setImage', response);
                    resolve(response);
                })
                .catch(error => reject(error));
            })
        },
        cleanImages({commit}) {
            commit('clearImages');
        },
        cleanImage({commit}) {
            commit('clearImage');
        }
    },
}

export default images;