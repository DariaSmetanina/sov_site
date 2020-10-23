import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {router} from './router';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faChevronUp,
    faTrashAlt,
    faCheckSquare,
    faEdit,
    faPlusSquare,
    faCommentAlt,
    faFlag,
    faEnvelope,
    faPhone
} from '@fortawesome/free-solid-svg-icons';


library.add(faChevronUp, faTrashAlt, faCheckSquare, faEdit, faPlusSquare, faCommentAlt, faFlag, faEnvelope, faPhone);


Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
