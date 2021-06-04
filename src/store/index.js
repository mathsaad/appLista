import Vuex from 'vuex';

import chat from './modules/chat';
import detail from './modules/detail';

const modules = {
    chat,
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
