<script setup>
import { AppState } from '@/AppState.js';
import { clickerService } from '@/services/ClickerService.js';
import { computed, ref } from 'vue';


const snake = computed(() => AppState.snakes)
const CU = computed(() => AppState.ClickUpgrades)
const AU = computed(() => AppState.AutoUpgrades)

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
      </div>
      <div class="col-5">
        <div class="fs-3 m-4 text-end">click power</div>
      </div>
      <div class="col-2">
        <div class="fs-3 m-4">{{ snake }}</div>
      </div>
      <div class="col-5">
        <div class="fs-3 m-4 text-start">auto hatch</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        Hatch Upgrades
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