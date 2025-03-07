import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

////// styles
import '@/assets/styles/styles.scss';

Vue.config.productionTip = false;

////// font awsome + ukazky s faHearh!
/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
	faHouse as faHouseSolid,
	faUserLarge as faUserLargeSolid,
	faArrowRight as faArrowRightSolid,
	faAngleDown as faAngleDownSolid,
} from '@fortawesome/free-solid-svg-icons';

//import {faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(
	faHouseSolid,
	faUserLargeSolid,
	faArrowRightSolid,
	faAngleDownSolid
);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

////// vue
new Vue({
	router,
	store,
	render: function (h) {
		return h(App);
	},
}).$mount('#app');
