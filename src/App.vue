<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import LayoutSlot from "./components/LayoutSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="w-full min-h-screen bg-background">
    <div class="mx-auto max-w-full sm:px-6 lg:px-8 min-h-screen pt-14">
      <NavBar />
      <main>
        <LayoutSlot>
          <router-view></router-view>
        </LayoutSlot>
      </main>
      <FooterComponent />
    </div>
  </div>
</template>
