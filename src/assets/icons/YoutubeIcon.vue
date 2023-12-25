<script setup>
const props = defineProps({
	width: { type: String, default: "w-5" },
	height: { type: String, default: "h-5" },
});
</script>

<template>
	<svg
		:class="[props.width, props.height]"
		fill="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
		></path>
	</svg>
</template>
