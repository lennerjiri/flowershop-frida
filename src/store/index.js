import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		flowers: [],
		flowerPurposes: [
			'Dárek',
			'Sváteční',
			'Smuteční',
			'Dekorační',
		],
		flowerOrigins: ['Luční', 'Pěstovaná', 'Dovezená'],
		flowerColors: [
			'Modrá',
			'Červená',
			'Zelená',
			'Oranžová',
			'Žlutá',
			'Fialová',
			'Hnědá',
			'Bílá',
			'Šedá',
			'Růžová',
		],
		quizFilters: {
			colors: [],
			origin: '',
			purpose: '',
			price: [],
		},
		quizAnswers: false,
		quizFail: false,
	},
	mutations: {
		addQuizFilters(state, payload) {
			state.quizFilters.colors = payload.colors;

			state.quizFilters.origin = payload.origin;

			state.quizFilters.purpose = payload.purpose;

			state.quizFilters.price = payload.price;

			state.quizAnswers = true;
		},
		resetQuizFilters(state) {
			state.quizFilters.colors = [];
			state.quizFilters.origin = '';
			state.quizFilters.purpose = '';
			state.quizFilters.price = [];

			state.quizAnswers = false;
			state.quizFail = false;
		},
		setFlowers(state, payload) {
			state.flowers = payload;
		},
		quizFail(state) {
			state.quizFail = true;
		},
	},
	actions: {},
	modules: {},
});
