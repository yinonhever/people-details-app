import { defineStore } from "pinia";
import axios from "axios";
import type { Person, RandomapiPeopleRes } from "~/assets/util/types";

export const useStore = defineStore("main", () => {
  const people = ref<Person[]>([]);
  const hasLoaded = ref(false);

  const loadPeople = async () => {
    const { data } = await axios.get<RandomapiPeopleRes>(
      "https://randomuser.me/api?results=10"
    );
    people.value = data.results;
    hasLoaded.value = true;
  };

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
