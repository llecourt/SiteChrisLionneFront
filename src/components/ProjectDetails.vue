<script setup lang="ts">
import { parseUrlFromImage } from '@/utils';
import { computed, ref } from 'vue';
import Galerie from './GaleriePhoto.vue';
import { useRoute } from 'vue-router'
import { useProjects } from '@/stores/projetsStore';
import Card from './UI/Card.vue';
import MainContent from './UI/MainContent.vue';
import Tag from './UI/Tag.vue';
import { router } from '@/router';
import TitleText from './UI/TitleText.vue';
import ParagraphText from './UI/ParagraphText.vue';
import Separator from './UI/Separator.vue';
import OverImageText from './UI/OverImageText.vue';
import Background from './UI/Background.vue';
const route = useRoute();
const id = ref(route.params.id as string);
const projectsStore = useProjects();
const item = computed(() => projectsStore.getById(id.value));
const prevProjectId = computed(() => projectsStore.getPrevious(id.value));
const nextProjectId = computed(() => projectsStore.getNext(id.value));

const handleClick = (tag: string) => {
    router.push({ name: 'galerie', params: { basefilter: tag } });
}

</script>


<template>
    <div class="flex flex-col items-center" v-if="item" :key="id">
        <div class="flex overflow-hidden w-[100%] h-[30vh] md:h-[60vh] bg-cover bg-center" :style="{ 'background-image': `url(${parseUrlFromImage(item.banner_image, 'Projects', item.id)})` }">
            <div class="w-full h-full opacity-50 bg-black"></div>
            <OverImageText class="self-center">{{ item.title }}</OverImageText>
        </div>
        <Card>
            <div class="flex mt-8">
                <div :class="`flex items-center mr-auto cursor-default ${prevProjectId && 'transition hover:scale-125'}`" @click="() => { if(prevProjectId) id = prevProjectId.id }">
                    <i :class="`${!prevProjectId && 'text-gray-500 opacity-40'} pi pi-arrow-left mr-2`"></i>
                    <p :class="`${!prevProjectId && 'text-gray-500 opacity-40'}`">Projet précédent</p>
                </div>
                <div :class="`flex items-center ml-auto cursor-default ${nextProjectId && 'transition hover:scale-125'}`" @click="() => { if(nextProjectId) id = nextProjectId.id }">
                    <p :class="`${!nextProjectId && 'text-gray-500 opacity-40'}`">Projet suivant</p>
                    <i :class="`${!nextProjectId && 'text-gray-500 opacity-40'} pi pi-arrow-right ml-2`"></i>
                </div>
            </div>
            <Separator />
            <Tag v-for="(tag) in item.tags" :label="tag" :clickable="true" :handleClick="() => handleClick(tag)"/>
            <p class="mt-6"></p>
            <ParagraphText v-for="(paragraph, index) in item.paragraphs" :key="index" class="mb-1">{{ paragraph }}</ParagraphText>
            <Separator />
            <Galerie :item="item" />
        </Card>
    </div>
</template>