import axios from 'axios';

const petition = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

export default {
    fetchImages(params) {
        return petition.get(`images?pagina=${params.page}`)
        .then(response => (response.data))
        .catch(error => console.log(error));
    },
    get(token) {
        return petition.get(`images/${token}`)
        .then(response => (response.data))
        .catch(error => console.log(error));
    },
    post(image) {
        return petition.post(`upload`, image)
        .then(response => (response.data))
        .catch(error => console.log(error));
    },
}