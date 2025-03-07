<template>
	<header>
		<div class="header--content">
			<router-link
				to="/"
				class="header--content--logo"
			>
				<div @click="iconClickLogo">
					<img
						src="@/assets/pageAssets/logo2.png"
						alt=""
					/>
					<h1>FRIDA</h1>
				</div>
			</router-link>
			<nav :class="{ open: isOpen }">
				<router-link
					to="/"
					class="content__link"
				>
					<div @click="iconClick">
						<p>Domů</p>
						<div :class="{ isActive: isHome }"></div>
					</div>
				</router-link>
				<router-link
					to="/kvetiny"
					class="content__link"
				>
					<div @click="iconClick">
						<p>kvetiny</p>
						<div :class="{ isActive: isFlowers }"></div>
					</div>
				</router-link>
				<router-link
					to="/cenik"
					class="content__link"
				>
					<div @click="iconClick">
						<p>ceník</p>
						<div :class="{ isActive: isPrice }"></div>
					</div>
				</router-link>
				<router-link
					to="/kontakty"
					class="content__link"
				>
					<div @click="iconClick">
						<p>kontakty</p>
						<div
							:class="{
								isActive: isContactInfo,
							}"
						></div>
					</div>
				</router-link>
				<router-link
					to="/kviz"
					class="content__link"
				>
					<div @click="iconClick">
						<p>Kvíz</p>
						<div :class="{ isActive: isQuiz }"></div>
					</div>
				</router-link>
			</nav>
			<div
				id="header--nav__icon"
				@click="iconClick()"
				:class="{ open: isOpen }"
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		iconClick() {
			this.isOpen = !this.isOpen;
		},
		iconClickLogo() {
			if ((this.isOpen = true)) {
				this.isOpen = false;
			}
		},
	},
	computed: {
		isHome() {
			return this.$route.path === '/' ? 'isActive' : '';
		},
		isFlowers() {
			return this.$route.path.startsWith('/kvetiny') ? 'isActive' : '';
		},
		isPrice() {
			return this.$route.path.startsWith('/cenik') ? 'isActive' : '';
		},
		isContactInfo() {
			return this.$route.path.startsWith('/kontakty') ? 'isActive' : '';
		},
		isQuiz() {
			return this.$route.path.startsWith('/kviz') ? 'isActive' : '';
		},
	},
};
</script>
