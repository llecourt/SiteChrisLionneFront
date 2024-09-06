<script setup lang="ts">
import TitleText from './UI/TitleText.vue';
import ParagraphText from './UI/ParagraphText.vue';
import type { PresentationDTO } from '@/models/Prestation';
import { parseUrlFromImage } from '@/utils';
import ImageWithCallback from './UI/ImageWithCallback.vue';
import ImageWithSkeleton from './ImageWithSkeleton.vue';

interface Props {
    item: PresentationDTO
    side: 'left' | 'right'
}
withDefaults(defineProps<Props>(), {
    side: 'right',
});
</script>

<template>
    <div v-if="side == 'right'" class="lg:m-12 my-8 lg:my-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="p-8 bg-neutral-300 h-full flex flex-col justify-center shadow-lg max-lg:rounded-t-lg lg:rounded-l-lg">
            <TitleText>{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
        <div v-motion-slide-left class="h-[50vw] lg:h-[30vw] overflow-hidden shadow-lg max-lg:rounded-b-lg lg:rounded-r-lg">
            <ImageWithSkeleton :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
    </div>
    <div v-else class="lg:m-12 my-8 lg:my-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div v-motion-slide-right class="h-[50vw] lg:h-[30vw] overflow-hidden shadow-lg rounded-l-lg">
            <ImageWithSkeleton :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
        <div class="p-8 bg-neutral-300 h-full flex flex-col justify-center shadow-lg rounded-r-lg">
            <TitleText>{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
    </div>
</template>