<script setup lang="ts">
import { parseUrlFromName } from '@/utils';
import ListProjects from './ListProjects.vue';
import Card from './UI/Card.vue';
import MainContent from './UI/MainContent.vue';
import Background from './UI/Background.vue';
</script>

<template>
    <MainContent>
        <img class="fixed -z-10 mt-[-18%] brightness-50" :src="parseUrlFromName('bg-2.jpg')" height="100%" width="100%"/>
        <p class="absolute mt-[11%] w-[100%] md:reduced text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center">DESSINATRICE EN ARCHITECTURE <br/> LANDES & PAYS BASQUE</p>
        <Background class="mt-[35%]">
            <Card :animated="true">
                <p class="mt-4 font-bold text-3xl mb-4 text-neutral-900 text-center md:text-left">Dessinatrice indépendante et conseillère en architecture d’intérieur</p>
                <p class="text-justify text-neutral-700 text-lg">Je vous accompagne pour vos projets de construction, d’extension, de rénovation ou d’aménagement d’intérieur de la phase de conception jusqu’au permis de construire</p>
            </Card>
            <Card :animated="true">
                <ListProjects :frontPageOnly="true"/>
            </Card>
        </Background>
    </MainContent>
</template>