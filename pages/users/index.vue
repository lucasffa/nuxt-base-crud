<template>
    <div>
        <h1>Create User</h1>
        <form @submit.prevent="createUser">
            <input v-model="name" type="text" placeholder="Name" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Create User</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { UserDTO } from '../../composables/dto/UserDTO';

// Define page meta to include the auth middleware
definePageMeta({
    middleware: 'auth'
});

const name = ref('');
const email = ref('');
const password = ref('');
const { $apiService } = useNuxtApp();

const createUser = async () => {
    const data = new UserDTO(name.value, email.value, password.value);
    try {
        const response = await $apiService.createUser(data);
        console.log('User created:', response.data);
    } catch (error) {
        console.error(error);
    }
};
</script>