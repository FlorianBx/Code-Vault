<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
  },
  btnStyle: {
    type: String,
    default: "primary",
    validator: (value: string): boolean =>
      ["primary", "secondary"].includes(value),
  },
});
</script>

<template>
  <button
    :type="type"
    :class="[
      btnStyle === 'primary' ? 'shadow-neumorphic hover:bg-vue text-white' : '',
      btnStyle === 'secondary'
        ? 'shadow-inner-neumorphic hover:bg-white text-primary hover:text-black'
        : '',
      'w-28 rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    ]"
  >
    <slot />
  </button>
</template>
