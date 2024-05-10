<script setup lang="ts">
import { parseUrlFromImage } from '@/utils';
import type { ProjectDTO } from '@/models/Project';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import MasonryGrid from './UI/MasonryGrid.vue';
defineProps<{
    item: ProjectDTO;
}>()

Fancybox.bind('[data-fancybox]', {
        // Your custom options
      }); 
</script>

<template>
    <MasonryGrid>
        <div v-motion-slide-up v-for="(image, index) in item.images" class="overflow-hidden shadow-sm">
            <a data-fancybox="gallery" :data-src="parseUrlFromImage(image, 'Projects', item.id)">
                <img :src="parseUrlFromImage(image, 'Projects', item.id, '500')" alt="image" loading="lazy" class="transition ease-in-out duration-200 hover:scale-125 hover:brightness-50"/>
            </a>
        </div>
    </MasonryGrid>
</template>