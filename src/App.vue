<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import LayoutGlobalSlot from "./Layouts/LayoutGlobalSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <LayoutGlobalSlot>
    <template #header>
      <div class="pt-14">
        <NavBar />
      </div>
    </template>
    <template #aside>
      <SideBar />
    </template>
    <router-view></router-view>
    <template #footer>
      <div class="flex items-end h-96">
        <FooterComponent />
      </div>
    </template>
  </LayoutGlobalSlot>
</template>
