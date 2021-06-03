import Vuex from 'vuex';

import detail from './modules/detail';

const modules = {
    detail
};

const store = new Vuex.Store({
    modules,
    actions: {
        async resetState () {
            for (const module of Object.keys(modules)) {
                await store.dispatch(`${module}/resetState`);
            }
        }
    }
});

export default store;
