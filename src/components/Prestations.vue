<script setup lang="ts">
import { usePrestations } from '@/stores/prestationsStore';
import Background from './UI/Background.vue';
import Card from './UI/Card.vue';
import { computed } from 'vue';
import Prestation from './Prestation.vue';
import TitleText from './UI/TitleText.vue';

const prestationsStore = usePrestations();
const prestations = computed(() => prestationsStore.getAll);

</script>

<template>
    <Background>
        <Card>
            <TitleText>Etude de vos projets de <span class="underanim">construction</span>, <span class="underanim">extension</span>, <span class="underanim">reaménagement interieur</span>, de la phase de conception jusqu’au permis de construire</TitleText>
            <div v-for="(item, index) of prestations">
                <Prestation :item :side="index%2 == 0 ? 'right' : 'left'"/>
            </div>
        </Card>
    </Background>
</template>