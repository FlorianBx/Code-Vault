<script setup lang="ts">
import { reactive, computed } from "vue";
import { useLogout } from "../../composables/useLogout.ts";
import { useAuthStore } from "../../store/authStore.ts";
// import LargeNavBar from "./LargeNavBar.vue";
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
	<div class="pt-14">
		<div class="relative">
			<button
				v-if="authStore.isLoggedIn"
				class="absolute top-4 right-20 z-50 bg-vue hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-full"
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
		<!-- <LargeNavBar :menu-items="filteredMenuItems" /> -->
		<MobileNavBar :menu-items="filteredMenuItems" />
		<BottomNavBar :menu-items="filteredMenuItems" />
	</div>
</template>
