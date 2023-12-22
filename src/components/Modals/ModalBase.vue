<script setup lang="ts">
import { ref } from "vue";

const isShown = ref(true);
</script>

<template>
	<div v-if="isShown" class="modal">
		<div class="modal-content">
			<slot></slot>
			<slot name="listOfButtons"></slot>
		</div>
	</div>
</template>
