<script setup lang="ts">
import { ref } from "vue";
import { useSocialIcons } from "../composables/useSocialIcons";

const { GithubIcon, LinkedinIcon, InstagramIcon } = useSocialIcons();

const secondary = ref("#81A1C1");
</script>

<template>
  <footer
    class="flex flex-col -mt-30 items-center max-w-full font-body overflow-hidden px-6 pb-20 sm:pb-8 lg:px-8"
  >
    <div class="mt-20 flex justify-center gap-12 w-full">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/BFlorian91"
        class="text-gray-400 hover:text-hover transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="Check out my GitHub repositories"
      >
        <GithubIcon :color="secondary" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/florianbeaumont/"
        class="text-gray-400 hover:text-hover transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="View my LinkedIn profile"
      >
        <LinkedinIcon :color="secondary" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/fb.visual/"
        class="text-gray-400 hover:text-hover transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="Follow me on Instagram"
      >
        <InstagramIcon :color="secondary" />
      </a>
    </div>
    <p tabindex="0" class="mt-10 text-center text-xs leading-5 text-primary">
      &copy; 2023 Made with 🩷 by Florian Beaumont
    </p>
  </footer>
</template>
