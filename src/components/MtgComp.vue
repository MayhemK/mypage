<script setup>
import { AppState } from '@/AppState.js';
import { Card } from '@/models/Card.js';
import { computed } from 'vue';

const card = computed(() => AppState.card)
</script>


<template>
  <div class="col-12">
    <div class="card">
      <div class="card-title">
        <b>{{ card.name }}</b>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>