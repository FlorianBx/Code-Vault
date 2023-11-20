<script setup lang="ts">
import { useLogin } from "../../composables/useLogin";
import { useAuthStore } from "../../store/authStore";
import { RouterLink } from "vue-router";

interface MenuItem {
  name: string;
  link: string;
}

defineProps({
  menuItems: {
    type: Array as () => MenuItem[],
    required: true,
  },
});

const { logout } = useLogin();
const authStore = useAuthStore();
</script>

<template>
  <nav class="hidden md:block fixed right-4 top-4 p-4 z-50">
    <div
      class="fixed top-0 right-0 left-0 h-20 w-full bg-background opacity-80 backdrop-blur-sm"
    ></div>
    <ul class="flex gap-4 font-bold text-lg">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="cursor-pointer font-body hover:text-hover z-50"
      >
        <router-link :to="item.link" active-class="text-secondary">
          <span
            v-if="item.name === 'Logout'"
            class="text-primary hover:text-hover cursor-pointer"
            @click="logout"
            >{{ item.name }}</span
          >
          <span v-else-if="item.name === 'Create' && authStore.isLoggedIn">{{
            item.name
          }}</span>
          <span v-else-if="item.name !== 'Create'">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
