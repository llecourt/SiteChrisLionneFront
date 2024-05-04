<script setup lang="ts">
import Image from 'primevue/image';
import { parseUrl } from '@/utils';
import type { ProjectDTO } from '@/models/Project';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

defineProps<{
    item: ProjectDTO;
}>()

Fancybox.bind('[data-fancybox]', {
        // Your custom options
      }); 
</script>

<template>
    <div class="p-5 sm:p-8">
        <div :class="`columns-1 gap-4 sm:columns-2 md:columns-3 ${item.images.length >= 7 && 'lg:columns-4'} [&>div:not(:first-child)]:mt-4`">
            <div v-motion-slide-up v-for="(image, index) in item.images" class="overflow-hidden">
                <a data-fancybox="gallery" :data-src="parseUrl(image, 'Projects', item.id)">
                    <img :src="parseUrl(image, 'Projects', item.id)" alt="image" loading="lazy" class="transition ease-in-out duration-200 hover:scale-125 hover:brightness-50"/>
                </a>
            </div>
        </div>
    </div>
</template>