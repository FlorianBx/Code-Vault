import { Directive } from "vue";

export const scrollTo: Directive = {
  beforeMount(el, binding) {
    const eventListener = () => {
      const targetSelector = binding.value as string;
      if (!targetSelector) {
        console.warn("No target selector provided for scrollTo directive.");
        return;
      }

      const target = document.querySelector(targetSelector);
      if (target instanceof HTMLElement) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      } else {
        console.warn(`Target element "${targetSelector}" not found.`);
      }
    };

    el.addEventListener("click", eventListener);

    // Store the event listener on the element for later access
    el._eventListener = eventListener;
  },
  unmounted(el) {
    // Remove the event listener
    el.removeEventListener("click", el._eventListener);
  },
};
