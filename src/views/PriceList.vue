<template>
	<div class="priceListContainer">
		<!-- Banner -->
		<div class="imgContainer">
			<img
				class="imgContainer__img"
				src="@/assets/pageAssets/banners/priceListBanner.png"
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
				src="../assets/pageAssets/store/storeIndoor.png"
				alt=""
			/>
			<div class="textPictureBox__textBox">
				<!-- class textPictureBox--long -->
				<h4
					class="textPictureBox--textBox__heading4"
				>
					ceník
				</h4>
				<h2
					class="textPictureBox--textBox__heading2"
				>
					Ceník našich služeb
				</h2>
				<div
					class="textPictureBox--textBox__heading3"
				>
					<h3>Balení</h3>
				</div>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Zabalení květin ................. 121Kč
				</p>
				<!-- <p class="textPictureBox--textBox__paragraph">Květina 2 ....................... 100Kč</p>
				<p class="textPictureBox--textBox__paragraph">Květina 3 ....................... 100Kč</p> -->
				<div
					class="textPictureBox--textBox__heading3"
				>
					<h3>Obal</h3>
				</div>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Obal květin .....................
					12Kč/papír
				</p>
				<!-- <p class="textPictureBox--textBox__paragraph">Květina 5 ....................... 100Kč</p>
				<p class="textPictureBox--textBox__paragraph">Květina 6 ....................... 100Kč</p> -->
				<div
					class="textPictureBox--textBox__heading3"
				>
					<h3>Květiny</h3>
				</div>
				<p
					class="textPictureBox--textBox__paragraph"
				>
					Zeleň ...........................
					100-1000Kč
				</p>
				<!-- <p class="textPictureBox--textBox__paragraph">Květina 8 ....................... 100Kč</p>
				<p class="textPictureBox--textBox__paragraph">Květina 9 ....................... 100Kč</p> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PriceList',
};
</script>
