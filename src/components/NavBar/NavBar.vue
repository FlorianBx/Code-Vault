<script setup lang="ts">
import { reactive, computed } from "vue";
import { useLogout } from "../../composables/useLogout.ts";
import { useAuthStore } from "@/stores/authStore.ts";
import BreadCrumb from "@/components/Navbar/BreadCrumb.vue";
import MobileNavBar from "./MobileNavBar.vue";
import BottomNavBar from "./BottomNavBar.vue";

const { logout } = useLogout();
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
	<div class="flex justify-between">
		<BreadCrumb />
		<div class="p-5">
			<button
				class="text-xs bg-vue py-1.5 px-2.5 rounded text-white font-bold hover:bg-teal-400"
			>
				<router-link :to="authStore.isLoggedIn ? '/create-snippet' : '/login'">
					Add Snippet
				</router-link>
			</button>
		</div>
	</div>
	<div class="pt-1">
		<div class="relative">
			<button
				v-if="authStore.isLoggedIn"
				class="absolute top-4 right-20 z-50 bg-vue hover:bg-teal-400 text-white font-bold py-2 px-4 rounded"
				@click="logout"
			>
				logout
			</button>
			<a
				v-else
				href="/login"
				class="absolute top-4 right-20 z-50 bg-vue hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full"
			>
				login
			</a>
		</div>
		<MobileNavBar :menu-items="filteredMenuItems" />
		<BottomNavBar :menu-items="filteredMenuItems" />
	</div>
</template>
