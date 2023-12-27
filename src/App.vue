<script setup lang="ts">
// import { onMounted } from "vue";
import NavBar from "./components/NavBar/NavBar.vue";
import LayoutGlobalSlot from "./Layouts/LayoutGlobalSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SideBar from "./components/NavBar/SideBar.vue";

// import { initFakeDatasForDev } from "@/fakeDatas/initFakeDatasForDev";

// onMounted(() => {
// 	initFakeDatasForDev();
// });
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
