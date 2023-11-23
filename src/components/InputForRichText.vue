<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import Prism from "prismjs";
import EyeIcon from "../assets/icons/EyeIcon.vue";
import EyeIconClosed from "../assets/icons/EyeIconClosed.vue";
import "../assets/highlight-syntax.css";
defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
const showPreview = ref(false);
const emit = defineEmits(["update:modelValue"]);

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  if (target) {
    emit("update:modelValue", target.value);
  }
}

const handlePreview = () => {
  showPreview.value = !showPreview.value;
};

watch(showPreview, async () => {
  if (showPreview.value) {
    await nextTick();
    Prism.highlightAll();
  }
});
</script>

<template>
  <div>
    <label
      :for="label.toLocaleLowerCase()"
      class="block text-sm font-medium leading-6 text-primary"
      >{{ label }}</label
    >
    <div class="relative mt-2">
      <button
        v-if="!showPreview"
        type="button"
        class="absolute right-6 top-1 p-4 z-40 text-emerald-300"
        @click="handlePreview"
      >
        <EyeIcon />
      </button>
      <button
        v-if="showPreview"
        type="button"
        class="absolute right-6 top-1 p-4 z-40 text-red-300"
        @click="handlePreview"
      >
        <EyeIconClosed />
      </button>
      <textarea
        v-show="!showPreview"
        :id="label.toLocaleLowerCase()"
        rows="6"
        :name="label.toLocaleLowerCase()"
        :type="type"
        :required="required"
        class="block w-full bg-transparent focus:shadow-inner-neumorphic shadow-light-inner-neumorphic rounded-md border-0 py-3 text-primary ring-0 focus:ring-0 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
        :value="modelValue"
        @input="handleInput"
      />
      <div v-show="showPreview" class="p-4">
        <pre><code class="language-javascript text-sm">{{ modelValue }}</code></pre>
      </div>
    </div>
  </div>
</template>
