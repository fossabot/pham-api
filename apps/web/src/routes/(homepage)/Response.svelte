<script lang="ts">
	export let src: string;
</script>

<div class="response">
	<span class="label">Response</span>
	<div class="code-parent">
		<code>
			<span>{'{'}</span>
			<span class="indent">src: "{src}"</span>
			<span>{'}'}</span>
		</code>
	</div>
</div>

<style lang="scss">
	.response {
		display: grid;
		border-radius: 8px;
		background-color: var(--sand2);
		border: 1px solid var(--sand6);
		overflow: hidden;
	}

	.label {
		padding: 12px;
		border-bottom: 1px solid var(--sand6);
		background-color: var(--sand3);
		text-transform: uppercase;
	}

	.code-parent {
		padding: 12px;
		overflow-x: auto;
	}

	code {
		width: max-content;

		span {
			display: block;
			white-space: nowrap;
		}

		.indent {
			margin-left: 12px;
		}
	}
</style>
