<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountComp from '@/components/AccountComp.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about ">
    <div v-if="account">
      <section class="container">
        <div class="row">
          <div class="col-12">
            <!-- <img :src="account.coverImg" alt=""> -->
            <div>cover image</div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <AccountComp />
          </div>
          <div class="col-5">
            <AccountForm />
          </div>
          <div class="col-3">
            ads banner to be removed
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
