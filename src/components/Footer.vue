<script setup lang="ts">
import ParagraphText from './UI/ParagraphText.vue';
</script>

<template>
<div class="py-8 mx-auto w-full px-8 md:px-24 bg-gray-200">
  <div class="grid gap-4 row-gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div class="grid sm:col-span-2">
        <ParagraphText class="text-xl md:text-3xl font-bold md:self-center justify-self-auto">
                Chris Lionne Dessinatrice
            </ParagraphText>
    </div>
    <div class="space-y-2">
      <ParagraphText>
        8 impasse de la Forge<br />
        40140 - Soustons<br />
        06.21.87.78.62<br />
        chrislionne.dessinatrice@gmail.com
      </ParagraphText>
    </div>
  </div>
  <div class="pt-4 lg:p-0">
    <a href="">Mentions Légales</a>
  </div>
</div>
</template>