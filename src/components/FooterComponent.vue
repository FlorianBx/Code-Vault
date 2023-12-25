<script setup lang="ts">
import { useIcons } from "@/composables/useIcons.ts";

const { FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon, YoutubeIcon } =
	useIcons();

const navigation = [
	{
		name: "Facebook",
		href: "#",
		icon: FacebookIcon,
	},
	{
		name: "Instagram",
		href: "#",
		icon: InstagramIcon,
	},
	{
		name: "Twitter",
		href: "#",
		icon: TwitterIcon,
	},
	{
		name: "GitHub",
		href: "#",
		icon: GithubIcon,
	},
	{
		name: "YouTube",
		href: "#",
		icon: YoutubeIcon,
	},
];
</script>

<template>
	<div class="w-full h-40">
		<div
			class="mx-auto max-w-7xl px-6 py-20 md:flex md:items-center md:justify-around lg:px-8"
		>
			<div class="flex justify-center space-x-6 md:order-2">
				<a
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">{{ item.name }}</span>
					<component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
				</a>
			</div>
			<div class="mt-8 md:order-1 md:mt-0">
				<p class="text-start text-xs leading-5 text-gray-500">
					Released under the MIT License.
					<br />
					Copyright &copy; 2023 Florian Beaumont
				</p>
			</div>
		</div>
	</div>
</template>
