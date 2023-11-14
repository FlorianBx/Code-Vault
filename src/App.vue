<script setup lang="ts">
import HomePage from "./pages/HomePage/HomePage.vue";
import NavBar from "./components/NavBar/NavBar.vue";
import FooterComponent from "./components/FooterBar/FooterComponent.vue";
</script>

<template>
  <div class="w-full h-screen overflow-hidden bg-background">
    <div class="mx-auto max-w-full sm:px-6 lg:px-8 h-screen">
      <NavBar />
      <main>
        <HomePage />
      </main>
      <div class="fixed bottom-0 right-0">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
