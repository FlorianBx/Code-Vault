<script setup lang="ts">
// import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useAuthStore } from "../../store/authStore";
import { useLogin } from "../../composables/useLogin";
// import TriangleDownIcon from "../../assets/icons/TriangleDownIcon.vue";

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
// const dropdownVisible = ref(false);

// const toggleDropdown = () => {
//   dropdownVisible.value = !dropdownVisible.value;
// };
const { logout } = useLogin();
const authStore = useAuthStore();
</script>

<template>
	<nav class="hidden md:block w-full fixed top-4 left-60 z-0">
		<div class="flex">
			<div
				class="fixed top-0 right-0 left-0 h-20 w-full bg-background opacity-80 backdrop-blur-sm"
			></div>

			<ul class="flex w-full gap-4 font-bold text-lg">
				<li
					v-for="item in menuItems"
					:key="item.name"
					class="cursor-pointer hover:text-hover z-40"
				>
					<router-link :to="item.link" active-class="text-secondary">
						<span
							v-if="item.name === 'Logout'"
							class="text-primary hover:text-hover cursor-pointer"
							@click="logout"
						>
							{{ item.name }}
						</span>
						<span v-else-if="item.name === 'Create' && authStore.isLoggedIn">
							{{ item.name }}
						</span>
					</router-link>
				</li>
				<!-- <div class="relative w-full" @click="toggleDropdown">
          <div class="flex items-center gap-24">
            <div class="flex gap-2">
              <TriangleDownIcon class="-ml-1" />
              <p class="font-medium text-sm cursor-pointer">
                Hello, <span class="font-bold">Tom Cook </span>
              </p>
              <img
                class="h-8 w-8 -mt-2 rounded-md z-40 cursor-pointer"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div
            v-show="dropdownVisible"
            class="absolute p-7 top-10 w-48 h-72 right-0 mt-2 bg-background/95 shadow-light-inner-neumorphic rounded-md"
          >
            <ul class="space-y-4">
              <li class="hover:text-secondary text-sm" active-class="text-vue">
                <router-link to="/">Home</router-link>
              </li>
              <li class="hover:text-secondary text-sm" active-class="text-vue">
                <router-link to="/create-snippet">Create</router-link>
              </li>
              <li class="hover:text-secondary text-sm" active-class="text-vue">
                <router-link to="/profile">Profile</router-link>
              </li>
              <li class="hover:text-secondary text-sm" active-class="text-vue">
                <router-link to="/personal-snippets">My Snippets</router-link>
              </li>
              <li
                class="hover:text-secondary text-sm cursor-pointer absolute bottom-7"
                active-class="text-vue"
                @click="logout"
              >
                Logout
              </li>
            </ul>
          </div>
        </div> -->
			</ul>
		</div>
	</nav>
</template>
