<script setup lang="ts">
import { parseUrlFromImage } from '@/utils';
import { computed, ref } from 'vue';
import Galerie from './GaleriePhoto.vue';
import { useRoute } from 'vue-router'
import { useProjects } from '@/stores/projetsStore';
import Card from './UI/Card.vue';
import MainContent from './UI/MainContent.vue';
import Tag from './UI/Tag.vue';

const route = useRoute();
const id = ref(route.params.id as string);
const projectsStore = useProjects();
const item = computed(() => projectsStore.getById(id.value));
const prevProjectId = computed(() => projectsStore.getPrevious(id.value));
const nextProjectId = computed(() => projectsStore.getNext(id.value));

const handleClick = () => {

}

</script>


<template>
    <MainContent class="flex flex-col items-center" v-if="item" :key="id">
        <div class="overflow-hidden w-[100%] h-[60vh] bg-cover bg-center" :style="{ 'background-image': `url(${parseUrlFromImage(item.banner_image, 'Projects', item.id)})` }" />
        <div class="flex mt-8 w-[95%]">
            <div :class="`flex items-center mr-auto cursor-default ${prevProjectId && 'transition hover:scale-125'}`" @click="() => { if(prevProjectId) id = prevProjectId.id }">
                <i :class="`${!prevProjectId && 'text-gray-500 opacity-40'} pi pi-arrow-left mr-2`"></i>
                <p :class="`${!prevProjectId && 'text-gray-500 opacity-40'}`">Projet précédent</p>
            </div>
            <div :class="`flex items-center ml-auto cursor-default ${nextProjectId && 'transition hover:scale-125'}`" @click="() => { if(nextProjectId) id = nextProjectId.id }">
                <p :class="`${!nextProjectId && 'text-gray-500 opacity-40'}`">Projet suivant</p>
                <i :class="`${!nextProjectId && 'text-gray-500 opacity-40'} pi pi-arrow-right ml-2`"></i>
            </div>
        </div>
        <Card shadow="md">
            <p class="text-2xl font-bold my-8">{{ item.title }}</p>
            <Tag v-for="(tag) in item.tags" :label="tag" :clickable="true" :handleClick/>
            <p class="my-8"></p>
            <p v-for="(paragraph, index) in item.paragraphs" :key="index" class="mb-4">{{ paragraph }}</p>
        </Card>
        <Card shadow="md">
            <Galerie :item="item" />
        </Card>
    </MainContent>
</template>