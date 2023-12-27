import { auth } from "../services/firebase/firebase.config";
import { useAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const useLogout = () => {
	const error = ref<string | null>(null);
	const authStore = useAuthStore();
	const router = useRouter();

	const logout = async (): Promise<void> => {
		try {
			await auth.signOut();
			authStore.logout();
			router.push("/");
			error.value = null;
		} catch (err: unknown) {
			error.value =
				err instanceof Error ? err.message : "Oops ! something went wrong";
		}
	};

	return {
		error,
		logout,
	};
};
