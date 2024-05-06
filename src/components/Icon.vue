<script setup lang="ts">
defineProps<{
    name: string,
    link?: string,
}>()
</script>

<template>
    <a :href="link">
        <i :class="`pi ${name} text-4xl text-white hover:text-kaki m-3 transition ease-in-out delay-50 hover:scale-110`"></i>
    </a>
</template>