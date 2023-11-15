<script setup lang="ts">
import { searchQuery } from "../../composables/useFilter.ts";
</script>

<template>
  <div class="mb-4 w-64 sm:w-full lg:max-w-3xl sm:max-w-xl sm:px-8">
    <label
      for="search"
      class="block text-sm font-medium leading-6 ml-1 text-white"
      >Search</label
    >
    <div class="mt-2">
      <div class="flex rounded-md bg-transparent ring-0">
        <input
          id="search"
          v-model="searchQuery"
          type="text"
          name="search"
          autocomplete="search"
          data-testid="input-data-testid"
          class="flex-1 bg-transparent block w-full rounded-md border-0 shadow-inner-neumorphic py-3 text-primary ring-0 focus:ring-0 focus:ring-inset focus:ring-ring sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
</template>
