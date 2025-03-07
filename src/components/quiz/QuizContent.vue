<template>
	<section class="quizContentContainer">
		<div
			class="quizContentContainer__questionsContainer"
		>
			<!-- Question 1 -->
			<div class="questionsContainer__question">
				<Subtitle :title="`1. OTÁZKA`" />
				<h2 class="question__heading">
					Účel koupě květiny
				</h2>
				<ul class="question__options">
					<li
						class="options__option"
						v-for="(
							flowerPurpose, index
						) of flowerPurposes"
						:key="index"
						@click="selectPurpose(index)"
					>
						<div class="option__button">
							<div
								class="button__select"
								v-if="purpose === index"
							></div>
						</div>
						<p class="option__text">
							{{ flowerPurpose }}
						</p>
					</li>
				</ul>
			</div>

			<!-- Question 2 -->
			<div class="questionsContainer__question">
				<Subtitle :title="`2. OTÁZKA`" />
				<h2 class="question__heading">
					Zvolte druh květiny
				</h2>
				<ul class="question__options">
					<li
						class="options__option"
						v-for="(
							flowerOrigin, index
						) of flowerOrigins"
						:key="index"
						@click="selectOrigin(index)"
					>
						<div class="option__button">
							<div
								class="button__select"
								v-if="origin === index"
							></div>
						</div>
						<p class="option__text">
							{{ flowerOrigin }}
						</p>
					</li>
				</ul>
			</div>

			<!-- Question 3 -->
			<div class="questionsContainer__question">
				<Subtitle :title="`3. OTÁZKA`" />
				<h2 class="question__heading">
					Vyberte barvy květiny
				</h2>
				<ul class="question__options">
					<li
						class="options__option"
						v-for="(
							flowerColor, index
						) of flowerColors"
						:key="index"
						@click="selectColors(index)"
					>
						<div class="option__button">
							<div
								class="button__select"
								v-if="
									colors.includes(index)
								"
							></div>
						</div>
						<p class="option__text">
							{{ flowerColor }}
						</p>
					</li>
				</ul>
			</div>
			<!-- Cash limiter -->
			<div
				class="questionsContainer__question slider"
			>
				<Subtitle :title="`4. OTÁZKA`" />
				<h2 class="question__heading">
					Zvolte Cenu
				</h2>
				<div class="question__priceTags">
					<p>Od: {{ range[0] }} Kč</p>
					<p>Do: {{ range[1] }} Kč</p>
				</div>
				<VueSimpleRangeSlider
					class="question__creditSlider"
					style="width: 100%"
					:min="0"
					:max="1000"
					v-model="range"
				/>
			</div>
		</div>
		<div class="quizContentContainer__detailsContainer">
			<h1 class="detailsContainer__heading">
				Podrobnosti
			</h1>

			<p
				v-if="typeof purpose == `number`"
				class="detailsContainer__info--subtitle"
			>
				Účel
			</p>
			<p
				v-if="typeof purpose == `number`"
				class="detailsContainer__info"
			>
				<span>~</span>
				{{ flowerPurposes[purpose] }}
			</p>
			<p
				v-if="typeof origin == `number`"
				class="detailsContainer__info--subtitle"
			>
				Druh
			</p>
			<p
				v-if="typeof origin == `number`"
				class="detailsContainer__info"
			>
				<span>~</span>
				{{ flowerOrigins[origin] }}
			</p>
			<p
				v-if="colors.length"
				class="detailsContainer__info--subtitle"
			>
				Barvy
			</p>
			<p
				class="detailsContainer__info"
				v-for="color of colors"
				:key="colors.indexOf(color)"
			>
				<span>~</span> {{ flowerColors[color] }}
			</p>
			<p class="detailsContainer__info--subtitle">
				Cena
			</p>
			<div class="detailsContainer__priceTags">
				<p>Od: {{ range[0] }} Kč</p>
				<font-awesome-icon
					icon="fa-solid fa-arrow-right"
					class="priceTags__arrow"
				/>
				<p>Do: {{ range[1] }} Kč</p>
			</div>

			<div
				class="detailsContainer__submit"
				@click="submit"
			>
				Vyhledat!
			</div>
		</div>
	</section>
</template>

<script>
// slider library https://www.npmjs.com/package/vue-simple-range-slider
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css';
// personal
import Subtitle from '@/components/quiz/Subtitle.vue';
export default {
	name: 'QuizContent',
	components: {
		Subtitle,
		VueSimpleRangeSlider,
	},
	data() {
		return {
			purpose: undefined,
			origin: undefined,
			colors: [],

			// external
			range: [0, 1000],
		};
	},
	computed: {
		flowerPurposes() {
			return this.$store.state.flowerPurposes;
		},
		flowerOrigins() {
			return this.$store.state.flowerOrigins;
		},
		flowerColors() {
			return this.$store.state.flowerColors;
		},
	},

	methods: {
		selectPurpose(index) {
			if (this.purpose == index) {
				this.purpose = undefined;
			} else {
				this.purpose = index;
			}
		},
		selectOrigin(index) {
			if (this.origin == index) {
				this.origin = undefined;
			} else {
				this.origin = index;
			}
		},
		selectColors(index) {
			if (this.colors.includes(index)) {
				this.colors.splice(
					this.colors.indexOf(index),
					1
				);
			} else {
				this.colors.push(index);
			}
		},

		submit() {
			const colorNames = [];
			for (let i = 0; i < this.colors.length; i++) {
				colorNames.push(
					this.flowerColors[this.colors[i]]
				);
			}

			this.$store.commit('addQuizFilters', {
				purpose: this.flowerPurposes[this.purpose],
				origin: this.flowerOrigins[this.origin],
				colors: colorNames,
				price: this.range,
			});
		},
	},
};
</script>
