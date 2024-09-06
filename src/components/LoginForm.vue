<script setup lang="ts">
import { ref } from 'vue';
import instance from "@/axiosInstance";

const email = ref('');
const password = ref('');
const error = ref('');

const login = async () => {
    const form = new FormData();
    form.append("email", email.value);
    form.append("password_clear", password.value);
    instance.post("account/login", form, { headers: { "Content-Type": "multipart/form-data" }})
    .then((res) => {
        localStorage.setItem('auth-token', res.data);
    })
    .catch((err) => {
        console.log(err.response.data);
    });
}
</script>

<template>
    <div>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input v-model="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>