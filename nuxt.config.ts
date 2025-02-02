// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // nitro: {
  //   preset: "cloudflare-pages",
  // },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
})
