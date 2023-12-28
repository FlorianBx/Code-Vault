<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useAuthStore } from "@/stores/authStore.ts";
import NavBar from "./components/NavBar/NavBar.vue";
import LayoutGlobalSlot from "./Layouts/LayoutGlobalSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SideBar from "./components/NavBar/SideBar.vue";

import { initFakeDatasForDev } from "@/fakeDatas/initFakeDatasForDev";
const devGenerateFakeDatas = async () => await initFakeDatasForDev();

onMounted(() => {
	const authStore = useAuthStore();
	authStore.initializeAuth();
	authStore.listenToAuthChanges();
});

watch(
	() => devGenerateFakeDatas(),
	() => {
		console.log("fake datas generated");
	},
);
</script>

<template>
	<LayoutGlobalSlot>
		<template #header>
			<NavBar />
		</template>
		<template #aside>
			<SideBar />
		</template>
		<div class="pt-20">
			<router-view></router-view>
		</div>
		<template #footer>
			<FooterComponent />
		</template>
	</LayoutGlobalSlot>
</template>
