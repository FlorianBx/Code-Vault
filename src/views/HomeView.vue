<script setup lang="ts">
import { onMounted } from "vue";
import { useGetSnippets } from "../composables/useGetSnippets.ts";
import { useDeleteSnippet } from "../composables/useDeleteSnippet.ts";
import useFilter from "../composables/useFilter";
import SearchBar from "../components/SearchBar.vue";
import CardSnippet from "@/components/CardSnippet/CardSnippet.vue";
import LoadingCircle from "../components/LoadingCircle.vue";
import { useClipboard } from "@vueuse/core";
import { useRouter } from "vue-router";

const { snippets, fetchSnippets, isLoading, error } = useGetSnippets();
const { filteredSnippets } = useFilter(snippets);
const { copy } = useClipboard();
const router = useRouter();

const handleSnippetDelete = async (deletedSnippetId: string): Promise<void> => {
	const { deleteSnippet } = useDeleteSnippet();
	await deleteSnippet(deletedSnippetId);
	snippets.value = snippets.value.filter(
		(snippet) => snippet.id !== deletedSnippetId,
	);
};

const handleSnippetCopy = (copiedSnippet: string): void => {
	copy(copiedSnippet);
};

const handleSnippetEdit = (editedSnippetId: string): void => {
	router.push(`/edit/${editedSnippetId}`);
};

onMounted(async () => {
	await fetchSnippets();
});
</script>

<template>
	<div class="w-full justify-center">
		<SearchBar />
		<Teleport to="#modal-and-loader">
			<div v-show="!error" class="text-red-300">{{ error }}</div>
			<div v-show="isLoading" class="flex justify-center w-full blur-none">
				<LoadingCircle />
			</div>
		</Teleport>

		<section class="space-y-16 sm:space-y-8 px-2 divide-y divide-btn/25">
			<div v-for="snippet in filteredSnippets" :key="snippet.id" class="w-full">
				<div>
					<CardSnippet
						:snippet="snippet"
						@delete-snippet="handleSnippetDelete"
						@edit-snippet="handleSnippetEdit"
						@copy-snippet="handleSnippetCopy"
					/>
				</div>
			</div>
		</section>
	</div>
</template>
