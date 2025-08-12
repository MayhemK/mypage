<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const card = computed(() => AppState.card)
</script>


<template>
  <div v-if="card === null">
    <div> <span class="mdi mdi-spin fs-1 mdi-cards"></span>Click Random for a CARD! <span
        class="mdi mdi-spin fs-1 mdi-cards"></span></div>
    <img src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg" alt=""
      class="justify-content-center">
  </div>
  <div v-else>
    <img :src="card.imageUrl" alt="" class="pt-5">
  </div>
</template>


<style lang="scss" scoped></style>