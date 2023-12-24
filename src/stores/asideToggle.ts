import { defineStore } from "pinia";

export const useAsideToggleStore = defineStore("asidetoggle", {
	state: (): { isAsideOpen: boolean; isClicked: boolean } => ({
		isAsideOpen: false,
		isClicked: false,
	}),
	actions: {
		openAside(): void {
			this.isAsideOpen = true;
		},
		closeAside(): void {
			this.isAsideOpen = false;
		},
		toggleAside(): void {
			this.isClicked = !this.isClicked;
			this.isAsideOpen = this.isClicked || !this.isAsideOpen;
		},
	},
});
