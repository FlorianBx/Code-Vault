import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase/firebase.config";
import { useCookies } from "../composables/useCookies";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    idToken: useCookies().getCookie("idToken") || "",
  }),

  actions: {
    initializeAuth() {
      const token = useCookies().getCookie("idToken");
      if (token) {
        this.login(token);
      }
    },

    listenToAuthChanges() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.login(user.uid);
        } else {
          this.logout();
        }
      });
    },

    login(idToken: string) {
      this.idToken = idToken;
      this.isLoggedIn = true;
      useCookies().setCookie("idToken", idToken);
    },

    logout() {
      this.idToken = "";
      this.isLoggedIn = false;
      useCookies().deleteCookie("idToken");
    },
  },
});
