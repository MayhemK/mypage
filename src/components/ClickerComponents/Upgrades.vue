<script setup>
import { AppState } from '@/AppState.js'
import { clickerService } from '@/services/ClickerService.js'
import { computed } from 'vue'

const snake = computed(() => AppState.snakes)
const CU = computed(() => AppState.ClickUpgrades)
const AU = computed(() => AppState.AutoUpgrades)
const cl = computed(() => AppState.clickLevel)
const al = computed(() => AppState.autoLevel)

function increaseCL(power, price, id) {
  if (snake.value >= price) {
    clickerService.increaseCL(power, price, id)
  }
}
function increaseAL(power, price, id) {
  if (snake.value >= price) {
    clickerService.increaseAL(power, price, id)
  }
}
</script>


<template>
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
          <button @click="increaseCL(u.power, u.price, u.id)">{{ u.price }}</button>
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
          <button @click="increaseAL(u.power, u.price, u.id)">{{ u.price }}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>