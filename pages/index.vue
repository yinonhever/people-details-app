<template>
  <Page title="People List">
    <v-row v-if="!hasLoaded" justify="center" class="load-button">
      <v-btn color="primary" elevation="4" rounded @click="buttonClickHandler">
        Load people
      </v-btn>
    </v-row>
    <section class="people-list-container">
      <BaseSpinner v-if="loading" />
      <BaseError v-else-if="error" :error="error" />
      <PeopleList v-else :people="people" />
    </section>
  </Page>
</template>

<script setup lang="ts">
import { useStore } from "~/store";

const store = useStore();

const { people, hasLoaded } = storeToRefs(store);
const loading = ref(false);
const error = ref<Error | null>(null);

const { loadPeople } = store;

const buttonClickHandler = async () => {
  loading.value = true;
  try {
    await loadPeople();
  } catch (err: any) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.load-button {
  margin-bottom: 50px;
}

.people-list-container {
  max-width: 1200px;
  margin: auto;
}
</style>
