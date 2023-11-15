<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import FooterComponent from "./components/FooterBar/FooterComponent.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-background">
    <div class="mx-auto max-w-full sm:px-6 lg:px-8 min-h-screen pt-14">
      <NavBar />
      <main>
        <router-view></router-view>
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped></style>
