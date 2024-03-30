<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});
</script>

<template>
  <div>
    <h1>Profile</h1>
  </div>
</template>
