<template>
	<div class="Services">
		<div class="Services-list">
			<div class="Services-list-headings">
				<div
					class="Services-list-headings-typeHeading"
				>
					<h6>služby</h6>
					<div></div>
				</div>
				<h1 class="Services-list-headings-text">
					Jaké služby nabízíme ?
				</h1>
			</div>
			<div class="Services-list-text">
				<div class="Services-list-text-Service">
					<h3>Zabalení květin</h3>
					<p>
						Kytky Vám zabalíme a svážeme tak,
						aby co nejdéle vydrželi.
					</p>
				</div>
				<div class="Services-list-text-Service">
					<h3>Obal Květin</h3>
					<p>
						Balíme buď do papírových papírů,
						které jsou vhodné na přesun ale také
						do plastových na hezčí předání.
					</p>
				</div>
				<div class="Services-list-text-Service">
					<h3>Zeleň</h3>
					<p>
						Nabízíme nejrůznějsí květiny do vaší
						zeleně.
					</p>
				</div>
			</div>
			<router-link to="/cenik" class="content__link">
				<button class="Services-list-button">
					Více informací
				</button>
			</router-link>
		</div>
		<div class="Services-imgDiv">
			<div class="Services-imgFrame">
				<img
					src="../../assets/clientsAssets/flowerCovers/flowersPink.png"
					class="Services-img"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Services',
};
</script>

<style></style>
