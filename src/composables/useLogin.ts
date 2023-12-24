import { ref } from "vue";
import { auth } from "../services/firebase/firebase.config";
import { useAuthStore } from "../stores/authStore";
import {
	UserCredential,
	signInWithEmailAndPassword,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";

interface EmailAndPasswordUser {
	email: string;
	password: string;
}

export const useLogin = () => {
	const authStore = useAuthStore();
	const error = ref<string | null>(null);

	const loginWithEmailAndPassword = async (
		user: EmailAndPasswordUser,
	): Promise<UserCredential | null> => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				user.email,
				user.password,
			);
			error.value = null;

			if (auth.currentUser) {
				authStore.login();
			}
			return userCredential;
		} catch (err: unknown) {
			error.value =
				err instanceof Error ? err.message : "Oops ! something went wrong";
			return null;
		}
	};

	const loginWithGitHub = async (): Promise<UserCredential | null> => {
		try {
			const provider = new GithubAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			error.value = null;

			authStore.login();
			return userCredential;
		} catch (err: unknown) {
			error.value =
				err instanceof Error ? err.message : "Oops ! something went wrong";
			return null;
		}
	};

	return {
		error,
		loginWithEmailAndPassword,
		loginWithGitHub,
	};
};
