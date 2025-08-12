<script setup>
import { AppState } from '@/AppState.js';
import { Card } from '@/models/Card.js';
import { computed } from 'vue';

const card = computed(() => AppState.card)
</script>


<template>
  <div class="col-12">
    <div class="card">
      <div class="card-title pt-3 fs-5">
        <b>{{ card.name }}</b>
      </div>
      <hr>
      <div class="card-body">
        <p>{{ card.typeline }}</p>
        <p>"{{ card.text }}"</p>
      </div>
      <div>
        <small>Art by: {{ card.artist }}</small>
      </div>
      <div v-if="card.power && card.toughness" class="card-footer fs-4">
        <b>{{ card.power }}/{{ card.toughness }}</b>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div>
          $ {{ card.price }} normal price
        </div>
        <div v-if="card.foil">
          $ {{ card.foil }} foil price
        </div>
        <div v-if="card.etched">
          $ {{ card.etched }} etched price
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>