<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { LoginDTO } from '../composables/dto/UserDTO';

const email = ref('');
const password = ref('');
const router = useRouter();
const { $apiService } = useNuxtApp();

const login = async () => {
    const data = new LoginDTO(email.value, password.value);
    try {
        const response = await $apiService.login(data);
        $apiService.setAuthToken(response.data.token);
        localStorage.setItem('authToken', response.data.token);
        await router.push('/users');
    } catch (error) {
        console.error(error);
    }
};
</script>