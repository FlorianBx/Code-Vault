<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  code: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <div class="relative">
      <div class="relative h-72 w-full overflow-hidden rounded-lg">
        <div>
          <div class="h-full w-full text-sm">
            <pre><code>{{ code }}</code></pre>
          </div>
        </div>
        <div class="relative mt-4">
          <h3 class="text-sm font-medium text-gray-900">
            {{ name }}
          </h3>
        </div>
        <div
          class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4"
        >
          <div
            aria-hidden="true"
            class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p class="relative text-lg font-semibold text-white">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="mt-6">
        <a
          :href="href"
          class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 font-medium text-gray-900 hover:bg-gray-200"
          >show<span class="sr-only">, {{ name }}</span></a
        >
      </div>
    </div>
  </div>
</template>
