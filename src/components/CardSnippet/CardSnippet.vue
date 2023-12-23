<script setup lang="ts">
import { ref } from "vue";
import AvatarImage from "@/components/AvatarImage.vue";
import CardSnippetIcons from "@/components/CardSnippet/CardSnippetIcons.vue";
import CardSnippetBlocOfCode from "@/components/CardSnippet/CardSnippetBlocOfCode.vue";
import { useElapsedTime } from "@/composables/useElapsedTime.ts";

const props = defineProps({
	snippet: {
		type: Object,
		required: true,
	},
});
const readMore = ref(false);
const { title, description, tags, authorName, code } = props.snippet;
const { elapsedTime } = useElapsedTime(props.snippet.updatedAt);

const emit = defineEmits(["delete-snippet", "edit-snippet", "copy-snippet"]);

const deleteSnippet = () => emit("delete-snippet", props.snippet.id);
const editSnippet = () => emit("edit-snippet", props.snippet.id);
const copySnippet = () => emit("copy-snippet", props.snippet.code);

const splitTags = (tags: string) => tags.split(",");
const toggleReadMore = () => {
	readMore.value = !readMore.value;
	console.log(readMore.value);
};
</script>

<template>
	<div class="flex flex-col mt-8">
		<section class="relative flex flex-col gap-2">
			<div class="flex gap-2">
				<AvatarImage
					width="w-14"
					height="h-14"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				/>
				<div class="w-full">
					<h3 class="text-xl font-bold text-primary/90">{{ title }}</h3>
					<div class="flex justify-between gap-3 items-end h-8">
						<div class="flex gap-1">
							<p class="text-sm">Updated {{ elapsedTime }}</p>
							<p class="text-sm font-bold italic">by @{{ authorName }}</p>
						</div>
						<button
							v-show="!readMore"
							class="text-center font-semibold text-sm transition-color duration-300 bg-btn hover:bg-secondary hover:text-darktext rounded py-0.5 px-4 text-primary"
							@click="toggleReadMore"
						>
							Read more...
							<span class="sr-only">, {{ title }}</span>
						</button>
					</div>
				</div>
			</div>
		</section>
		<Transition
			enter-active-class="transform transition duration-900 ease-in-out"
			enter-class="-translate-y-1/2 scale-y-0 opacity-0"
			enter-to-class="translate-y-0 scale-y-100 opacity-100"
			leave-active-class="transform transition duration-600 ease-custom"
			leave-class="translate-y-0 scale-y-100 opacity-100"
			leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
		>
			<section
				v-if="readMore"
				class="flex flex-col gap-2 translate-y-0"
				:class="{ '-translate-y-10 opacity-0': !readMore }"
			>
				<div>
					<h4 class="text-sm pt-2 font-semibold text-primary/70">
						{{ description }}
					</h4>
				</div>
				<div class="flex flex-wrap gap-1">
					<p
						v-for="(tag, index) in splitTags(tags)"
						:key="index"
						class="bg-vue py-0 px-1.5 rounded text-sm"
					>
						{{ tag }}
					</p>
				</div>
				<CardSnippetIcons
					@delete-snippet="deleteSnippet"
					@edit-snippet="editSnippet"
					@toggle-read-more="toggleReadMore"
				/>
				<CardSnippetBlocOfCode :code="code" @copy-snippet="copySnippet" />
			</section>
		</Transition>
	</div>
</template>

<style scoped>
.ease-custom {
	transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
