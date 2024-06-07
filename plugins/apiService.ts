// plugins/apiService.ts
import { defineNuxtPlugin } from '#app';
import ApiService from '../composables/services/ApiService';

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const apiService = new ApiService(config.public.baseURL, '/users');

  return {
    provide: {
      apiService
    }
  };
});
