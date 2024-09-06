<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    label: string
    clickable? : boolean
    handleClick?: () => void
    active?: boolean
}

withDefaults(defineProps<Props>(), {
    clickable: false,
    handleClick: () => {},
    active: false
});
</script>

<template>
    <div @click="handleClick" :class="`${active ? 'bg-kaki text-white' : 'bg-gray-100'} transition duration-200 ease-in-out inline-flex py-0.5 px-3 items-center justify-between text-md capitalize rounded-full cursor-default ${clickable && 'hover:cursor-pointer'} mb-2 mr-2`">
        <p>{{ label }}</p>
    </div>
</template>