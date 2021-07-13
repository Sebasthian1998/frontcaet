import Vue from 'vue';
import Vuex from 'vuex';
import {autorStore} from './autor'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        autorStore
    },
});

export default store;