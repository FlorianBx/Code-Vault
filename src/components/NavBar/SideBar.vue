<script setup lang="ts">
import { toRefs, Ref, ref } from "vue";
import { useLogout } from "@/composables/useLogout.ts";
import { useRouter } from "vue-router";
import { useIcons } from "@/composables/useIcons.ts";
import { useAuthStore } from "@/stores/authStore.ts";
import { useAsideToggleStore } from "@/stores/asideToggle.ts";
import { FolderIcon } from "@heroicons/vue/24/outline";

const router = useRouter();
const { ScissorsIcon, DashboardIcon, PersonIcon } = useIcons();
const { isLoggedIn } = useAuthStore();
const { logout } = useLogout();
const isHovered: Ref<boolean> = ref(false);
let hoverTimeout: ReturnType<typeof setTimeout>;
const asideToggleStore = useAsideToggleStore();
const { isAsideOpen } = toRefs(asideToggleStore);
const { openAside, closeAside } = useAsideToggleStore();

const onMouseEnter = (): void => {
	clearTimeout(hoverTimeout);
	isHovered.value = true;
	openAside();
};

const onMouseLeave = (): void => {
	if (!isHovered.value) return;
	hoverTimeout = setTimeout(() => {
		closeAside();
	}, 1000);
};

const navigation = [
	{ name: "Snippets", href: "#", icon: ScissorsIcon, current: true },
	{ name: "Dashboard", href: "#", icon: DashboardIcon, current: false },
	{
		name: "Price",
		href: "#",
		icon: FolderIcon,
		current: false,
	},
];
</script>

<template>
	<div
		v-show="isAsideOpen"
		class="flex grow flex-col gap-y-5 w-full h-full overflow-y-auto bg-gray-900 px-6"
		@mouseenter="onMouseEnter"
		@mouseleave="onMouseLeave"
	>
		<nav class="flex flex-1 pt-8 flex-col">
			<ul role="list" class="flex flex-1 flex-col gap-y-7">
				<li>
					<ul role="list" class="-mx-2 space-y-1">
						<li v-for="item in navigation" :key="item.name">
							<a
								:href="item.href"
								:class="[
									item.current
										? 'bg-gray-800 text-white'
										: 'text-gray-400 hover:text-white hover:bg-gray-800',
									'group flex gap-x-3 text-xs rounded-md p-2 text-sm leading-6 font-semibold',
								]"
							>
								<component
									:is="item.icon"
									class="mt-1 h-4 w-4 shrink-0"
									aria-hidden="true"
								/>
								{{ item.name }}
							</a>
						</li>
						<li>
							<button
								class="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 w-full text-xs rounded-md p-2 text-sm leading-6 font-semibold"
								@click="isLoggedIn ? logout() : router.push('/login')"
							>
								<component
									:is="PersonIcon"
									class="mt-1 h-4 w-4 shrink-0"
									aria-hidden="true"
								/>
								{{ isLoggedIn ? "Logout" : "Login" }}
							</button>
						</li>
					</ul>
				</li>
				<li class="-mx-6 mt-auto">
					<a
						href="#"
						class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
					>
						<img
							class="h-8 w-8 rounded-full bg-gray-800"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<span class="sr-only">Your profile</span>
						<span aria-hidden="true">Tom Cook</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>
