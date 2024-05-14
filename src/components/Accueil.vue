<script setup lang="ts">
import { parseUrlFromName } from '@/utils';
import ListProjects from './ListProjects.vue';
import Card from './UI/Card.vue';
import MainContent from './UI/MainContent.vue';
import Background from './UI/Background.vue';
import TitleText from './UI/TitleText.vue';
import ParagraphText from './UI/ParagraphText.vue';
import Separator from './UI/Separator.vue';
import OverImageText from './UI/OverImageText.vue';
</script>

<template>
    <div class="-z-10 w-full h-[40vw] fixed bg-stone-900"></div>
    <img class="fixed -z-10 mt-[-18%] brightness-50" :src="parseUrlFromName('bg-2.jpg')" height="100%" width="100%" />
    <OverImageText class="mt-[12vw] overflow-hidden"><p class="text-reveal">DESSINATRICE EN ARCHITECTURE <br/> LANDES & PAYS BASQUE</p></OverImageText>
    <Background class="mt-[35%]">
        <Card>
            <TitleText>Dessinatrice indépendante et conseillère en architecture d’intérieur</TitleText>
            <ParagraphText class="text-lg">Je vous accompagne pour vos projets de construction, d’extension, de rénovation ou d’aménagement d’intérieur de la phase de conception jusqu’au permis de construire</ParagraphText>
            <Separator />
            <ListProjects :frontPageOnly="true"/>
        </Card>
    </Background>
</template>