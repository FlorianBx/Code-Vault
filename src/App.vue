<script setup lang="ts">
import NavBar from "./components/NavBar/NavBar.vue";
import LayoutGlobalSlot from "./Layouts/LayoutGlobalSlot.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SideBar from "./components/NavBar/SideBar.vue";
</script>

<template>
	<LayoutGlobalSlot>
		<template #header>
			<NavBar />
		</template>
		<template #aside>
			<SideBar />
		</template>
		<router-view></router-view>
		<template #footer>
			<div class="flex items-end h-96">
				<FooterComponent />
			</div>
		</template>
	</LayoutGlobalSlot>
</template>
