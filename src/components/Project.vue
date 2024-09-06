<script setup lang="ts">
import type { ProjectDTO } from '@/models/Project';
import { parseUrlFromImage } from '@/utils';
import { useMotions } from '@vueuse/motion';
import ImageWithCallback from './UI/ImageWithCallback.vue';
import ImageWithSkeleton from './ImageWithSkeleton.vue';

interface Props {
    item: ProjectDTO
    fixedSize?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    fixedSize: true,
})
</script>

<template>
    <div :class="`group overflow-hidden drop-shadow-md rounded-md ${fixedSize && 'max-w-[400px] h-[200px]'}`">
        <ImageWithSkeleton :src="parseUrlFromImage(item.thumb_image, 'Projects', item.id, '500')" />
        <RouterLink :to="{ name: `Projet`, params: { id : item.id} }">
            <div class="flex items-center justify-center absolute inset-0 opacity-0 transition ease-in-out duration-200 bg-transparent text-white group-hover:opacity-100 group-hover:cursor-pointer">
                <p class="font-bold text-lg text-center">{{ item.title }}</p>
            </div>
        </RouterLink>
    </div>
</template>