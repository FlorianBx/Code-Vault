import { ref } from "vue";
import { auth } from "../services/firebase/firebase.config";
import { useAuthStore } from "../store/authStore";
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

export function useLogin() {
  const authStore = useAuthStore();
  const error = ref<string | null>(null);

  const loginWithEmailAndPassword = async (
    user: EmailAndPasswordUser,
  ): Promise<UserCredential | null> => {
    console.log("user : ", user);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password,
      );
      error.value = null;

      const idToken = await userCredential.user.getIdToken();
      authStore.login(idToken);
      return userCredential;
    } catch (err: unknown) {
      error.value =
        err instanceof Error ? err.message : "Oops ! something went wrong";
      console.warn("err : ", err);
      return null;
    }
  };

  const loginWithGitHub = async (): Promise<UserCredential | null> => {
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      error.value = null;

      const idToken = await userCredential.user.getIdToken();
      authStore.login(idToken);
      return userCredential;
    } catch (err: unknown) {
      error.value =
        err instanceof Error
          ? err.message
          : "Une erreur inattendue s'est produite";
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth.signOut();
      authStore.logout();
      error.value = null;
    } catch (err: unknown) {
      error.value =
        err instanceof Error ? err.message : "Oops ! something went wrong";
      console.warn("err : ", err);
    }
  };

  return {
    error,
    loginWithEmailAndPassword,
    loginWithGitHub,
    logout,
  };
}
