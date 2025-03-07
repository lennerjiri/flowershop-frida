<template>
	<div class="quizResults">
		<div class="quizResultsContainer">
			<div
				class="quizResultsContainer__flowerContainer"
				v-for="(flower, index) of renderCycle"
				:key="index"
				@click="
					$router.push({
						name: 'FlowerInfo',
						params: {_id: flower._id},
					})
				"
			>
				<img
					class="flowerContainer__img"
					:src="
						require(`@/assets/clientsAssets/flowerCovers/${flower.img}`)
					"
					alt=""
				/>
				<div class="flowerContainer__subtitle">
					<p>{{ flower.name }}</p>
				</div>
			</div>
		</div>
		<div
			v-if="this.answers.length > 6"
			@click="expand = !expand"
			class="quizResults__expandButton"
		>
			{{ buttonText }}
		</div>
	</div>
</template>

<script>
import Subtitle from '@/components/quiz/Subtitle.vue';
export default {
	name: 'QuizResults',
	components: {
		Subtitle,
	},
	data() {
		return {
			expand: false,
		};
	},
	computed: {
		buttonText() {
			return this.expand
				? 'Méně položek'
				: 'Více položek';
		},

		// the data from the quitz
		quizAnswers() {
			return this.$store.state.quizFilters;
		},
		// calculate the quitz answers
		answers() {
			const results = [];
			for (const flower of this.$store.state
				.flowers) {
				// check purpose (unless purpose is empty)
				if (this.quizAnswers.purpose) {
					if (
						!flower.purpose.includes(
							this.quizAnswers.purpose
						)
					) {
						continue;
					}
				}

				// check origin (unless origin is empty)
				if (this.quizAnswers.origin) {
					if (
						!flower.origin.includes(
							this.quizAnswers.origin
						)
					) {
						continue;
					}
				}

				// check colors (unless colors are empty)
				if (this.quizAnswers.colors.length !== 0) {
					let flag = false;
					for (const color of flower.colors) {
						if (
							this.quizAnswers.colors.includes(
								color
							)
						) {
							flag = true;
							break;
						}
					}
					if (!flag) {
						continue;
					}
				}

				// check price
				if (
					flower.price <
						this.quizAnswers.price[0] ||
					flower.price > this.quizAnswers.price[1]
				) {
					continue;
				}
				results.push(flower);
			}

			if (results.length == 0) {
				this.$store.commit('quizFail');
			}

			return results;
		},
		// allow the expand button to appear
		allowExpansion() {
			if (this.answers.length > 6) {
				return true;
			}
		},
		renderCycle() {
			if (this.answers.length > 6 && this.expand) {
				return this.answers;
			} else {
				return this.answers.slice(0, 6);
			}
		},
	},
};
</script>
