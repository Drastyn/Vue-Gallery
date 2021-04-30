const forms = {
    namespaced: true,
    state: {
        errors: [],
    },
    mutations: {
        setErrors(state, errors) {
            state.errors = errors;
        },
        clearErrors(state) {
            state.errors = [];
        },
    },
    actions: {
        formsValidations({ commit }, entity) {
            let checkError = [];
            if(entity.name.length < 4 || entity.name.length > 30) {
                checkError.push('Name must be have between 4 to 30 characters');
            }
            if(!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(entity.name)) {
                checkError.push('Name not be have especial characters');
            }
            if(!entity.file) {
                checkError.push('Remeber select your image')
            }
            commit('setErrors', checkError[checkError.length - 1]);
        },
        cleanErrors({ commit }) {
            commit('clearErrors');
        },
    }
}

export default forms;