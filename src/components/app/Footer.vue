<template>
	<footer>
		<div class="footer--content">
			<div class="footer--content__column">
				<h2>zákaznické služby</h2>
				<router-link
					to="/kontakty"
					class="content__link"
				>
					<p>Kontakt</p>
				</router-link>
				<router-link
					to="/kontakty"
					class="content__link"
				>
					<p>Objednávka na Míru</p>
				</router-link>
			</div>
			<div class="footer--content__column">
				<h2>společnost</h2>
				<router-link
					to="/#aboutus"
					class="content__link"
				>
					<p>O nás</p>
				</router-link>
				<router-link
					to="/kontakty"
					class="content__link"
				>
				</router-link>
			</div>
			<div class="footer--content__column">
				<h2>sociální sítě</h2>
				<a href="https://www.instagram.com/?hl=en">Instagram</a>
				<a href="https://www.facebook.com/">Facebook</a>
				<a href="https://www.pinterest.com/">Pinterest</a>
			</div>
			<div class="footer--content__column">
				<h2>stránka</h2>
				<router-link
					to="/"
					class="content__link"
				>
				</router-link>
				<router-link
					to="/kvetiny"
					class="content__link"
				>
					<p>Galerie</p>
				</router-link>
				<router-link
					to="/cenik"
					class="content__link"
				>
					<p>Služby a Ceník</p>
				</router-link>
				<router-link
					to="/kontakty"
					class="content__link"
				>
					<p>Kontakty</p>
				</router-link>
			</div>
		</div>
		<div class="footer--divider"></div>
		<div class="footer--copyright">
			<p>© 2025 Frida</p>
			<p>Developed by team SSPS</p>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>
