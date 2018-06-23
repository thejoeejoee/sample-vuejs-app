import Vue from 'vue';
import App from './App';
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);


new Vue({
    el: '#app',
    store,
    render: h => h(App),
});