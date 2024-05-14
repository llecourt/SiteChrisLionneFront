<script setup lang="ts">
import { ref, type ImgHTMLAttributes } from 'vue';

interface Props {
    src: string
}
defineProps<Props>();
let loaded = ref(false);
</script>

<template>
    <div class="w-full h-full transition ease-in-out duration-200 group-hover:scale-125 group-hover:brightness-50">
        <div :class="`w-full h-full bg-gray-300 animate-pulse ${loaded && 'hidden'}`"></div>
        <img :src="src" :class="`object-cover w-full h-full ${!loaded && 'hidden'}`" @load="loaded = true"/>
    </div>
</template>