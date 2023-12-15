import { auth } from "../services/firebase/firebase.config";
import { useAuthStore } from "../store/authStore";
import { ref } from "vue";

export const useLogout = () => {
	const error = ref<string | null>(null);
	const authStore = useAuthStore();

	const logout = async (): Promise<void> => {
		try {
			await auth.signOut();
			authStore.logout();
			error.value = null;
		} catch (err: unknown) {
			error.value =
				err instanceof Error ? err.message : "Oops ! something went wrong";
		} finally {
			console.log("Logout composable : ", error.value);
		}
	};

	return {
		error,
		logout,
	};
};
