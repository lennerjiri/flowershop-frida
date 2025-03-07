<template>
	<div
		v-if="
			!(
				Number(this._id) >
					this.$store.state.flowers.length ||
				Number(this._id) <= 0 ||
				Number.isNaN(Number(this._id))
			)
		"
		class="FlowerInfo"
	>
		<Carousel
			v-if="
				!(
					Number(this._id) >
						this.$store.state.flowers.length ||
					Number(this._id) <= 0 ||
					Number.isNaN(Number(this._id))
				)
			"
		/>
		<Info class="FlowerInfo-Info" />
	</div>
</template>
<script>
import Carousel from '../components/flowerInfo/Carousel.vue';
import Info from '../components/flowerInfo/Info.vue';
export default {
	name: 'FlowerInfo',
	components: {
		Carousel,
		Info,
	},
	props: {
		_id: String,
	},

	created() {
		const id = Number(this._id);

		if (
			id > this.$store.state.flowers.length ||
			id <= 0 ||
			Number.isNaN(id)
		) {
			this.$router.push('/kvetiny');
		}
		return this._id;
	},
};
</script>
