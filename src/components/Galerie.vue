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
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
import TitleText from './UI/TitleText.vue';
import Loader from './UI/Loader.vue';

const route = useRoute();
const basefilter = ref(route.params.basefilter as string);

const currentFilter = ref([] as string[]);

const projectsStore = useProjects();
const projects = computed(() => projectsStore.getFiltered(currentFilter.value));
const tags = computed(() => projectsStore.getTags);

const handleClick = (tag: string) => {
    const index = currentFilter.value.indexOf(tag);
    currentFilter.value.pop();
    if(index == -1) {
        currentFilter.value.push(tag);
    }
}

onMounted(() => {
    if(basefilter != undefined && basefilter.value != '') {
        currentFilter.value.push(basefilter.value);
    }
});
</script>

<template>
    <Background>
        <Card>
            <TitleText>Quelques exemples de réalisations.</TitleText>
            <Tag v-for="(tag) in tags" :label="tag" :clickable="true" :handleClick="() => handleClick(tag)" :active="currentFilter.indexOf(tag) != -1"/>
            <MasonryGrid>
                <TransitionGroup name="list">
                    <Project v-for="(item, index) in projects" :item :fixedSize="false" :key="item.id"/>
                </TransitionGroup>
            </MasonryGrid>
        </Card>
    </Background>
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