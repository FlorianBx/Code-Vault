import { defineStore } from "pinia";

export const useAsideToggleStore = defineStore("asidetoggle", {
	state: () => ({
		isAsideOpen: false,
		isHovered: false,
		isClicked: false,
	}),
	actions: {
		setHovered(hovered: boolean): void {
			this.isHovered = hovered;
			if (hovered) {
				this.openAside();
			} else if (!this.isClicked) {
				this.closeAsideWithDelay();
			}
		},
		toggleAside(): void {
			this.isClicked = !this.isClicked;
			if (this.isClicked) {
				this.openAside();
			} else {
				this.closeAside();
			}
		},
		openAside(): void {
			this.isAsideOpen = true;
		},
		closeAside(): void {
			this.isAsideOpen = false;
		},
		closeAsideWithDelay(): void {
			if (!this.isClicked) {
				setTimeout(() => {
					if (!this.isHovered) {
						this.isAsideOpen = false;
					}
				}, 400);
			}
		},
	},
});
