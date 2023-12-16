// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: "%s – PeopleApp",
      title: "PeopleApp",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Livvic:wght@400;500;600;700;900&&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&&family=Comfortaa:wght@300;400;500;600;700&display=swap"
        }
      ]
    },

    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },

  css: ["vuetify/lib/styles/main.sass", "~/assets/scss/main.scss"],

  modules: ["@pinia/nuxt"],

  build: {
    transpile: ["vuetify"]
  },

  components: [
    { path: "~/components/layout", pathPrefix: false },
    { path: "~/components/UI", pathPrefix: false },
    { path: "~/components/home", pathPrefix: false }
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/abstracts.scss";'
        }
      }
    },
    define: {
      "process.env.DEBUG": false
    }
  }
});
