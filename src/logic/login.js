import axios from 'axios';

const petition = axios.create({
    baseURL: process.env.VUE_APP_API_URL
});

export default {
    post(user) {
        return petition.post('login', user)
        .then(response => (response))
        .catch(error => console.log(error));
    }
}