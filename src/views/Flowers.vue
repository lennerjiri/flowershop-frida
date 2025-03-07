<template>
	<div class="flowerContainer">
		<!-- Banner -->
		<div class="imgContainer">
			<img
				class="imgContainer__img"
				src="@/assets/pageAssets/banners/flowersBanner.png"
				alt=""
			/>
			<div class="imgContainer__headingContainer">
				<h1 class="imgContainer__heading">
					<span>Galerie</span> Květiny
				</h1>
			</div>
		</div>
		<!-- Subtitle -->
		<Subtitle :title="`KVĚTIN`" />
		<!-- Select button -->
		<div class="flowerContainer__selectButton">
			<div
				@click="selectBox = !selectBox"
				:class="{
					selectButton__button: true,
					selectButton__button___active:
						selectBox,
				}"
			>
				<p>{{ selectedType }}</p>
				<font-awesome-icon
					icon="fa-solid fa-angle-down"
				/>
			</div>

			<div
				class="selectButton__selectList"
				v-if="selectBox"
			>
				<div
					class="selectList__item"
					v-for="(item, index) of flowerTypes"
					:key="index"
					@click="
						(selectBox = !selectBox),
							(selectedType = item)
					"
				>
					<p>{{ item }}</p>
				</div>
			</div>
		</div>
		<!-- Flowers -->
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
	</div>
</template>

<script>
import Subtitle from '@/components/quiz/Subtitle.vue';
export default {
	name: 'Flowers',
	components: {
		Subtitle,
	},
	data() {
		return {
			expand: false,
			flowerTypes: [
				'Dovezená',
				'Pěstovaná',
				'Luční',
				'Vše',
			],
			selectedType: 'Vše',
			selectBox: false,
		};
	},
	computed: {
		buttonText() {
			return this.expand
				? 'Méně položek'
				: 'Více položek';
		},

		// calculate the quitz answers
		answers() {
			const results = [];

			if (this.selectedType !== 'Vše') {
				for (const flower of this.$store.state
					.flowers) {
					if (
						flower.origin.includes(
							this.selectedType
						)
					) {
						results.push(flower);
					}
				}
			} else {
				return this.$store.state.flowers;
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
