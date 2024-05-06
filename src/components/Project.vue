<script setup lang="ts">
import type { ProjectDTO } from '@/models/Project';
import { parseUrlFromImage } from '@/utils';
import { useMotions } from '@vueuse/motion';

interface Props {
    item: ProjectDTO
    fixedSize?: boolean
}
withDefaults(defineProps<Props>(), {
    fixedSize: true,
})
</script>

<template>
    <div :class="`group overflow-hidden drop-shadow-md ${fixedSize ? 'w-[400px] h-[200px]' : ''}`">
        <img :src="parseUrlFromImage(item.thumb_image, 'Projects', item.id, '500')" alt="image" loading="lazy" class="object-cover w-[100%] h-[100%] transition ease-in-out duration-200 group-hover:scale-125 group-hover:brightness-50"/>
        <RouterLink :to="{ name: `project-details`, params: { id : item.id} }">
            <div class="flex items-center justify-center absolute inset-0 opacity-0 transition ease-in-out duration-200 bg-transparent text-surface-100 group-hover:opacity-100 group-hover:cursor-pointer">
                <p class="font-bold text-lg text-center">{{ item.title }}</p>
            </div>
        </RouterLink>
    </div>
</template>