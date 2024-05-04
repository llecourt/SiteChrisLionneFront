<script setup lang="ts">
import SideBar from './components/SideBar/SideBar.vue';
import { useProjects } from './stores/projetsStore';

const items = [{ label: 'Accueil', url: '/' },
        { label: 'Prestations', url: 'prestations' },
        { label: 'Galerie', url: 'galerie' },
        { label: 'Contact', url: 'contact' }]
const projectsStore = useProjects();
projectsStore.init();
</script>

<template>
  <main>
    <div class="flex">
      <SideBar :items="items"/>
      <RouterView />
    </div>
  </main>
</template>