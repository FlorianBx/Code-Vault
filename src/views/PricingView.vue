<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/20/solid";

const pricing = {
	frequencies: [
		{ value: "monthly", label: "Monthly", priceSuffix: "/month" },
		{ value: "annually", label: "Annually", priceSuffix: "/year" },
	],
	tiers: [
		{
			name: "Free",
			id: "free",
			href: "#",
			price: { monthly: "$0", annually: "$0" },
			description: "The essentials to provide your best work for clients.",
			features: [
				"50 snippets",
				"Up to 1,000 subscribers",
				"Basic analytics",
				"48-hour support response time",
			],
			mostPopular: false,
		},
		{
			name: "Startup",
			id: "tier-startup",
			href: "#",
			price: { monthly: "$30", annually: "$288" },
			description: "A plan that scales with your rapidly growing business.",
			features: [
				"25 products",
				"Up to 10,000 subscribers",
				"Advanced analytics",
				"24-hour support response time",
				"Marketing automations",
			],
			mostPopular: true,
		},
	],
};
const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
];

const frequency = ref(pricing.frequencies[0]);
</script>

<template>
	<div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-base font-semibold leading-7 text-vue">Pricing</h1>
				<p
					class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
				>
					Pricing plans for teams of&nbsp;all&nbsp;sizes
				</p>
			</div>
			<p
				class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300"
			>
				Choose an affordable plan that’s packed with the best features for
				engaging your audience, creating customer loyalty, and driving sales.
			</p>
			<div class="mt-16 flex justify-center">
				<RadioGroup
					v-model="frequency"
					class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
				>
					<RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
					<RadioGroupOption
						v-for="option in pricing.frequencies"
						:key="option.value"
						v-slot="{ checked }"
						as="template"
						:value="option"
					>
						<div
							:class="[
								checked ? 'bg-vue' : '',
								'cursor-pointer rounded-full px-2.5 py-1',
							]"
						>
							<span>{{ option.label }}</span>
						</div>
					</RadioGroupOption>
				</RadioGroup>
			</div>
			<div
				class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div
					v-for="tier in pricing.tiers"
					:key="tier.id"
					:class="[
						tier.mostPopular
							? 'bg-white/5 ring-2 ring-vue'
							: 'ring-1 ring-white/10',
						'rounded-3xl p-8 xl:p-10',
					]"
				>
					<div class="flex items-center justify-between gap-x-4">
						<h2
							:id="tier.id"
							class="text-lg font-semibold leading-8 text-white"
						>
							{{ tier.name }}
						</h2>
						<p
							v-if="tier.mostPopular"
							class="rounded-full bg-vue px-2.5 py-1 text-xs font-semibold leading-5 text-white"
						>
							Most popular
						</p>
					</div>
					<p class="mt-4 text-sm leading-6 text-gray-300">
						{{ tier.description }}
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white">
							{{ tier.price[frequency.value] }}
						</span>
						<span class="text-sm font-semibold leading-6 text-gray-300">
							{{ frequency.priceSuffix }}
						</span>
					</p>
					<a
						:href="tier.href"
						:aria-describedby="tier.id"
						:class="[
							tier.mostPopular
								? 'bg-vue text-white shadow-sm hover:bg-secondary focus-visible:outline-indigo-500'
								: 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
							'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
						]"
					>
						Buy plan
					</a>
					<ul
						role="list"
						class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
					>
						<li
							v-for="feature in tier.features"
							:key="feature"
							class="flex gap-x-3"
						>
							<CheckIcon
								class="h-6 w-5 flex-none text-white"
								aria-hidden="true"
							/>
							{{ feature }}
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Testimonial section -->
		<div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
					<img
						class="h-12 self-start"
						src="https://tailwindui.com/img/logos/tuple-logo-white.svg"
						alt=""
					/>
					<figure class="mt-10 flex flex-auto flex-col justify-between">
						<blockquote class="text-lg leading-8 text-white">
							<p>
								“Amet amet eget scelerisque tellus sit neque faucibus non
								eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
								erat et cursus tortor consequat at. Vulputate gravida sociis
								enim nullam ultricies habitant malesuada lorem ac. Tincidunt
								urna dui pellentesque sagittis.”
							</p>
						</blockquote>
						<figcaption class="mt-10 flex items-center gap-x-6">
							<img
								class="h-14 w-14 rounded-full bg-gray-800"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div class="text-base">
								<div class="font-semibold text-white">Judith Black</div>
								<div class="mt-1 text-gray-400">CEO of Tuple</div>
							</div>
						</figcaption>
					</figure>
				</div>
				<div
					class="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
				>
					<img
						class="h-12 self-start"
						src="https://tailwindui.com/img/logos/reform-logo-white.svg"
						alt=""
					/>
					<figure class="mt-10 flex flex-auto flex-col justify-between">
						<blockquote class="text-lg leading-8 text-white">
							<p>
								“Excepteur veniam labore ullamco eiusmod. Pariatur consequat
								proident duis dolore nulla veniam reprehenderit nisi officia
								voluptate incididunt exercitation exercitation elit. Nostrud
								veniam sint dolor nisi ullamco.”
							</p>
						</blockquote>
						<figcaption class="mt-10 flex items-center gap-x-6">
							<img
								class="h-14 w-14 rounded-full bg-gray-800"
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
							<div class="text-base">
								<div class="font-semibold text-white">Joseph Rodriguez</div>
								<div class="mt-1 text-gray-400">CEO of Reform</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>

		<!-- FAQ section -->
		<div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-white">
				Frequently asked questions
			</h2>
			<p class="mt-6 max-w-2xl text-base leading-7 text-gray-300">
				Have a different question and can’t find the answer you’re looking for?
				Reach out to our support team by
				<a href="#" class="font-semibold text-vue hover:text-secondary">
					sending us an email
				</a>
				and we’ll get back to you as soon as we can.
			</p>
			<div class="mt-20">
				<dl
					class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10"
				>
					<div v-for="faq in faqs" :key="faq.id">
						<dt class="text-base font-semibold leading-7 text-white">
							{{ faq.question }}
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-300">
							{{ faq.answer }}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>
