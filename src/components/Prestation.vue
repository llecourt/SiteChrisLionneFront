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
        <div class="p-8 bg-neutral-300 h-full flex flex-col justify-center">
            <TitleText>{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
        <div class="slide-left-anim h-[50vw] lg:h-[30vw] overflow-hidden shadow-lg">
            <ImageWithSkeleton :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
    </div>
    <div v-else class="lg:m-12 my-8 lg:my-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div class="slide-right-anim h-[50vw] lg:h-[30vw] overflow-hidden shadow-lg">
            <ImageWithSkeleton :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
        <div class="p-8 bg-neutral-300 h-full flex flex-col justify-center">
            <TitleText>{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
    </div>
</template>