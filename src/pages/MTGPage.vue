<script setup>
import { AppState } from '@/AppState.js';
import MtgComp from '@/components/MtgComp.vue';
import ScryComp from '@/components/ScryComp.vue';
import { mtgService } from '@/services/MTGService.js';
import { computed, onMounted } from 'vue';

const cards = computed(() => AppState.cards)

onMounted(() => {

})

async function getCards() {
  await mtgService.getCards()
}

async function getRandomCard() {
  await mtgService.getRandom()
}

</script>


<template>
  <!-- <section v-if="cards" class="container">
    <div class="row">
      <div v-for="card in cards" :key="card.id" class="col-3">
        <MtgComp :card="card" />
      </div>
    </div>
  </section> -->
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-6 text-center my-5">
        <div>
          <div class="btn p-5 btn-warning" @click="getRandomCard()">Random Card</div>
          <ScryComp />
          <!-- <div class="btn btn-secondary" @click="getCards()">More Info click this to show info like names prices </div> -->
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>