<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pages = ref([]);

watchEffect(() => {
	pages.value = [
		{ name: "Home", href: "/", current: false },
		{ name: route.name || "Snippets", href: route.path, current: true },
	];
	console.log("pages: ", route.name);
});
</script>

<template>
	<nav class="flex p-4" aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-4">
			<li v-for="(page, index) in pages" :key="page.name">
				<div class="flex items-center">
					<svg
						v-if="index !== 0"
						class="h-5 w-5 flex-shrink-0 text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
					</svg>
					<a
						:href="index == 1 ? null : page.href"
						class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-700 cursor-pointer"
						:aria-current="page.current ? 'page' : undefined"
					>
						{{ page.name }}
					</a>
				</div>
			</li>
		</ol>
	</nav>
</template>
