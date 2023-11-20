<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../store/authStore";

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

const authStore = useAuthStore();
</script>
<template>
  <nav
    class="z-40 md:hidden fixed right-0 left-0 -bottom-1 p-6 bg-card/95 rounded-md"
  >
    <ul class="flex gap-4 font-bold text-md sm:justify-end justify-around">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="cursor-pointer font-body hover:text-hover z-50"
      >
        <router-link :to="item.link" active-class="text-secondary">
          <span v-if="item.name === 'Logout'" @click="authStore.logout">{{
            item.name
          }}</span>
          <span v-else-if="item.name === 'Create' && authStore.isLoggedIn">{{
            item.name
          }}</span>
          <span v-else-if="item.name !== 'Create'">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
