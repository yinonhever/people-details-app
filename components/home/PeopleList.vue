<template>
  <div class="people-list">
    <PersonItem
      v-for="person in people"
      :key="person.login.uuid"
      :person="person"
    />
  </div>
</template>

<script setup lang="ts">
import type { Person } from "~/assets/util/types";

defineProps<{
  people: Person[];
}>();
</script>

<style lang="scss" scoped>
.people-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
</style>
