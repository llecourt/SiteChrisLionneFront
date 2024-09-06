<script setup lang="ts">
import { usePrestations } from '@/stores/prestationsStore';
import Background from './UI/Background.vue';
import Card from './UI/Card.vue';
import { computed } from 'vue';
import Prestation from './Prestation.vue';
import TitleText from './UI/TitleText.vue';
import { useMediaQuery } from '@vueuse/core';

const prestationsStore = usePrestations();
const prestations = computed(() => prestationsStore.getAll);
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
    <Background>
        <Card class="overflow-x-hidden">
            <TitleText>Etude de vos projets de <span class="underanim">construction</span>, <span class="underanim">extension</span>, <span class="underanim">reaménagement interieur</span>, de la phase de conception jusqu’au permis de construire</TitleText>
            <div v-for="(item, index) of prestations">
                <Prestation :item :side="isLargeScreen ? index%2 == 0 ? 'right' : 'left' : 'right'"/>
            </div>
        </Card>
    </Background>
</template>