<script setup lang="ts">
import { useIcons } from "@/composables/useIcons";

const emit = defineEmits([
	"delete-snippet",
	"edit-snippet",
	"toggle-read-more",
]);

const deleteSnippet = () => emit("delete-snippet");
const editSnippet = () => emit("edit-snippet");
const { TrashIcon, PencilIcon } = useIcons();
</script>

<template>
	<div class="flex items-center gap-4">
		<button class="text-danger opacity-100" @click="deleteSnippet">
			<TrashIcon width="w-4" height="h-4" />
		</button>
		<button class="text-secondary opacity-60" @click="editSnippet">
			<PencilIcon width="w-4" height="h-4" />
		</button>
	</div>
</template>
