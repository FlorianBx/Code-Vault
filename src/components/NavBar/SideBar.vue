<script setup lang="ts">
import { toRefs, computed, DefineComponent } from "vue";
import { useLogout } from "@/composables/useLogout.ts";
import { useRoute, useRouter } from "vue-router";
import { useIcons } from "@/composables/useIcons.ts";
import { useAuthStore } from "@/stores/authStore.ts";
import { useAsideToggleStore } from "@/stores/asideToggleStore";
import { FolderIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const router = useRouter();
const { ScissorsIcon, DashboardIcon, PersonIcon, AddIcon, DisconnectIcon } =
	useIcons();
const { logout } = useLogout();
const { isLoggedIn } = toRefs(useAuthStore());
const asideToggleStore = useAsideToggleStore();

interface NavigationItem {
	name: string;
	href: string;
	icon: DefineComponent;
	current?: boolean;
}

const baseNavigation: NavigationItem[] = [
	{
		name: "Snippets",
		href: "/",
		icon: ScissorsIcon as unknown as DefineComponent,
	},
	{
		name: "Dashboard",
		href: "/profile",
		icon: DashboardIcon as unknown as DefineComponent,
	},
	{
		name: "New Snippet",
		href: "/create-snippet",
		icon: AddIcon as unknown as DefineComponent,
	},
	{
		name: "Price",
		href: "/price",
		icon: FolderIcon as unknown as DefineComponent,
	},
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
		class="fixed top-20 sm:w-60 flex grow flex-col gap-y-5 w-full backdrop-blur-md sm:backdrop-blur-sm z-50 overflow-y-auto rounded px-6"
		style="height: calc(100vh - 8rem)"
		@mouseenter="asideToggleStore.setHovered(true)"
		@mouseleave="asideToggleStore.setHovered(false)"
	>
		<nav class="flex flex-1 pt-8 flex-col">
			<ul role="list" class="flex flex-1 flex-col justify-start gap-y-7">
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
					</ul>
				</li>
			</ul>
			<button
				class="text-gray-400 hover:bg-vue group flex gap-x-3 w-full text-xs rounded-md p-2 text-sm leading-6 font-semibold"
				@click="isLoggedIn ? logout() : router.push('/login')"
			>
				<component
					:is="isLoggedIn ? DisconnectIcon : PersonIcon"
					:class="[
						'mt-1 h-5 w-5 shrink-0 group-hover:text-white',
						isLoggedIn ? 'text-danger' : 'text-vue',
					]"
					aria-hidden="true"
				/>
				<p
					:class="[
						'group-hover:text-white',
						isLoggedIn ? 'text-danger' : 'text-vue',
					]"
				>
					{{ isLoggedIn ? "Disconnect" : "Login" }}
				</p>
			</button>
		</nav>
	</div>
</template>
