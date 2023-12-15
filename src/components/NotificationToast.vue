<script setup lang="ts">
import { ref } from "vue";
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import CrossIcon from "../assets/icons/CrossIcon.vue";

const show = ref(false);
setTimeout(() => {
	show.value = true;
}, 1000);
setTimeout(() => {
	show.value = false;
}, 3500);
</script>

<template>
	<div
		aria-live="assertive"
		class="z-50 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
	>
		<div class="flex w-full flex-col items-center space-y-4 sm:items-end">
			<!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
			<Transition name="fade-slide">
				<div
					v-if="show"
					class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5"
				>
					<div class="p-4">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<CheckCircleIcon
									class="text-green-300 h-6 w-6 text-vue"
									aria-hidden="true"
								/>
							</div>
							<div class="ml-3 w-0 flex-1 pt-0.5">
								<p class="text-sm font-medium">Successfully logged!</p>
								<p class="mt-1 text-sm text-gray-500">
									Anyone with a link can now view this file.
								</p>
							</div>
							<div class="ml-4 flex flex-shrink-0">
								<button
									type="button"
									class="inline-flex rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									@click="show = false"
								>
									<span class="sr-only">Close</span>
									<CrossIcon class="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	</div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition:
		opacity 0.4s ease,
		transform 0.4s cubic-bezier(0.4, 0, 0.2, 1.3);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateX(250px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>
