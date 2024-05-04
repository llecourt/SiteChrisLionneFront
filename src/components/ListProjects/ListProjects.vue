<script setup lang="ts">
import type { ProjectDTO } from '@/models/Project';
import axios, { type AxiosResponse } from 'axios';
import { onBeforeMount, ref } from 'vue'
import Project from './Project.vue';
import { useProjects } from '@/stores/projetsStore';
import { computed } from 'vue'

var props = defineProps<{
    frontPageOnly?: boolean
}>()

const projectsStore = useProjects();
const projects = computed(() => {
    return projectsStore.getAllFrontPageOnly
});
</script>

<template>
    <div class="animated bg-white w-[95%] shadow-sm mt-8">
        <div class="m-8">
            <div class="dynamic-grid">
                <Project v-for="(item, index) in projects" :key="index" :item />
            </div>
        </div>
    </div>
</template>

<style>
.dynamic-grid {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
    gap: 2rem;
    grid-template-rows: auto auto;
    grid-auto-rows: 0px;
    overflow: hidden;
}
@media (max-width: 1650px) {
    .dynamic-grid {
        grid-template-columns: repeat(2, 400px);
        grid-template-rows: auto auto auto;
    }
}
@media (max-width: 1200px) {
    .dynamic-grid {
        grid-template-columns: repeat(1, 400px);
        grid-template-rows: auto auto auto auto auto auto;
    }
}
</style>