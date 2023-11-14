<script setup lang="ts">
import datas from "../../fakeDatas/data.json";
</script>

<template>
  <div>
    <div
      class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <div v-for="product in datas" :key="product.code">
        <div class="relative">
          <div class="relative h-72 w-full overflow-hidden rounded-lg">
            <div class="h-full w-full text-sm">
              <pre><code>export const useSocialIcons = () => {
  return {
    GithubIcon,
    LinkedinIcon,
    InstagramIcon,
  };
};}</code></pre>
            </div>
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium text-gray-900">
              {{ product.name }}
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
              {{ product.description }}
            </p>
          </div>
        </div>
        <div class="mt-6">
          <a
            :href="product.href"
            class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 font-medium text-gray-900 hover:bg-gray-200"
            >show<span class="sr-only">, {{ product.name }}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
