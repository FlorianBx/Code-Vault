<script setup lang="ts">
import { reactive, computed } from "vue";
import { useAuthStore } from "../../store/authStore.ts";
// import LargeNavBar from "./LargeNavBar.vue";
import MobileNavBar from "./MobileNavBar.vue";
import BottomNavBar from "./BottomNavBar.vue";

const authStore = useAuthStore();

const menuItems = reactive([
  { name: "Home", link: "/" },
  { name: "Sign In", link: "/login" },
  { name: "Create", link: "/create-snippet" },
  { name: "Logout", link: "/" },
]);

const filteredMenuItems = computed(() => {
  console.log("authStore.isLoggedIn: ", authStore.isLoggedIn);

  if (authStore.isLoggedIn) {
    return menuItems.filter((item) => item.name !== "Sign In");
  }
  return menuItems.filter((item) => item.name !== "Logout");
});
</script>

<template>
  <div class="pt-14">
    <!-- <LargeNavBar :menu-items="filteredMenuItems" /> -->
    <MobileNavBar :menu-items="filteredMenuItems" />
    <BottomNavBar :menu-items="filteredMenuItems" />
  </div>
</template>
