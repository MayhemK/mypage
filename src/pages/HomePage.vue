<script setup>



</script>

<template>
  <section class="container">

    <div class="row mt-3 ">
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <div class="text-decoration-underline fs-4">My Projects</div>
            <div class="">
              Go to each project page
            </div>
          </div>
          <div class="card-body">
            <div>
              <RouterLink :to="{ name: 'GregsList' }" class="btn btn-mk m-2">
                Gregslist
              </RouterLink>
              <div class="ms-2">A simple Craig's List clone</div>
            </div>
            <div>
              <RouterLink :to="{ name: 'Code' }" class="btn btn-mk m-2">
                Code Page
              </RouterLink>
              <div class="ms-2">A Facebook type page</div>
            </div>
            <div>
              <RouterLink :to="{ name: 'Clicker' }" class="btn btn-mk m-2">
                Clicker
              </RouterLink>
              <div class="ms-2">A Clicker Game</div>
            </div>
            <div>
              <RouterLink :to="{ name: 'Template' }" class="btn btn-mk m-2">Website</RouterLink>
              <div class="ms-2">A simple website with themes</div>
            </div>
            <div>
              <RouterLink :to="{ name: 'MTGPage' }" class="btn btn-mk m-2">MTG Cards</RouterLink>
              <div class="ms-2">A test implementing MTG api into a page</div>
            </div>
            <div>
              <RouterLink :to="{ name: 'Store' }" class="btn btn-mk m-2">Store Template</RouterLink>
              <div class="ms-2">A template for a store page!</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="border box rounded-2 pt-5 p-5">
          Welcome to my example page! I am using this page to give examples of projects I have worked on and continue to
          build new
          ones!
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.bg-pump {
  background-image: url(../assets/img/NewAviIcon.png);
  max-height: 100dvh;
}

.box {
  min-height: 60dvh;
}
</style>
