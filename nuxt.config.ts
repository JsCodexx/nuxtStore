// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      title: "Dollar Store",
      meta: [{ name: "description", content: "Everything about us" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  runtimeConfig: {
    currencykey: process.env.CURRENCY_API_KEY
  },
});
