<script setup>
import { AppState } from '@/AppState.js';
import { clickerService } from '@/services/ClickerService.js';
import { computed, ref } from 'vue';


const snake = computed(() => AppState.snakes)
const CU = computed(() => AppState.ClickUpgrades)
const AU = computed(() => AppState.AutoUpgrades)
const cl = computed(() => AppState.clickLevel)
const al = computed(() => AppState.autoLevel)

function hatch(TPL) {
  clickerService.hatch(TPL)
}
function increaseCL(power, price) {
  if (snake.value >= price) {
    clickerService.increaseCL(power, price)
  }
}
function increaseAL(power, price) {
  if (snake.value >= price) {
    clickerService.increaseAL(power, price)
  }
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
    <div class="row">
      <div class="col-12">
        Hatch Upgrades
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        Click Upgrades {{ cl }}
        <div v-for="u in CU" :key="u.price">
          <div>
            {{ u.power }}
            {{ u.name }}
            {{ u.quantity * u.power }}
            <button @click="increaseCL(u.power, u.price)">{{ u.price }}</button>
          </div>
        </div>
      </div>
      <div class="col-6">
        Timer Upgrades {{ al }}
        <div v-for="u in AU" :key="u.price">
          <div>
            {{ u.power }}
            {{ u.name }}
            {{ u.quantity * u.power }}
            <button @click="increaseAL(u.power, u.price)">{{ u.price }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>