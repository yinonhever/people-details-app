import { defineStore } from "pinia";
import axios from "axios";
import type { Person, RandomapiPeopleRes } from "~/assets/util/types";

/**
 * The Pinia store managing the global state of the app (the list of people).
 */
export const useStore = defineStore("main", () => {
  const people = ref<Person[]>([]);
  const hasLoaded = ref(false);

  /**
   * Retrieving a list of 10 random from Randomuser API and saving them into
   * the store's state.
   */
  const loadPeople = async () => {
    const { data } = await axios.get<RandomapiPeopleRes>(
      "https://randomuser.me/api?results=10"
    );
    people.value = data.results;
    hasLoaded.value = true;
  };

  /**
   * Updating a specific person's data in the global state, based on the person's
   * unique ID. The function replaces the existing data of the person with the
   * new data object it receives as a parameter.
   */
  const updatePersonData = (personId: string, data: Person) => {
    const updatedPeople = [...people.value];
    const index = updatedPeople.findIndex(
      person => person.login.uuid === personId
    );
    updatedPeople[index] = data;
    people.value = updatedPeople;
  };

  return { people, hasLoaded, loadPeople, updatePersonData };
});
