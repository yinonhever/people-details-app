import type { Pinia } from "pinia";
import { useStore } from "~/store";

export default defineNuxtPlugin(({ $pinia }) => ({
  provide: {
    store: useStore($pinia as Pinia)
  }
}));
