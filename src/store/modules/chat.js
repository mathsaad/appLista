import axios from "axios";

function getDefaultState () {
    return {
        persons: null
    };
}

const index = {
    namespaced: true,
    state: getDefaultState(),
    mutations: {
        RESET_STATE: (state) => {
            Object.assign(state, getDefaultState());
        },
        SET_CURRENT_ARRAY_PERSON: (state, persons) => {
            state.persons = persons;
        }
    },
    actions: {
        async resetState ({ commit}) {
            commit('RESET_STATE');
        },
        async initChat ({ commit, state }) {
            let persons;
            if (state.persons === null) {
                await axios.get( "https://my.api.mockaroo.com/mobiletest.json", {
                    headers: {
                        'X-API-Key': '82333f10'
                    }
                }).then(response => persons =  [ ...response.data ] );
                await commit('SET_CURRENT_ARRAY_PERSON', {
                    persons: [...persons]
                });
            }
        }
    },
    getters: {
        persons: state => state.persons,
    }
};

export default index;
