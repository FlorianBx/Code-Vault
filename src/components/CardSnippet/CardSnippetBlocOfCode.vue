<script setup lang="ts">
import { onMounted } from "vue";
import { useIcons } from "@/composables/useIcons.ts";
import "@/assets/highlight-syntax.css";

const props = defineProps({
	code: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(["copy-snippet"]);
const { CopyIcon } = useIcons();

onMounted(() => {
	Prism.highlightAll();
});

const copySnippet = () => {
	emit("copy-snippet", props.code);
};
</script>

<template>
	<div class="relative">
		<button
			type="button"
			class="absolute top-6 right-8 text-white opacity-60"
			@click="copySnippet"
		>
			<CopyIcon />
		</button>
		<pre
			class="p-4 text-sm block w-full bg-transparent focus:shadow-inner-neumorphic shadow-light-inner-neumorphic rounded-md border-0 py-3 text-primary ring-0 focus:ring-0 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
		>
      <code class="language-javascript">{{ code }}</code>
    </pre>
	</div>
</template>
