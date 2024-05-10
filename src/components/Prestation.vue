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
    <div v-if="side == 'right'" class="columns-1 lg:columns-2 gap-8 lg:m-12 my-8 lg:my-24">
        <div class="p-8 bg-neutral-300">
            <TitleText :animated="true">{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
        <div class="h-[50vw] lg:h-[30vw] overflow-hidden">
            <ImageWithSkeleton class="slide-left-anim shadow-lg" :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
    </div>
    <div v-else class="columns-1 lg:columns-2 gap-8 lg:m-12 my-8 lg:my-24">
        <div class="h-[50vw] lg:h-[30vw] overflow-hidden">
            <ImageWithSkeleton class="slide-right-anim" :src="parseUrlFromImage(item.image, 'Prestations', item.id, '1000')" />
        </div>
        <div class="p-8 bg-neutral-300">
            <TitleText :animated="true">{{ item.title }}</TitleText>
            <ParagraphText v-for="(paragraph, index) of item.paragraphs" class="mt-8 inline-block">{{ paragraph }}</ParagraphText>
        </div>
    </div>
</template>