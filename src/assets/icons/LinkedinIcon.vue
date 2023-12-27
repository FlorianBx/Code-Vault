<script setup>
const props = defineProps({
	width: { type: String, default: "w-5" },
	height: { type: String, default: "h-5" },
});
const { width, height } = props;
</script>

<template>
	<svg :class="[width, height]" fill="currentColor" viewBox="0 0 24 24">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20.448 20.452h-3.897v-5.957c0-1.422-.025-3.252-2.198-3.252-2.199 0-2.535 1.548-2.535 3.148v6.061h-3.897V9h3.75v1.561h.054c.522-.973 1.793-2.005 3.693-2.005 3.954 0 4.688 2.609 4.688 6.004v5.892zM5.337 7.433a2.253 2.253 0 11.001-4.505 2.253 2.253 0 010 4.505zM7.119 20.452H3.221V9h3.898v11.452zM22 22H2c-.553 0-1-.448-1-1V3c0-.552.447-1 1-1h20c.553 0 1 .448 1 1v18c0 .552-.447 1-1 1z"
		></path>
	</svg>
</template>
