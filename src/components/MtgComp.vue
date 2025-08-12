<script setup>
import { Card } from '@/models/Card.js';

defineProps({
  card: { type: Card, required: true }
})
</script>


<template>
  <div class="card">
    <img v-if="card.imageUrl" :src="card.imageUrl" alt="">
    <img v-else src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg" alt="">
    <div class="card-body fw-bold">

    </div>
    <div class="card-body">
      {{ card }}
    </div>
  </div>
</template>


<style lang="scss" scoped></style>