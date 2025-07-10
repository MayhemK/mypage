<script setup>
import { AppState } from '@/AppState.js';
import Upgrades from '@/components/ClickerComponents/Upgrades.vue';
import { clickerService } from '@/services/ClickerService.js';
import { computed } from 'vue';


const snake = computed(() => AppState.snakes)
const cl = computed(() => AppState.clickLevel)

function hatch(TPL) {
  clickerService.hatch(TPL)
}

</script>


<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">
        <div class="m-4">
          Click to increase snakes
        </div>
        <div class="btn p-5 m-5" @click="hatch(cl)">🐍</div>
      </div>
      <div class="col-5">
        <div class="fs-3 m-4 text-end">click power</div>
      </div>
      <div class="col-2">
        <div class="fs-3 m-4">{{ snake.toLocaleString() }}</div>
      </div>
      <div class="col-5">
        <div class="fs-3 m-4 text-start">auto hatch</div>
      </div>
    </div>
    <Upgrades />
  </div>
</template>


<style lang="scss" scoped></style>