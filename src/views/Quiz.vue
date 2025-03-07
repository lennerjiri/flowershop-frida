<template>
	<div class="quizContainer">
		<!-- Banner -->
		<div class="imgContainer">
			<img
				class="imgContainer__img"
				src="@/assets/pageAssets/banners/quizBanner.png"
				alt=""
			/>
			<div class="imgContainer__headingContainer">
				<h1 class="imgContainer__heading">
					Květinový <span>kvíz</span>
				</h1>
			</div>
		</div>
		<!-- Subtitle -->
		<Subtitle :title="`KVÍZ`" />

		<!-- Alert -->
		<Alert />
		<!-- Quiz components -->
		<QuizContent
			v-if="!this.$store.state.quizAnswers"
		/>
		<QuizResults v-if="this.$store.state.quizAnswers" />
	</div>
</template>

<script>
// main
import QuizContent from '@/components/quiz/QuizContent.vue';
import QuizResults from '@/components/quiz/QuizResults.vue';
// sub
import Subtitle from '@/components/quiz/Subtitle.vue';
import Alert from '@/components/quiz/Alert.vue';

export default {
	name: 'Quiz',
	components: {
		QuizContent,
		QuizResults,
		Subtitle,
		Alert,
	},
};
</script>
