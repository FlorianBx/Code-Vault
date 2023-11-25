<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import LayoutGlobalSlot from "./Layouts/LayoutGlobalSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SearchBar from "./components/SearchBar.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <LayoutGlobalSlot>
    <template #header>
      <NavBar />
    </template>
    <SearchBar />
    <template #aside>
      <SideBar />
    </template>
    <router-view></router-view>
    <template #footer>
      <FooterComponent />
    </template>
  </LayoutGlobalSlot>
</template>
