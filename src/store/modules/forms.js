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
                checkError.push('El nombre debe ser de 10 a 30 caracteres');
            }
            if(!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(entity.name)) {
                checkError.push('Nombre no permite caracteres especiales');
            }
            if(!entity.file) {
                checkError.push('Recuerde seleccionar su imagen')
            }
            commit('setErrors', checkError[checkError.length - 1]);
        },
        cleanErrors({ commit }) {
            commit('clearErrors');
        },
    }
}

export default forms;