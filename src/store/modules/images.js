import ImagesLogic from '@/logic/images';

const images = {
    namespaced: true,
    state: {
        images: [],
        image: {},
    },
    mutations: {
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
        getImages({commit}, params) {
            return new Promise((resolve, reject) => {
                ImagesLogic.fetchImages(params)
                .then(response => {
                    commit('setImages', response.data);
                })
                .catch(error => reject(error));
            })
        },
        getImage({commit}, token) {
            return new Promise((resolve, reject) => {
                ImagesLogic.get(token)
                .then(response => {
                    commit('setImage', response);
                    resolve(response);
                })
                .catch(error => reject(error));
            })
        },
        postImage({commit}, image) {
            return new Promise((resolve, reject) => {
                ImagesLogic.post(image)
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