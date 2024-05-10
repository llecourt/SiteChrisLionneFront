<script setup lang="ts">
import { ref, provide } from 'vue';

interface Props {
    nbImages: number
}
const props = defineProps<Props>();
const imagesLoaded = ref(0);
const imgLoadedCallback = () => {
    imagesLoaded.value++;
}
provide('imgLoadedCallback', imgLoadedCallback);
</script>

<template>
    <div :class="`${imagesLoaded < nbImages && 'hidden'}`">
        <slot ></slot>
    </div>
</template>