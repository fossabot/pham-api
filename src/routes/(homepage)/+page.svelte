<script lang="ts">
	import type { PageData } from './$types';
	import Request from './Request.svelte';
	import Response from './Response.svelte';

	export let data: PageData;
</script>

<main>
	<h1>pham-api.alexanderliu.dev</h1>
	<div class="grid">
		<div>
			<img src={data.photo.src} alt="pham" />
		</div>
		<div class="api">
			<Request />
			<Response src={data.photo.src} />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 24px;
	}

	h1 {
		margin: 0 0 16px 0;
		font-weight: 450;
		font-size: 18px;
		letter-spacing: -0.014em;
		line-height: 25px;
	}

	.grid {
		display: grid;
		@media (min-width: 900px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (min-width: 1200px) {
			grid-template-columns: 1.5fr 1fr;
		}
		gap: 32px;
	}

	img {
		width: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	.api {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
