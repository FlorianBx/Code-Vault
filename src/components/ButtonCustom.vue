<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
});
</script>

<template>
  <button
    :type="type"
    class="rounded-md bg-vue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Save
  </button>
</template>
