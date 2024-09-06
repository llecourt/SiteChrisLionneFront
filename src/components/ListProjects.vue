<script setup lang="ts">
import Project from './Project.vue';
import { useProjects } from '@/stores/projetsStore';
import { computed } from 'vue'
import Loader from './UI/Loader.vue';

var props = defineProps<{
    frontPageOnly?: boolean
}>()

const projectsStore = useProjects();
const projects = computed(() => {
    if(props.frontPageOnly) 
        return projectsStore.getAllFrontPageOnly
    return projectsStore.getAll
});
</script>

<template>
    <div class="dynamic-grid">
        <Project v-motion-slide-up v-for="(item, index) in projects" :key="index" :item />
    </div>
</template>

<style>
.dynamic-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 400px));
    justify-content: center;
    gap: 2rem;
}
@media (max-width: 1280px) {
    .dynamic-grid {
        grid-template-columns: repeat(2, minmax(0, 400px));
    }
}
@media (max-width: 768px) {
    .dynamic-grid {
        grid-template-columns: repeat(1, minmax(0, 400px));
    }
}
</style>