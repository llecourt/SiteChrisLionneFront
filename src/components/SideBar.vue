<script setup lang="ts">
import type { SideBarLink } from '@/models/SideBar';
import Icon from './Icon.vue';
import { ref, watchEffect } from 'vue';
import { useMediaQuery } from '@vueuse/core';

defineProps<{
    items: SideBarLink[]
}>()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const show = ref(false);

watchEffect(() => {
  if(isLargeScreen.value && show.value) {
    show.value = false;
  }
});
</script>

<template>
  <Transition name="slide">
    <div v-if="show || isLargeScreen" class="lg:flex fixed w-[70%] md:w-[50%] lg:w-sidebar-margin h-full flex-col bg-stone-950 z-50 overflow-x-hidden overflow-y-scroll lg:overflow-y-hidden">
      <div v-if="show" class="flex h-16 w-16 items-center justify-center absolute" @click="show = false">
        <i class="pi pi-times text-white text-3xl"></i>
      </div>
      <div class="mx-[15%] mt-16">
        <img class="object-contain" src="\src\assets\logo.png"/>
      </div>
      <div class="my-auto">
        <div class="my-8" v-for="(item, index) in items">
          <RouterLink :to=item.uri!><p class="text-center font-bold text-2xl text-white hover:text-kaki transition ease-in-out delay-50 hover:scale-110" @click="show = false">{{ item.name }}</p></RouterLink>
        </div>
      </div>
      <div class="flex mb-4 justify-center">
        <Icon name="pi-facebook" link="https://www.facebook.com/chrislionne.dessinatrice/"/>
        <Icon name="pi-linkedin" link="https://www.linkedin.com/in/chrislionne-dessinatrice/"/>
      </div>
    </div>
  </Transition>
  <div class="z-40 flex fixed rounded-lg bg-white h-12 w-12 top-6 left-6 items-center justify-center transition ease-in-out delay-50 hover:scale-110 shadow-md" @click="show = true">
      <i class="pi pi-bars"></i>
    </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease-in-out;
    position: absolute;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%)
}
</style>