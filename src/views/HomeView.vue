<script setup lang="ts">
import { onMounted } from "vue";
import { useGetSnippets } from "../composables/useGetSnippets.ts";
import useFilter from "../composables/useFilter";
import SearchBar from "../components/SearchBar.vue";
import CardSnippet from "../components/CardSnippet.vue";
import LoadingCircle from "../components/LoadingCircle.vue";

const { snippets, fetchSnippets, isLoading, error } = useGetSnippets();
const { filteredSnippets } = useFilter(snippets);

const handleSnippetDelete = (deletedSnippetId: string) => {
	snippets.value = snippets.value.filter(
		(snippet) => snippet.id !== deletedSnippetId,
	);
};

onMounted(async () => {
	await fetchSnippets();
});
</script>

<template>
	<div v-show="error" class="text-red-300">{{ error }}</div>
	<div class="w-full justify-center">
		<SearchBar />
		<Teleport to="#modal-and-loader">
			<div v-show="isLoading" class="flex justify-center w-full blur-none">
				<LoadingCircle />
			</div>
		</Teleport>

		<section class="space-y-8 px-2 divide-y divide-btn/25">
			<div v-for="snippet in filteredSnippets" :key="snippet.id" class="w-full">
				<div>
					<CardSnippet
						:id="snippet.id"
						:title="snippet.title"
						:author-name="snippet.authorName"
						:description="snippet.description"
						:code="snippet.code"
						:tags="snippet.tags"
						:language="snippet.language.toLocaleLowerCase()"
						:created-at="snippet.createdAt"
						:updated-at="snippet.updatedAt"
						:on-delete="handleSnippetDelete"
					/>
				</div>
			</div>
		</section>
	</div>
</template>
