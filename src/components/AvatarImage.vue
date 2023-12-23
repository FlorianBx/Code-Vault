<script setup lang="ts">
const { width, height, src } = defineProps({
	width: {
		type: String,
		default: "w-5",
	},
	height: {
		type: String,
		default: "h-5",
	},
	src: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<img :class="[width, height, 'inline-block rounded-md']" :src="src" alt="" />
</template>
