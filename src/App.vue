<script setup lang="ts">
import Footer from './components/Footer.vue';
import SideBar from './components/SideBar.vue';
import { usePrestations } from './stores/prestationsStore';
import { useProjects } from './stores/projetsStore';
import MainContent from './components/UI/MainContent.vue';
import Toaster from './components/UI/toast/Toaster.vue';

const projectsStore = useProjects();
projectsStore.init();
const prestationsStore = usePrestations();
prestationsStore.init();
</script>

<template>
  <main>
    <div class="flex">
      <SideBar />
      <MainContent>
        <Toaster />
        <RouterView :key="$route.path" />
        <Footer />
      </MainContent>
    </div>
  </main>
</template>