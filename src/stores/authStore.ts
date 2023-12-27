import { defineStore } from "pinia";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../services/firebase/firebase.config";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		isLoggedIn: false,
		user: null as User | null,
		showLoginNotification: false,
		triggerLoginNotification: false,
	}),

	actions: {
		async initializeAuth() {
			if (auth.currentUser) {
				await this.login();
			}
		},

		getUserId(): string | null {
			return this.user ? this.user.uid : null;
		},

		listenToAuthChanges() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					this.user = user;
					await this.login();
				} else {
					this.user = null;
					this.logout();
				}
			});
		},

		async login() {
			try {
				if (this.user) {
					this.isLoggedIn = true;
					if (localStorage.getItem("triggerLoginNotification")) {
						this.showLoginNotification = true;
						localStorage.removeItem("triggerLoginNotification");
						setTimeout(() => {
							this.showLoginNotification = false;
						}, 3000);
					}
				} else {
					this.isLoggedIn = false;
				}
			} catch (error) {
				this.isLoggedIn = false;
			}
		},

		logout() {
			this.isLoggedIn = false;
			this.triggerLoginNotification = false;
		},
	},
});
