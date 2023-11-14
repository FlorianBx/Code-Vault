<script setup lang="ts">
defineProps({
  ariaLabel: {
    type: String,
    default: "My social profile",
  },
  customUrl: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="ariaLabel"
    :href="customUrl"
    class="flex items-center justify-around gap-2 rounded-md bg-button transition-all duration-150 hover:-translate-y-1 px-6 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
  >
    <slot name="image"></slot>
    <div class="hidden md:block">
      <slot name="name"></slot>
    </div>
  </a>
</template>
