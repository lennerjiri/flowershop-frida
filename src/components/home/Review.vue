<template>
	<div class="Review">
		<div class="Review-typeHeading">
			<h6>Recenze</h6>
			<div></div>
		</div>
		<h1>Co o nás říkají naši zákazníci?</h1>
		<div class="Review-carousel">
			<p
				class="Review-carousel-controll"
				v-show="reviewNow != 0"
				@click="Move(0)"
			>
				&xlarr;
			</p>
			<div
				class="Review-carousel-content"
				v-for="review in reviews"
				:key="review.name"
				:style="[reviewNow == review.tag ? { width: '80%' } : { width: '0%' }]"
			>
				<div
					class="Review-carousel-content-img"
					:style="{
						'background-image': `url(${require(`@/assets/pageAssets/people/${review.img}`)})`,
					}"
				></div>
				<p class="Review-carousel-content-message">
					{{ review.text }}
				</p>
				<div class="Review-carousel-userinfo">
					<p class="Review-carousel-name">
						{{ review.name }}
					</p>
					<p class="Review-carousel-proffesion">
						{{ review.proffesion }}
					</p>
				</div>
			</div>
			<p
				class="Review-carousel-controll"
				v-show="reviewNow != 2"
				@click="Move(1)"
			>
				&xrarr;
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Review',
	data() {
		return {
			reviews: [
				{
					img: 'mateo.jpg',
					text: 'Se službama tohoto květinářství jsem nadmíru spokojen!',
					name: 'Mateo Ary',
					proffesion: 'Ceo of Ary Corp',
					tag: 0,
				},
				{
					img: 'maria.png',
					text: 'Gorgeous!',
					name: 'Maria Ravena',
					proffesion: 'Influencer',
					tag: 1,
				},
				{
					img: 'ito.jpg',
					text: 'Get all of my flowers here!',
					name: 'Ito Kei',
					proffesion: 'Software Engineer',
					tag: 2,
				},
			],
			reviewNow: 0,
			running: false,
		};
	},
	methods: {
		Move(Where) {
			if (this.running == false) {
				if (Where == 1) {
					this.reviewNow++;
					if (this.reviewNow == 4) this.reviewNow = 0;
					this.Moving();
					return;
				}
				this.reviewNow--;
				if (this.reviewNow == -1) this.reviewNow = 3;
				this.Moving();
				return;
			}
		},
		async Moving() {
			this.running = true;
			setTimeout(() => {
				this.running = false;
			}, 1000);
		},
	},
};
</script>

<style></style>
