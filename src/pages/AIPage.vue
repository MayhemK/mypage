<script setup>
import { AppState } from '@/AppState.js';
import MtgComp from '@/components/MtgComp.vue';
import { aiService } from '@/services/AIService.js';
import { computed, onMounted } from 'vue';

const cards = computed(() => AppState.cards)

onMounted(() => {
  getCards()
})

async function getCards() {
  await aiService.getCards()
}

</script>


<template>
  <section v-if="cards" class="container">
    <div class="row">
      <div v-for="card in cards" :key="card.id" class="col-3">
        <MtgComp :card="card" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>