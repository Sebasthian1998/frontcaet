import Vue from 'vue'
import axios from 'axios';
import {clientApi} from '../config/url';
const state ={
    estadoValor: 'HOLA MUNDO STORE',
    estadoObject: {},
    estadoArray:[]
}

const mutations = {
    autorValorMutation(state,response){
        Vue.set(state,'estadoValor',response);
    },
    autorObjectMutation(state,response){
        Vue.set(state,'estadoObject',response);
    },
    autorArrayMutation(state,response){
        Vue.set(state,'estadoArray',response);
    }
}

const actions = {
    autorValorAction({commit},data){
        commit('autorValorMutation',data)
    },
    autorObjectAction({commit},data){
        commit('autorObjectMutation',data)
    },
    autorArrayAction({commit}){
        axios.get(clientApi+'autor/obtenerAll').then(res=>{
            console.log(res)
            commit('autorArrayMutation',res.data)
        })
        
    }
}

export const autorStore = {
    namespaced:true,
    state,
    mutations,
    actions
}