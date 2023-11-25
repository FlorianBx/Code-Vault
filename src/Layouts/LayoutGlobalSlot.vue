<script setup lang="ts">
// import { ref } from "vue";
import NotificationToast from "../components/NotificationToast.vue";

// const sidebarOpen = ref(false);

// const toggleSidebar = () => {
//   sidebarOpen.value = !sidebarOpen.value;
// };
</script>

<template>
  <div class="w-full min-h-screen bg-background">
    <div class="mx-auto flex flex-col min-h-screen">
      <div class="w-full bg-black">
        <slot name="header"></slot>
      </div>
      <Teleport to="#notification-toast">
        <NotificationToast />
      </Teleport>
      <div class="flex flex-col justify-between relative">
        <div class="flex">
          <div class="w-20 bg-black/30 border-black/20 border-r">
            <slot name="aside"></slot>
          </div>
          <div class="w-full flex flex-col items-center justify-center px-4">
            <main class="max-w-3xl">
              <slot></slot>
            </main>
          </div>
        </div>
        <div class="h-96">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
