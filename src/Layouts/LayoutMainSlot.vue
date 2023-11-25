<template>
  <transition>
    <div v-show="true" class="mx-auto sm:mt-10 sm:px-8">
      <div class="flex flex-wrap justify-center gap-4">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 80%;
  filter: blur(0.1rem);
}
</style>
