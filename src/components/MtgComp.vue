<script setup>
import { Card } from '@/models/Card.js';

defineProps({
  card: { type: Card, required: true }
})
</script>


<template>
  <div class="card">
    <img :src="card.imageUrl" alt="">
    <!-- //FIXME - if no pic, show general card back -->
    <div class="card-body">
      {{ card.name }} {{ card.colorIdentity }}
    </div>
    <div class="card-body">
      {{ card.text }}
    </div>
  </div>
</template>


<style lang="scss" scoped></style>