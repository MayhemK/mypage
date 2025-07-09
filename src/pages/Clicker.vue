<script setup>
import { AppState } from '@/AppState.js';
import { clickerService } from '@/services/ClickerService.js';
import { computed, ref } from 'vue';


const snake = computed(() => AppState.snakes)

function hatch() {
  clickerService.hatch()
}

</script>


<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12">
        <div class="m-4">
          Click to increase snakes
        </div>
        <div class="btn p-5 m-5" @click="hatch()">🐍</div>
        <div class="fs-3 m-4">{{ snake }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        hi
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        Click Upgrades
      </div>
      <div class="col-6">
        Timer Upgrades
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>