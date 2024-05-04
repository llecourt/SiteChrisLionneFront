<script setup lang="ts">
import { parseUrl } from '@/utils';
import Card from 'primevue/card';
import ListProjects from '../ListProjects/ListProjects.vue';

</script>

<template>
    <div class="ml-[0%] md:ml-sidebar-margin w-full">
        <img class="fixed -z-10 mt-[-18%] brightness-50" :src="parseUrl('bg-2.jpg')" height="100%" width="100%"/>
        <p class="absolute mt-[11%] w-[100%] md:reduced text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center">DESSINATRICE EN ARCHITECTURE <br/> LANDES & PAYS BASQUE</p>
        <div class="mt-[35%] flex bg-gray-50 flex-col items-center">
            <div class="animated bg-white w-[95%] shadow-sm mt-8">
                <div class="m-8">
                    <p class="mt-4 font-bold text-3xl mb-4 text-neutral-900 text-center md:text-left">Dessinatrice indépendante et conseillère en architecture d’intérieur</p>
                    <p class="text-justify text-neutral-700 text-lg">Je vous accompagne pour vos projets de construction, d’extension, de rénovation ou d’aménagement d’intérieur de la phase de conception jusqu’au permis de construire</p>
                </div>
            </div>
            <ListProjects :frontPageOnly="true"/>
        </div>
    </div>
</template>