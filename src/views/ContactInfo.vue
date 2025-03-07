<template>
	<div class="contactInfoContainer">
		<!-- Banner -->
		<div class="imgContainer">
			<img
				class="imgContainer__img"
				src="@/assets/pageAssets/banners/contactInfoBanner.png"
				alt=""
			/>
			<div class="imgContainer__headingContainer">
				<h1 class="imgContainer__heading">
					<span>Kontaktní</span> údaje
				</h1>
			</div>
		</div>
		<!-- Text / Picture box -->
		<div class="textPictureBox">
			<img
				class="textPictureBox__image"
				src="../assets/pageAssets/store/storeOpen.png"
				alt=""
			/>
			<div class="textPictureBox__textBox">
				<h4
					class="textPictureBox--textBox__heading4"
				>
					kontakty
				</h4>
				<h2
					class="textPictureBox--textBox__heading2"
				>
					Kontaktní údaje
				</h2>
				<div
					class="textPictureBox--textBox__heading3"
				>
					<font-awesome-icon
						icon="fa-solid fa-house"
					/>
					<h3>Objednávky a informace</h3>
				</div>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Jméno: Emílie Fridová
				</p>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Email:
					<a
						href="mailto:emilkaf1ridovka58@email.com"
						>emilkaf1ridovka58@email.com</a
					>
				</p>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Telefon: +420 244 352 121 2
				</p>
				<div
					class="textPictureBox--textBox__heading3"
				>
					<font-awesome-icon
						icon="fa-solid fa-house"
					/>
					<h3>Pobočka</h3>
				</div>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Ulice: Radlická 2731
				</p>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Město: Praha 5-Smíchov
				</p>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					PSČ: 150 00
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactInfo',
};
</script>
