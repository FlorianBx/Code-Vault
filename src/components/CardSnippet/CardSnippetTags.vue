<script setup lang="ts">
const { tags } = defineProps({
	tags: {
		type: String,
		required: true,
	},
});

const splitTags = (tags: string) => tags.split(",");
</script>
<template>
	<div class="flex flex-wrap gap-1 h-5">
		<p
			v-for="(tag, index) in splitTags(tags)"
			:key="index"
			class="bg-vue px-1.5 rounded text-sm"
		>
			{{ tag }}
		</p>
	</div>
</template>
