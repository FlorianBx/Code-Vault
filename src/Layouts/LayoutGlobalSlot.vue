<script setup lang="ts">
import NotificationToast from "../components/NotificationToast.vue";
</script>

<template>
	<div class="w-full min-h-screen bg-background">
		<div class="mx-auto flex flex-col min-h-screen">
			<div class="w-full">
				<slot name="header"></slot>
			</div>
			<Teleport to="#notification-toast">
				<NotificationToast />
			</Teleport>
			<div class="flex flex-col justify-between relative">
				<div class="flex">
					<div class="absolute top-0 bottom-0 left-0 w-64 md:block">
						<slot name="aside"></slot>
					</div>
					<div class="w-full flex flex-col items-center justify-start px-4">
						<main class="lg:max-w-3xl w-full">
							<slot></slot>
						</main>
					</div>
				</div>
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>
