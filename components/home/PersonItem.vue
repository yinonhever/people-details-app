<template>
  <NuxtLink :href="link" class="person">
    <v-card elevation="4" class="person__card pa-4">
      <div class="person__content">
        <div class="person__main">
          <div class="person__avatar">
            <v-avatar size="48px">
              <v-img :src="picture.thumbnail" :alt="fullName" />
            </v-avatar>
          </div>
          <div class="person__main-details">
            <h2 class="person__name">{{ fullName }}</h2>
            <span class="person__gender">{{ formattedGender }}</span>
            <CountryItem :code="nat" class="person__country" />
          </div>
        </div>
        <div class="person__contact">
          <strong>Email:</strong>
          <span>{{ email }}</span>
        </div>
        <div class="person__contact">
          <strong>Phone number:</strong>
          <span>{{ phone }}</span>
        </div>
      </div>
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Person } from "~/assets/util/types";
import _ from "lodash";

const { person } = defineProps<{
  person: Person;
}>();

const { name, gender, nat, picture, email, phone, login } = person;
const { uuid: personId } = login;

const fullName = computed(() => {
  const { title, first, last } = name;
  return `${title} ${first} ${last}`;
});

const formattedGender = _.capitalize(gender);

const link = computed(() => `/people/${personId}`);
</script>

<style lang="scss" scoped>
.person {
  display: block;

  &__card {
    transition: background-color 0.4s;

    &:hover {
      background-color: #cee9fc;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50x;
    align-items: center;

    @include respond(tablet) {
      grid-template-columns: 1fr;
      align-items: initial;
      gap: 15px;
    }
  }

  &__main {
    display: flex;
    align-items: center;

    @include respond(tablet) {
      flex-direction: column;
      text-align: center;
    }

    & > *:not(:last-child) {
      display: block;
      margin-right: 20px;

      @include respond(tablet) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }

  &__main-details {
    display: flex;
    flex-direction: column;

    @include respond(tablet) {
      align-items: center;
    }
  }

  &__name {
    font-size: 17px;
  }

  &__gender {
    font-size: 15px;
  }

  &__country {
    font-size: 15px;
    margin-top: 5px;

    @include respond(tablet) {
      margin-top: 0;
    }
  }

  &__contact {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    font-size: 15px;
  }
}
</style>
