<script setup>
import { AppState } from '@/AppState.js';
import MtgComp from '@/components/MtgComp.vue';
import ScryComp from '@/components/ScryComp.vue';
import { mtgService } from '@/services/MTGService.js';
import { onMounted, ref } from 'vue';

const info = ref(false)
onMounted(() => {

})

function toggleInfo() {
  info.value = !info.value
}

async function getRandomCard() {
  await mtgService.getRandom()
}

</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center mt-5">
        <div>
          <div class="btn p-5 btn-warning" @click="getRandomCard()">Random Card</div>
          <div class="btn btn-secondary mx-2" @click="toggleInfo()">More Info</div>
        </div>
      </div>
      <div class="col-6 text-center ">
        <ScryComp />
      </div>
      <div v-if="info == true" class="col-6 text-center my-5 ">
        <MtgComp />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>