<script setup lang="ts">
import { reactive } from "vue";
import { useFormData } from "../composables/useFormData.ts";
import { useLogin } from "../composables/useLogin.ts";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import InputForText from "../components/InputForText.vue";
import GithubButtonForSignIn from "../components/GithubButtonForSignIn.vue";

const loginDatas = reactive({
	email: "",
	password: "",
});

const { formData, handleUpdateData } = useFormData(loginDatas);
const { loginWithEmailAndPassword, loginWithGitHub } = useLogin();
const authStore = useAuthStore();
const router = useRouter();

const handleLogin = async (event: Event) => {
	event.preventDefault();
	await loginWithEmailAndPassword({
		email: formData.email,
		password: formData.password,
	});
	if (authStore.isLoggedIn) {
		router.push("/");
	}
};

const handleGitHubLogin = async () => {
	await loginWithGitHub();
	if (authStore.isLoggedIn) {
		router.push("/");
	}
};
</script>

<template>
	<div
		class="flex min-h-full flex-1 flex-col justify-center pb-20 sm:py-12 sm:px-6 lg:px-8"
	>
		<div class="mt-10 px-4 sm:px-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
			<div
				class="bg-background px-6 py-12 sm:rounded-xl sm:px-12 shadow-neumorphic"
			>
				<div class="sm:mx-auto sm:w-full sm:max-w-md">
					<h3
						class="pb-11 text-center text-2xl font-bold leading-9 tracking-tight text-primary"
					>
						Sign in
					</h3>
				</div>
				<form class="space-y-6">
					<div>
						<InputForText
							v-model="formData.email"
							label="Email address"
							required
							@update:data="(value: string) => handleUpdateData(value, 'email')"
						/>
					</div>

					<div>
						<InputForText
							v-model="formData.password"
							label="Password"
							type="password"
							required
							@update:data="
								(value: string) => handleUpdateData(value, 'password')
							"
						/>
					</div>

					<div class="items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								class="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-ring"
							/>
							<label
								for="remember-me"
								class="ml-3 block text-sm leading-6 text-primary"
							>
								Remember me
							</label>
						</div>

						<div class="text-sm leading-6">
							<a href="#" class="font-semibold text-primary hover:text-primary">
								Forgot password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							class="flex w-full justify-center text-base rounded-md shadow-neumorphic bg-button px-3 py-3 font-semibold leading-6 text-white hover:text-hover hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
							@click="handleLogin"
						>
							Sign in
						</button>
					</div>
				</form>

				<div>
					<div class="relative mt-10">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-secondary" />
						</div>
						<div
							class="relative flex justify-center text- font-light leading-6"
						>
							<span class="px-6 font-semibold bg-background text-primary">
								Or continue with
							</span>
						</div>
					</div>

					<div class="mt-6">
						<GithubButtonForSignIn @click="handleGitHubLogin" />
					</div>
				</div>
			</div>

			<p class="mt-10 text-center text-sm text-gray-500">
				Not a member?
				{{ " " }}
				<router-link
					to="/register"
					class="font-semibold leading-6 text-primary hover:text-secondary-500"
				>
					Register
				</router-link>
			</p>
		</div>
	</div>
</template>
