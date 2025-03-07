import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Flowers from '../views/Flowers.vue';
import FlowerInfo from '../views/FlowerInfo.vue';
import PriceList from '../views/PriceList.vue';
import ContactInfo from '../views/ContactInfo.vue';
import Quiz from '../views/Quiz.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/kvetiny',
		name: 'Flowers',
		component: Flowers,
	},
	{
		path: '/kvetiny/:_id',
		name: 'FlowerInfo',
		component: FlowerInfo,
		props: true,
	},
	{
		path: '/cenik',
		name: 'PriceList',
		component: PriceList,
	},
	{
		path: '/kontakty',
		name: 'ContactInfo',
		component: ContactInfo,
	},
	{
		path: '/kviz',
		name: 'Quiz',
		component: Quiz,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
