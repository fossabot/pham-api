<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	export let method: string;
	export let path: string;

	$: url = new URL(path, PUBLIC_BASE_URL).toString();
</script>

<div class="request">
	<span>{method}</span>
	<span>{url}</span>
</div>

<style lang="scss">
	.request {
		padding: 12px;
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 8px;
		background-color: var(--sand2);
		border-radius: 8px;
		border: 1px solid var(--sand6);
	}
</style>
