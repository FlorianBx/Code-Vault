<script setup lang="ts">
import { reactive, computed } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const menuItems = reactive([
  { name: "Home", link: "#home", current: true },
  { name: "Portfolio", link: "#portfolio", current: false },
  { name: "About", link: "#about", current: false },
  { name: "Blog", link: "#blog", current: false },
  { name: "Contact", link: "#home", current: false },
]);

const updateCurrentItem = (itemName: string): void => {
  menuItems.forEach((item) => {
    item.current = item.name === itemName;
  });
};

const emailLink = computed(() => {
  const email = "2jggvgdztt@privaterelay.appleid.com";
  const subject = encodeURIComponent("Contact from portfolio");
  return `mailto:${email}?subject=${subject}`;
});

const filteredMenuItems = computed(() => {
  return menuItems.filter((item) => item.name !== "Contact");
});

const handleEnterKeyPress = (link: string): void => {
  updateCurrentItem(link);
  const element = document.querySelector(link);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="hidden md:block fixed right-4 top-4 p-4">
    <!-- lg menu  -->
    <ul class="flex gap-4 font-bold text-lg">
      <li
        v-for="item in menuItems"
        :key="item.name"
        :class="[
          item.current
            ? 'text-secondary font-bold cursor-pointer font-body hover:text-hover'
            : 'cursor-pointer font-body hover:text-hover',
        ]"
      >
        <a
          v-if="item.name !== 'Contact'"
          v-scroll-to="item.link"
          tabindex="0"
          role="link"
          @click="updateCurrentItem(item.name)"
          @keydown.enter="handleEnterKeyPress(item.link)"
        >
          {{ item.name }}
        </a>
        <a
          v-if="item.name === 'Contact'"
          tabindex="0"
          role="link"
          :href="emailLink"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
  <!-- Bottom navigation  -->
  <div
    class="z-40 md:hidden fixed right-0 left-0 -bottom-1 p-6 bg-card/95 rounded-md"
  >
    <ul class="flex gap-4 font-bold text-md sm:justify-end justify-around">
      <li
        v-for="item in filteredMenuItems"
        :key="item.name"
        :class="[
          item.current
            ? 'text-secondary font-bold cursor-pointer font-body'
            : 'cursor-pointer font-body',
        ]"
      >
        <a
          v-scroll-to="item.link"
          tabindex="0"
          role="link"
          @click="updateCurrentItem(item.name)"
          @keydown.enter="handleEnterKeyPress(item.link)"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
  <!-- Mobile menu -->
  <Disclosure v-slot="{ open }" as="nav" class="bg-transparent">
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
      <div class="shadow-md space-y-1 px-2 py-4">
        <DisclosureButton
          v-for="item in filteredMenuItems"
          :key="item.name"
          as="a"
          :href="item.link"
          :class="[
            item.current
              ? 'z-40 bg-card text-primary font-body'
              : 'z-40 text-primary hover:bg-hover hover:text-white',
            'block rounded-md px-3 py-2 lg:text-base text-3xl font-body',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          @click="updateCurrentItem(item.name)"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
