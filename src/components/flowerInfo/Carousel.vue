<template>
	<div class="carousel">
		<div class="carousel-imgs">
			<div
				v-for="(img, index) in imgs.carousel"
				:key="index"
				class="img"
				:style="[
					{
						'background-image': `url(${require(`@/assets/clientsAssets/flowerCovers/${img}`)})`,
					},
					imgNow == index
						? {width: '100vw'}
						: {width: '0vw'},
				]"
			></div>
		</div>
		<div class="carousel-controll">
			<p v-show="imgNow != 0" @click="Move(0)">
				&xlarr;
			</p>
			<p
				v-show="imgNow != carouselLenght - 1"
				@click="Move(1)"
				:style="[
					imgNow == 0
						? {position: 'absolute', right: '0'}
						: {},
				]"
			>
				&xrarr;
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Carousel',
	data() {
		return {
			imgNow: 0,
			running: false,
		};
	},

	computed: {
		carouselLenght() {
			const id = Number(this.$route.params._id);
			return this.$store.state.flowers[id - 1]
				.carousel.length;
		},
		imgs() {
			const id = Number(this.$route.params._id);
			return this.$store.state.flowers[id - 1];
		},
	},

	methods: {
		Move(Where) {
			if (this.running == false) {
				if (Where == 1) {
					this.imgNow++;
					if (this.imgNow == 5) this.imgNow = 0;
					this.Moving();
					return;
				}
				this.imgNow--;
				if (this.imgNow == -1) this.imgNow = 4;
				this.Moving();
				return;
			}
		},
		async Moving() {
			this.running = true;
			setTimeout(() => {
				this.running = false;
			}, 1500);
		},
	},
};
</script>

<style></style>
