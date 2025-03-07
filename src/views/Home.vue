<template>
	<div class="Home">
		<div class="imgContainer">
			<img
				class="imgContainer__img"
				src="@/assets/pageAssets/banners/homeBanner.png"
				alt=""
			/>
			<div class="imgContainer__headingContainer">
				<h1 class="imgContainer__heading">
					Květiny <span>Frida</span>
				</h1>
				<p class="imgContainer__motto">
					Květiny do duše i mimo ní, krásné to
					pohledět!
				</p>
				<img
					class="imgContainer__signature"
					src="@/assets/pageAssets/signature.png"
					alt=""
				/>
			</div>
		</div>
		<AboutUs></AboutUs>
		<Service></Service>
		<Review></Review>
	</div>
</template>

<script>
import Service from '../components/home/Service.vue';
import AboutUs from '../components/home/AboutUs.vue';
import Review from '../components/home/Review.vue';
export default {
	name: 'Home',
	components: {
		Service,
		AboutUs,
		Review,
	},
};
</script>
