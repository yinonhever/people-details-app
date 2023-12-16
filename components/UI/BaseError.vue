<template>
  <v-alert v-if="error" type="error" class="error-message">
    {{ message }}
  </v-alert>
</template>

<script setup lang="ts">
import { AxiosError } from "axios";

const { error } = defineProps<{
  error: Error | null;
}>();

const message = computed(() =>
  error instanceof AxiosError
    ? error.response?.data?.msg
    : error?.message || "An error occured. Please try again in a few moments."
);
</script>

<style lang="scss" scoped>
.error-message {
  text-align: left;
  margin-bottom: 0 !important;
}
</style>
