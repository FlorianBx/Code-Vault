<script setup lang="ts">
import { reactive, computed } from "vue";
import { useAuthStore } from "@/stores/authStore.ts";
import BreadCrumb from "@/components/Navbar/BreadCrumb.vue";
// import MobileNavBar from "./MobileNavBar.vue";
import BottomNavBar from "./BottomNavBar.vue";

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
	<div class="fixed left-0 right-0 h-20 z-50">
		<div class="flex justify-between">
			<BreadCrumb />
			<div class="p-5">
				<button
					class="text-xs bg-vue py-1.5 px-2.5 rounded text-white font-bold hover:bg-teal-400"
				>
					<router-link
						:to="authStore.isLoggedIn ? '/create-snippet' : '/login'"
					>
						Add Snippet
					</router-link>
				</button>
			</div>
		</div>
		<div class="pt-1">
			<!-- <MobileNavBar :menu-items="filteredMenuItems" /> -->
			<BottomNavBar :menu-items="filteredMenuItems" />
		</div>
	</div>
</template>
