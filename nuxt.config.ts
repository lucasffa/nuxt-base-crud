// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    plugins: [],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
});
