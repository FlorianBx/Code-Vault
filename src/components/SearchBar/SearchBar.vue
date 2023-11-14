<script setup lang="ts">
import { searchQuery } from "../../composables/useFilter.ts";
</script>

<template>
  <div class="mb-10">
    <label
      for="search"
      class="block text-sm font-medium leading-6 ml-1 text-white"
      >Search</label
    >
    <div class="mt-2">
      <div class="flex rounded-md bg-white/5 ring-0">
        <input
          id="search"
          v-model="searchQuery"
          type="text"
          name="search"
          autocomplete="search"
          data-testid="input-data-testid"
          class="flex-1 bg-transparent py-2.5 pl-3 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-emerald-500 text-white sm:text-md sm:leading-6"
        />
      </div>
    </div>
  </div>
</template>
