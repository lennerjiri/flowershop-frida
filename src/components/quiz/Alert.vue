<template>
	<div class="alertConainer">
		<div class="alertConainer__divider"></div>
		<h1 class="alertConainer__alertHeading">
			{{ content[current].title }}
		</h1>
		<p class="alertConainer__alertDescription">
			{{ content[current].description }}
		</p>
		<div
			v-if="this.$store.state.quizAnswers"
			class="alertConainer__restartButton"
			@click="restartQuiz"
		>
			Restartovat Quiz
		</div>
	</div>
</template>

<script>
export default {
	name: 'Alert',
	data() {
		return {
			content: [
				{
					title: 'Nevíte si rady s výběrem té správné květiny?',
					description:
						'Náš kvíz najde přesně tu květinu, kterou hledáte!',
				},
				{
					title: 'Zde jsou výsledky vašeho kvízu!',
					description:
						'Pokud máte další otázky, neváhejte nás kontaktovat!',
				},
				{
					title: 'Nenalezeny žádné květiny odpovídající vašemu kvízu!',
					description:
						'Zkuste prosím zvolit jiné vlastnosti, nebo kontaktujte přímo naše květinářství a mi vám poradíme!',
				},
			],
		};
	},
	computed: {
		current() {
			if (
				!this.$store.state.quizAnswers &&
				!this.$store.state.quizFail
			) {
				return 0;
			} else if (
				this.$store.state.quizAnswers &&
				!this.$store.state.quizFail
			) {
				return 1;
			} else {
				return 2;
			}
		},
	},
	methods: {
		restartQuiz() {
			this.$store.commit('resetQuizFilters');
		},
	},
};
</script>
