<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 4px solid transparent;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.7s cubic-bezier(0.42, 0, 0.58, 1) infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
