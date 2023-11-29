<template>
  <div class="">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader {
  border: 5px solid transparent;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 105px;
  height: 105px;
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
