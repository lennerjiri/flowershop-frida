<template>
	<div id="app">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/app/Header.vue';
import Footer from '@/components/app/Footer.vue';

export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
	beforeCreate() {
		const data = require('./assets/data/flowers.json');
		this.$store.commit('setFlowers', data);
	},
};
</script>
