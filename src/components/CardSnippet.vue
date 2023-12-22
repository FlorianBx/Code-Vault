<script setup lang="ts">
import { nextTick, watch, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useClipboard } from "@vueuse/core";
import { useElapsedTime } from "../composables/useElapsedTime.ts";
import { useDeleteSnippet } from "../composables/useDeleteSnippet.ts";
import TrashIcon from "../assets/icons/TrashIcon.vue";
import PencilIcon from "../assets/icons/PencilIcon.vue";
import CopyIcon from "../assets/icons/CopyIcon.vue";
import Prism from "prismjs";
import "../assets/highlight-syntax.css";

const props = defineProps({
	id: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		default: "",
	},
	authorName: {
		type: String,
		default: "Anonymous",
	},
	description: {
		type: String,
		default: "",
	},
	code: {
		type: String,
		default: "",
	},
	language: {
		type: String,
		default: "",
	},
	tags: {
		type: String,
		default: "",
	},
	createdAt: {
		type: String,
		default: "",
	},
	updatedAt: {
		type: String,
		default: "",
	},
	onDelete: {
		type: Function,
		default: () => {},
	},
});

const router = useRouter();
const { copy, copied } = useClipboard();
const { deleteSnippet } = useDeleteSnippet();

const readMore = ref(false);

const splitTags = (tags: string) => {
	return tags.split(",");
};

const handleEdit = (id: string) => {
	router.push(`/edit/${id}`);
};

const { elapsedTime } = useElapsedTime(props.updatedAt);

const handleDelete = async () => {
	await deleteSnippet(props.id);
	props.onDelete(props.id);
};

onMounted(async () => {
	await nextTick();
	Prism.highlightAll();
});

watch(readMore, async (newValue) => {
	if (newValue) {
		await nextTick();
		Prism.highlightAll();
	}
});
</script>

<template>
	<div class="flex flex-col mt-8">
		<section class="flex flex-col gap-2">
			<h3 class="text-2xl font-bold text-primary/90">{{ title }}</h3>
			<p class="text-sm font-semibold italic">@{{ authorName }}</p>
			<p
				v-show="!readMore"
				class="text-sm font-semibold line-clamp-3 text-primary/70"
			>
				{{ description }}
			</p>
			<div v-show="!readMore" class="flex flex-wrap gap-1">
				<p
					v-for="(tag, index) in splitTags(tags)"
					:key="index"
					class="bg-vue py-0 px-1.5 rounded text-sm"
				>
					{{ tag }}
				</p>
			</div>
			<div
				v-show="!readMore"
				ref="dropdown"
				class="flex justify-between gap-3 items-end pt-4"
			>
				<div class="flex gap-4">
					<p class="flex gap-2 items-center text-sm">
						<span
							v-if="language === 'vue'"
							class="bg-vue w-4 h-2 rounded-full"
						></span>
						<span
							v-if="language === 'react'"
							class="bg-react w-4 h-2 rounded-full"
						></span>
						<span
							v-if="language === 'angular'"
							class="bg-angular w-4 h-2 rounded-full"
						></span>
						{{ language }}
					</p>
					<p class="text-sm">Updated {{ elapsedTime }}</p>
				</div>
				<button
					class="text-center font-semibold text-sm transition-color duration-300 bg-btn hover:bg-secondary hover:text-darktext rounded py-0.5 px-4 text-primary"
					@click="readMore = !readMore"
				>
					Read more...
					<span class="sr-only">, {{ title }}</span>
				</button>
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
				<div
					v-show="!readMore"
					class="flex justify-between gap-3 items-end pt-4"
				>
					<div class="flex gap-4">
						<p class="flex gap-2 items-center text-sm">
							<span
								v-if="language === 'vue'"
								class="bg-vue w-4 h-2 rounded-full"
							></span>
							<span
								v-if="language === 'react'"
								class="bg-react w-4 h-2 rounded-full"
							></span>
							<span
								v-if="language === 'angular'"
								class="bg-angular w-4 h-2 rounded-full"
							></span>
							{{ language }}
						</p>
						<p class="text-sm">Updated {{ elapsedTime }}</p>
					</div>
					<button
						class="text-center font-semibold text-sm transition-color duration-300 bg-btn hover:bg-secondary hover:text-darktext rounded py-0.5 px-4 text-primary"
						@click="readMore = !readMore"
					>
						Read less...
						<span class="sr-only">, {{ title }}</span>
					</button>
				</div>
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
				<div class="flex justify-between gap-3 items-end pt-4">
					<div class="flex gap-4">
						<p class="flex gap-2 items-center text-sm">
							<span
								v-if="language === 'vue'"
								class="bg-vue w-4 h-2 rounded-full"
							></span>
							<span
								v-if="language === 'react'"
								class="bg-react w-4 h-2 rounded-full"
							></span>
							<span
								v-if="language === 'angular'"
								class="bg-angular w-4 h-2 rounded-full"
							></span>
							{{ language }}
						</p>
						<p class="text-sm">Updated {{ elapsedTime }}</p>
					</div>
					<div class="flex items-center gap-4">
						<button class="text-danger opacity-100" @click="handleDelete">
							<TrashIcon />
						</button>
						<button class="text-secondary opacity-60" @click="handleEdit(id)">
							<PencilIcon />
						</button>
						<button
							class="text-center font-semibold text-sm transition-color duration-300 bg-btn hover:bg-secondary hover:text-darktext rounded py-0.5 px-4 text-primary"
							@click="readMore = !readMore"
						>
							Read less...
							<span class="sr-only">, {{ title }}</span>
						</button>
					</div>
				</div>
				<div class="relative">
					<button
						type="button"
						class="absolute top-6 right-8 text-white opacity-60"
						@click="copy(code)"
					>
						<CopyIcon />
					</button>
					<div
						v-show="copied"
						class="absolute top-16 right-6 bg-vue px-4 py-1 rounded text-sm"
					>
						Copied
					</div>
					<pre
						class="p-4 text-sm block w-full bg-transparent focus:shadow-inner-neumorphic shadow-light-inner-neumorphic rounded-md border-0 py-3 text-primary ring-0 focus:ring-0 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
					><code class="language-javascript ">{{ code }}</code>
            </pre>
				</div>
			</section>
		</Transition>
	</div>
</template>

<style scoped>
.ease-custom {
	transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
