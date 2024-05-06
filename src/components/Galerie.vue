<script setup lang="ts">
import Card from './UI/Card.vue';
import MainContent from './UI/MainContent.vue';
import Background from './UI/Background.vue';
import { useProjects } from '@/stores/projetsStore';
import { computed } from 'vue'
import MasonryGrid from './UI/MasonryGrid.vue';
import Project from './Project.vue';
import { ref } from 'vue';
import Tag from './UI/Tag.vue';

const currentFilter = ref([] as string[]);

const projectsStore = useProjects();
const projects = computed(() => projectsStore.getFiltered(currentFilter.value));
const tags = computed(() => projectsStore.getTags);

const handleClick = (tag: string) => {
    const index = currentFilter.value.indexOf(tag);
    if(index != -1) {
        currentFilter.value.splice(index, 1);
    } else {
        currentFilter.value.push(tag);
    }
}
</script>

<template>
    <MainContent>
        <Background>
            <Card>
                <p class="mt-4 font-bold text-3xl mb-4 text-neutral-900 text-center md:text-left">Voici quelques exemples de réalisations.</p>
                <Tag v-for="(tag) in tags" :label="tag" :clickable="true" :handleClick="() => handleClick(tag)" :active="currentFilter.indexOf(tag) != -1"/>
                <MasonryGrid>
                    <TransitionGroup name="list">
                        <Project v-for="(item, index) in projects" :item :fixedSize="false" :key="item.id"/>
                    </TransitionGroup>
                </MasonryGrid>
            </Card>
        </Background>
    </MainContent>
</template>

<style>
.list-move {
  transition: transform 0.4s ease;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
    position: absolute;
    display: none
}
</style>