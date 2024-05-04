<script setup lang="ts">
import type { ProjectDTO } from '@/models/Project';
import { parseUrl } from '@/utils';
import { ref } from 'vue';

defineProps<{
    item: ProjectDTO
}>()

const visible = ref(false);

</script>

<template>
    <div v-motion-slide-up class="group overflow-hidden border drop-shadow-xl w-[400px] h-[200px]">
        <img :src="parseUrl(item.thumb_image, 'Projects', item.id)" alt="image" loading="lazy" class="object-cover w-[100%] transition ease-in-out duration-200 group-hover:scale-125 group-hover:brightness-50"/>
        <RouterLink :to="{ name: `project-details`, params: { id : item.id} }">
            <div class="flex items-center justify-center absolute inset-0 opacity-0 transition ease-in-out duration-200 bg-transparent text-surface-100 group-hover:opacity-100 group-hover:cursor-pointer">
                <p class="font-bold text-lg text-center">{{ item.title }}</p>
            </div>
        </RouterLink>
    </div>
</template>