<script setup lang="ts">
import ModalBase from "./ModalBase.vue";

const emit = defineEmits(["delete", "cancel"]);

const handleDelete = () => emit("delete");
const handleCancel = () => emit("cancel");
</script>

<template>
	<ModalBase>
		<h4>Delete</h4>
		<template #listOfButtons>
			<button data-testid="cancel-btn" @click="handleCancel">cancel</button>
			<button data-testid="delete-btn" @click="handleDelete">delete</button>
		</template>
	</ModalBase>
</template>
