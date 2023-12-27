<script setup lang="ts">
import NotificationToast from "../components/NotificationToast.vue";
import { useAsideToggleStore } from "@/stores/asideToggleStore.ts";

const asideToggleStore = useAsideToggleStore();
</script>

<template>
	<div class="w-full min-h-screen bg-background">
		<div class="flex flex-col min-h-screen">
			<div class="w-full">
				<slot name="header"></slot>
			</div>
			<Teleport to="#notification-toast">
				<NotificationToast />
			</Teleport>
			<div class="flex flex-col justify-between relative">
				<div class="flex">
					<div
						v-show="asideToggleStore.isAsideOpen"
						class="absolute top-0 bottom-0 left-0 w-64"
					>
						<slot name="aside"></slot>
					</div>
					<div class="w-full flex flex-col items-center justify-start">
						<main class="px-4 lg:px-0 lg:max-w-3xl w-full">
							<slot></slot>
						</main>
					</div>
				</div>
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>
