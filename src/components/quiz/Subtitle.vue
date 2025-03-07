<template>
	<div class="subtitile">
		<p class="subtitile__title">{{ title }}</p>
	</div>
</template>

<script>
export default {
	name: 'Subtitle',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
