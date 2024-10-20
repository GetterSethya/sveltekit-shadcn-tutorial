<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex h-full w-full">
	<div class="flex w-[90%] md:w-1/3 m-auto">
		{@render children?.()}
	</div>
</div>
