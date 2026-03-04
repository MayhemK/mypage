<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const account = computed(() => AppState.account)
const jobs = computed(() => AppState.jobs)

</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12 mt-3">
        <div class="text-center fs-2 fw-bold">Jobs</div>
        <hr>
      </div>
    </div>
  </section>
  <section v-if="account" class="container">
    <div class="row">
      <div class="col-md-8 col-12">
        form
      </div>
      <div class="col-md-4 d-none d-md-block">
        <img src="https://salagraphics.com/cdn/shop/products/Help_Wanted_Sign.jpg?v=1482422422&width=823" alt=""
          class="w-100">
      </div>
    </div>
  </section>
  <section v-else>
    <h2 class="text-center mb-5">Please Login to Post!</h2>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="job in jobs" :key="job.id" class="col-12">
        <JobListing :jobProp="job" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>