<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue';
import { inject } from 'vue';
interface Props extends /* @vue-ignore */ ImgHTMLAttributes {}
const props = defineProps<Props>();
const callbackfn = inject('imgLoadedCallback');
</script>

<template>
    <img v-bind="props" @load="callbackfn" />
</template>