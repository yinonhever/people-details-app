<template>
  <Page title="Person Details">
    <GoBackButton />
    <section class="person-details">
      <div class="person-details__image-container">
        <v-img
          class="person-details__image"
          :src="matchingPerson.picture.large"
          :alt="fullName"
        />
      </div>
      <div class="person-details__list">
        <div class="person-details__item">
          <strong>Full name</strong>
          <div class="person-details__inputs">
            <v-text-field
              v-model="formData.name.title"
              label="Title"
              hide-details
              autocomplete="title"
              :error="!!error && !formData.name.title"
            />
            <v-text-field
              v-model="formData.name.first"
              label="First name"
              hide-details
              autocomplete="first-name"
              :error="!!error && !formData.name.first"
            />
            <v-text-field
              v-model="formData.name.last"
              label="Last name"
              hide-details
              autocomplete="last-name"
              :error="!!error && !formData.name.last"
            />
          </div>
        </div>
        <div class="person-details__item">
          <strong>Address</strong>
          <span>{{ address }}</span>
        </div>
        <div class="person-details__item">
          <strong>Email address</strong>
          <span>{{ matchingPerson.email }}</span>
        </div>
        <div class="person-details__item">
          <strong>Phone number</strong>
          <span>{{ matchingPerson.phone }}</span>
        </div>
        <v-btn
          color="primary"
          rounded
          block
          @click="submitHandler"
          class="person-details__button"
        >
          Update
        </v-btn>
        <BaseError v-if="error" :error="error" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import cloneDeep from "clone-deep";
import { useStore } from "~/store";

const store = useStore();
const { people, hasLoaded } = storeToRefs(store);
const { updatePersonData } = store;

const router = useRouter();
if (!hasLoaded) {
  router.replace("/");
}

const route = useRoute();
const { id: personId } = route.params;
const matchingPerson = people.value.find(
  person => person.login.uuid === personId
);
if (!matchingPerson) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

const fullName = computed(() => {
  const { title, first, last } = matchingPerson.name;
  return `${title} ${first} ${last}`;
});

const address = computed(() => {
  const { street, city, state, country } = matchingPerson.location;
  return `${street.number} ${street.name}, ${city}, ${state}, ${country}`;
});

const formData = reactive(cloneDeep(matchingPerson));
const error = ref<Error | null>();

const submitHandler = () => {
  const { title, first, last } = formData.name;
  if (!title || !first || !last) {
    error.value = new Error("Please fill in all the fields");
    return;
  }
  error.value = null;
  updatePersonData(personId as string, formData);
  router.push("/");
};
</script>

<style lang="scss" scoped>
.person-details {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  max-width: 1500px;
  align-items: center;
  margin: auto;

  @include respond(tablet-land) {
    gap: 50px;
  }

  @include respond(tablet) {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  @include respond(mobile) {
    gap: 50px;
  }

  &__image {
    width: 100%;
    margin: auto;
    border-radius: 10px;

    @include respond(tablet) {
      max-width: 450px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  &__item {
    & > * {
      display: block;
      font-size: 15px;

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  &__inputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include respond(mobile-land) {
      gap: 10px;
    }

    @include respond(mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__button {
    margin-top: 5px;
  }
}
</style>
