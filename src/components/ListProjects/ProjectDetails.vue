<script setup lang="ts">
import type { ProjectDTO } from '@/models/Project';
import { parseUrl } from '@/utils';
import { computed, reactive, ref } from 'vue';
import Galerie from '../Galerie/Galerie.vue';
import { useRoute, useRouter } from 'vue-router'
import Chip from 'primevue/chip';
import { useProjects } from '@/stores/projetsStore';

const route = useRoute();
const id = ref(route.params.id as string);
const projectsStore = useProjects();
const item = computed(() => projectsStore.getById(id.value));
const prevProjectId = computed(() => projectsStore.getPrevious(id.value));
const nextProjectId = computed(() => projectsStore.getNext(id.value));
</script>


<template>
    <div class="ml-[0%] md:ml-sidebar-margin w-full flex flex-col items-center" v-if="item" :key="id">
        <div class="overflow-hidden w-[100%] h-[60vh] bg-cover bg-center" :style="{ 'background-image': `url(${parseUrl(item.banner_image, 'Projects', item.id)})` }" />
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
        <div class="bg-white w-[95%] shadow-md mt-8">
                <div class="m-8">
                    <p class="text-2xl font-bold my-8">{{ item.title }}</p>
                    <Chip v-for="(item) in ['Rénovation', 'Extension', 'Soustons']" :label="item" class="m-1" />
                    <p v-for="(paragraph, index) in item.paragraphs" :key="index" class="my-8">{{ paragraph }}</p>
                </div>
            </div>
            <div class="bg-white w-[95%] shadow-md mt-8">
                <div class="m-8">
                    <Galerie :item="item" />
                </div>
            </div>
    </div>
</template>