<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import Menu from 'primevue/menu';
import Icon from '../Icon/Icon.vue';

defineProps<{
    items: MenuItem[]
}>()
</script>

<template>
  <Transition mode="in-out">
  <div class="hidden md:flex fixed md:w-sidebar-margin h-screen flex-col bg-[#111111]">
    <div class="mx-[20%] my-12">
      <img class="object-contain" src="\src\assets\logo.jpg"/>
    </div>
    <div class="my-auto">
      <div class="my-8" v-for="(item, index) in items">
        <RouterLink :to=item.url!><p class="text-center font-bold text-lg text-white hover:text-kaki transition ease-in-out delay-50 hover:scale-110">{{ item.label }}</p></RouterLink>
      </div>
    </div>
    <div class="flex mb-4 justify-center">
      <Icon name="pi-facebook" link="https://www.facebook.com/chrislionne.dessinatrice/"/>
      <Icon name="pi-linkedin" link="https://www.linkedin.com/in/chrislionne-dessinatrice/"/>
    </div>
  </div>
  </Transition>
</template>


<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease-in-out;
    position: absolute;
    margin-left: 15%
}

.v-enter-from,
.v-leave-to {
    transform: translateY(100%)
}
</style>