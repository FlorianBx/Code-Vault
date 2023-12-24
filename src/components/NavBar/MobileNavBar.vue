<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useAuthStore } from "../../stores/authStore";

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

const authStore = useAuthStore();
</script>

<template>
	<Disclosure v-slot="{ open }" as="nav" class="sm:hidden bg-transparent">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="z-50 relative flex h-16 items-center justify-between">
				<div class="fixed top-0 left-3.5 md:hidden">
					<!-- Mobile menu button-->
					<DisclosureButton
						class="z-50 relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
					>
						<span class="absolute -inset-0.5" />
						<span class="sr-only">Open main menu</span>
						<Bars3Icon v-if="!open" class="block h-9 w-9" aria-hidden="true" />
						<XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
					</DisclosureButton>
				</div>
			</div>
		</div>
		<DisclosurePanel
			class="z-40 lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center"
		>
			<div class="shadow-md flex flex-col gap-y-11 space-y-1 px-2 py-4">
				<DisclosureButton
					v-for="item in menuItems"
					:key="item.name"
					as="a"
					:href="item.link"
					class="[z-40 text-primary hover:bg-hover hover:text-white', 'block rounded-md px-3 py-2 lg:text-base text-3xl font-body', ]"
				>
					<span v-if="item.name === 'Logout'" @click="authStore.logout">
						{{ item.name }}
					</span>
					<span v-else-if="item.name === 'Create' && authStore.isLoggedIn">
						{{ item.name }}
					</span>
					<span v-else-if="item.name !== 'Create'">{{ item.name }}</span>
				</DisclosureButton>
			</div>
		</DisclosurePanel>
	</Disclosure>
</template>
