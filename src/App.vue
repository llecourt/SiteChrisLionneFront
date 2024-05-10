<script setup lang="ts">
import Footer from './components/Footer.vue';
import SideBar from './components/SideBar.vue';
import { usePrestations } from './stores/prestationsStore';
import { useProjects } from './stores/projetsStore';
import MainContent from './components/UI/MainContent.vue';

const items = [{ name: 'Accueil', uri: '/' },
        { name: 'Prestations', uri: '/prestations' },
        { name: 'Galerie', uri: '/galerie' },
        { name: 'Contact', uri: '/contact' }]
const projectsStore = useProjects();
projectsStore.init();
const prestationsStore = usePrestations();
prestationsStore.init();
</script>

<template>
  <main>
    <div class="flex">
      <SideBar :items="items"/>
      <MainContent>
        <RouterView />
        <Footer />
      </MainContent>
    </div>
  </main>
</template>