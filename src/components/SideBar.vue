<script setup lang="ts">
import AddIcon from "../assets/icons/AddIcon.vue";
import HomeIcon from "../assets/icons/HomeIcon.vue";
import GearIcon from "../assets/icons/GearIcon.vue";
</script>

<template>
  <div>
    <div
      class="fixed top-0 bottom-0 w-13 flex flex-col z-50 gap-y-5 overflow-y-auto bg-background px-6 pb-4 ring-1 ring-white/10"
    >
      <div class="flex h-16 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=400"
          alt="Your Company"
        />
      </div>
      <nav class="relative flex flex-col justify-between">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="mt-10 space-y-10">
              <li>
                <router-link to="/" class="" active-class="text-vue">
                  <HomeIcon />
                </router-link>
              </li>
              <li>
                <router-link
                  to="/create-snippet"
                  class=""
                  active-class="text-vue"
                >
                  <AddIcon />
                </router-link>
              </li>
            </ul>
          </li>
          <li></li>
          <li>
            <router-link
              to="/settings"
              class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <GearIcon />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
