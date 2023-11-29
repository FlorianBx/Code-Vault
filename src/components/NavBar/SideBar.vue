<script setup lang="ts">
import AddIcon from "../../assets/icons/AddIcon.vue";
import HomeIcon from "../../assets/icons/HomeIcon.vue";
import GearIcon from "../../assets/icons/GearIcon.vue";
import Logo from "../../assets/Code_Vault_logo.png";
</script>

<template>
  <div class="hidden sm:block">
    <div
      class="fixed top-0 bottom-0 w-12 flex flex-col items-center gap-y-5 overflow-y bg-background pb-4 ring-1 ring-white/10"
    >
      <router-link to="/" class="h-32">
        <div class="flex h-32 w-20 justify-center items-center cursor-pointer">
          <img class="pl-1 h-14" :src="Logo" alt="" />
        </div>
      </router-link>
      <nav>
        <ul role="list" class="flex justify-center">
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
          <li class="fixed bottom-10 flex justify-center">
            <router-link
              to="/settings"
              class="font-semibold text-gray-400 hover:text-white"
            >
              <GearIcon />
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
