import Vuex, {Store} from 'vuex';
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import Vue from "vue";


Vue.use(Vuex);
export default new Store({
    state,
    mutations,
    actions,
    getters,
    strict: true,
})