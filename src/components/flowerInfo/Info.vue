<template>
	<div class="info">
		<div class="info-heading">
			<h6>informace</h6>
			<div class="info-heading-underline"></div>
		</div>
		<div class="info-flowerinfo">
			<h1 class="info-flowerinfo-name">
				{{ imgs.name }}
			</h1>
			<p class="info-flowerinfo-text">
				{{ imgs.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Info',
	computed: {
		imgs() {
			const id = Number(this.$route.params._id);
			return this.$store.state.flowers[id - 1];
		},
	},
};
</script>
