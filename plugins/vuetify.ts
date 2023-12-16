import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#1976d2"
  }
};

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
