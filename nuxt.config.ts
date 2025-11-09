// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@artmizu/nuxt-prometheus',
  ],
  runtimeConfig: {
    public: {
      enableNsfw: false,

      rybbitAnalytics: {
        // NUXT_PUBLIC_RYBBIT_ANALYTICS_HOST=<your-host>
        host: 'https://app.rybbit.io',
        // NUXT_PUBLIC_RYBBIT_ANALYTICS_SITE_ID=<your-site-id>
        siteId: '',
      },
    },
  },
  prometheus: {
    verbose: false,
  },
})
