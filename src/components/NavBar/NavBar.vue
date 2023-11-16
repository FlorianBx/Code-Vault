<script setup lang="ts">
import { reactive, computed } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { RouterLink } from "vue-router";

const menuItems = reactive([
  { name: "Home", link: "/" },
  { name: "Create", link: "/create-snippet" },
  { name: "Sign In", link: "/login" },
]);

const emailLink =
  "mailto:2jggvgdztt@privaterelay.appleid.com?subject=" +
  encodeURIComponent("Contact from snipet.io");

const filteredMenuItems = computed(() => {
  return menuItems.filter((item) => item.name !== "Contact");
});

// const handleEnterKeyPress = (link: string): void => {
//   const element = document.querySelector(link);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };
</script>

<template>
  <nav class="hidden md:block fixed right-4 top-4 p-4 z-50">
    <div
      class="fixed top-0 right-0 left-0 h-20 w-full bg-background opacity-80 backdrop-blur-sm"
    ></div>
    <!-- lg menu  -->
    <ul class="flex gap-4 font-bold text-lg">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="cursor-pointer font-body hover:text-hover z-50"
      >
        <router-link
          v-if="item.name !== 'Contact'"
          :to="item.link"
          active-class="text-secondary"
        >
          {{ item.name }}
        </router-link>
        <a v-else :href="emailLink">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
  <!-- Bottom navigation  -->
  <nav
    class="z-40 md:hidden fixed right-0 left-0 -bottom-1 p-6 bg-card/95 rounded-md"
  >
    <ul class="flex gap-4 font-bold text-md sm:justify-end justify-around">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="cursor-pointer font-body hover:text-hover z-50"
      >
        <router-link
          v-if="item.name !== 'Contact'"
          :to="item.link"
          active-class="text-secondary"
        >
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
  <!-- Mobile menu -->
  <Disclosure v-slot="{ open }" as="nav" class="sm:hidden bg-transparent">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="z-50 relative flex h-16 items-center justify-between">
        <div class="fixed top-5 right-5 md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="z-50 relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-9 w-9" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <DisclosurePanel
      class="z-40 lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center"
    >
      <div class="shadow-md flex flex-col gap-y-11 space-y-1 px-2 py-4">
        <DisclosureButton
          v-for="item in filteredMenuItems"
          :key="item.name"
          as="a"
          :href="item.link"
          class="[z-40 text-primary hover:bg-hover hover:text-white', 'block rounded-md px-3 py-2 lg:text-base text-3xl font-body', ]"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
