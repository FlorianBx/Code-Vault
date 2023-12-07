import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase/firebase.config";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
  }),

  actions: {
    async initializeAuth() {
      if (auth.currentUser) {
        await this.updateLoginState();
      }
    },

    listenToAuthChanges() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await this.updateLoginState();
        } else {
          this.logout();
        }
      });
    },

    async updateLoginState() {
      try {
        const idToken = await auth.currentUser?.getIdToken();
        if (idToken) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      } catch (error) {
        this.isLoggedIn = false;
      }
    },

    logout() {
      this.isLoggedIn = false;
    },
  },
});
