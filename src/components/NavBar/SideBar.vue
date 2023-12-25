<script setup lang="ts">
import { toRefs, computed, DefineComponent } from "vue";
import { useLogout } from "@/composables/useLogout.ts";
import { useRoute, useRouter } from "vue-router";
import { useIcons } from "@/composables/useIcons.ts";
import { useAuthStore } from "@/stores/authStore.ts";
import { useAsideToggleStore } from "@/stores/asideToggle.ts";
import { FolderIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const router = useRouter();
const { ScissorsIcon, DashboardIcon, PersonIcon, AddIcon } = useIcons();
const { logout } = useLogout();
const { isLoggedIn } = toRefs(useAuthStore());
const asideToggleStore = useAsideToggleStore();

interface NavigationItem {
	name: string;
	href: string;
	icon: DefineComponent;
	current?: boolean;
}

const baseNavigation: Array<NavigationItem> = [
	{ name: "Snippets", href: "/", icon: ScissorsIcon },
	{ name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
	{ name: "New Snippet", href: "/create-snippet", icon: AddIcon },
	{ name: "Price", href: "/price", icon: FolderIcon },
];

const navigation = computed(() =>
	baseNavigation.map((item) => ({
		...item,
		current:
			item.href === route.path ||
			(route.path === "/" && item.href === "/snippets"),
	})),
);
</script>

<template>
	<div
		v-show="asideToggleStore.isAsideOpen"
		class="fixed top-20 sm:w-60 flex grow flex-col gap-y-5 w-full h-full backdrop-blur-sm z-50 overflow-y-auto rounded px-6"
		@mouseenter="asideToggleStore.setHovered(true)"
		@mouseleave="asideToggleStore.setHovered(false)"
	>
		<nav class="flex flex-1 pt-8 flex-col">
			<ul role="list" class="flex flex-1 flex-col gap-y-7">
				<li>
					<ul role="list" class="-mx-2 space-y-1">
						<li v-for="item in navigation" :key="item.name">
							<router-link
								:to="item.href"
								:class="[
									item.current
										? 'bg-vue/95 text-white'
										: 'text-gray-400 hover:text-white hover:bg-vue/90',
									'group flex gap-x-3 text-xs rounded-md p-2 text-sm leading-6 font-semibold',
								]"
							>
								<component
									:is="item.icon"
									class="mt-1 h-4 w-4 shrink-0"
									aria-hidden="true"
								/>
								{{ item.name }}
							</router-link>
						</li>
						<li>
							<button
								class="text-gray-400 hover:text-white hover:bg-vue group flex gap-x-3 w-full text-xs rounded-md p-2 text-sm leading-6 font-semibold"
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
				<li v-show="isLoggedIn" class="py-8 -mx-6 mt-auto">
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
