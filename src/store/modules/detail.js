import router from '../../router';

function getDefaultState () {
    return {
        person: {
            photo: null,
            name: null,
            age: null,
            gender: null,
            sexualOrientation: null,
            city: null
        }
    };
}

const index = {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        RESET_STATE: (state) => {
            Object.assign(state, getDefaultState());
        },
        SET_CURRENT_PERSON: (state, person) => {
            state.person = person;
        }
    },
    actions: {
        async resetState ({ commit}) {
            commit('RESET_STATE');
        },
        async openDetail ({ commit }, detail) {
            commit('SET_CURRENT_PERSON', {
                photo: detail.photo,
                username: detail.username,
                age: detail.age,
                gender: detail.gender,
                sexualOrientation: detail.sexualOrientation,
                city: detail.city
            });
            await router.replace(`detail`);
        }
    },
    getters: {
        person: state => state.person,
    }
};

export default index;
