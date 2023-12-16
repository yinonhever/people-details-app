<template>
  <span v-if="code && matchingCountry" class="country">
    <img class="country__flag" :src="matchingCountry.image" />
    {{ matchingCountry.name }}
  </span>
  <span v-else>
    {{
      matchingCountry
        ? matchingCountry.name
        : code === "WW"
        ? "Worldwide"
        : code || "—"
    }}
  </span>
</template>

<script setup lang="ts">
import countries from "~/assets/util/countries.json";
// A component that receives a country 2-letter code as a prop,
// and displays the matching country's full name and flag, using a local
// JSON data of countries (by default) or an array of countries passed as a prop.

const { code, options = [...countries] } = defineProps<{
  code: string;
  options?: { code: string; name: string; image: string }[];
}>();

const matchingCountry = computed(() =>
  options.find(country => country.code === code)
);
</script>

<style lang="scss" scoped>
.country {
  display: flex;
  align-items: center;
  word-break: normal;

  &__flag {
    width: 20px;
    margin-right: 5px;
  }
}
</style>
