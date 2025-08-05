<script setup>
import { AppState } from '@/AppState.js';
import { cloneService } from '@/services/CloneService.js';
import { computed } from 'vue';


const themeValue = computed(() => AppState.themeValue)



function changeThemeValue(select) {
  const themeNum = select
  AppState.themeValue = themeNum
}




</script>


<template>

  <body :class="`bg-color-${themeValue}`">
    <header class="sticky-top">
      <!-- title bar -->
      <section :class="`darkBar-${themeValue}`" class="container-fluid py-1 " id="darkBar">
        <div class="row justify-content-center">
          <div class="col-md-10 col-8  ">
            <h1><span class="mdi mdi-star-shooting text-primary outline bg-light rounded-5 px-2"></span> Lorem, ipsum.
            </h1>
          </div>
          <div class="col-6 text-center d-none d-md-block">
            <div v-if="themeValue == 0" class="outline btn btn-dark m-2">BORING</div>
            <div v-if="themeValue == 1" class="outline btn btn-success m-2">GREEN</div>
            <div v-if="themeValue == 2" class="outline btn btn-danger m-2">RED</div>
            <div v-if="themeValue == 3" class="outline btn btn-primary text-light m-2">BLUE</div>
          </div>
          <div class="col-6 text-center">
            <div class="btn btn-dark m-2 ms-5" @click="changeThemeValue(0)">Plain</div>
            <div class="btn btn-success m-2" @click="changeThemeValue(1)">Forrest</div>
            <div class="btn btn-danger m-2" @click="changeThemeValue(2)">Desert</div>
            <div class="btn btn-primary text-light m-2" @click="changeThemeValue(3)">Ocean</div>
          </div>
        </div>
      </section>
    </header>

    <main>
      <!-- picture bar with form -->
      <section :class="`bg-image-${themeValue}`" class="container-fluid">
        <div class="row justify-content text-light pady">
          <div class="col-12 col-md-3">
            <p class="text-capitalize ">subtle heading</p>
            <div class="card">
              <p class="text-capitalize ps-3 pt-3 text-primary "><b>less subtle heading</b></p>
              <div class="container-fluid">
                <div class="row ">
                </div>
                <div class="row">
                  <div class="col-12">
                    <input type="" class="form-control" placeholder="Name">
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="mb-3"></div>
                    <input type="" class="form-control" placeholder="Valid E-mail">
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 ">
                    <div class="mb-3">
                    </div>
                    <input type="" class="form-control" placeholder="Phone Number">
                  </div>
                  <div class="col-12 col-md-6 ">
                    <div class="mb-3">
                    </div>
                    <input type="" class="form-control" placeholder="Ext.">
                    <div class="form-text"></div>
                  </div>
                  <div class="col-12">
                    <div class="mb-3"></div>
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Comments" rows="3"></textarea>
                      <div class="mb-3 form-check ">
                        <input type="checkbox" class="checkbox">
                        <label for="form-check-label ">Save Password</label>
                      </div>
                      <button class="btn btn-primary text-uppercase mb-3">submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class="col-8 d-none d-md-block">
            <div class="container-fluid">
              <div class="row pt-5 ">
                <div class="col-1 text-end ">
                  <h1><span class="mdi mdi-star-shooting-outline text-primary"></span></h1>
                </div>
                <div class="col-8">
                  <h3>Text over image</h3>
                  <p>container to disappear when small screen</p>
                </div>
              </div>
            </div>
          </section>
        </div>

      </section>

      <!-- spill card -->
      <section class="container-fluid ">
        <div :class="`darkBar-${themeValue}`" class="row pady flex-row-reverse justify-content-start position-relative"
          id="darkBar2">
          <div class="col-12 col-md-6 ">
            <div class="card spill me-md-5 ">
              <div class="card-body">
                <div class="container-fluid">
                  <div class="row me-5 justify-content-start ">
                    <div class="col-md-1 col-2">
                      <h3><span class="mdi mdi-wrench text-primary"></span></h3>
                    </div>
                    <div class="col-10">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                    </div>
                    <div class="col-md-1 col-2 d-none d-md-block"></div>
                    <div class="col-md-1 col-2">
                      <h3><i class="mdi mdi-car text-primary"></i></h3>
                    </div>
                    <div class="col-10">
                      <p>Lorem ipsum, dolor sit amet</p>
                    </div>
                    <div class="col-md-1 col-2 d-none d-md-block"></div>
                    <div class="col-md-1 col-2">
                      <h3>
                        <div class="mdi mdi-phone text-primary"></div>
                      </h3>
                    </div>
                    <div class="col-10">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div class="col-md-1 col-2 d-none d-md-block"></div>
                    <div class="col-md-1 col-2">
                      <h3><i class="mdi mdi-message text-primary"></i></h3>
                    </div>
                    <div class="col-10">
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                    <div class="col-md-1 col-2 d-none d-md-block"></div>
                    <div class="col-md-1 col-2">
                      <h3><i class="mdi mdi-hexagram text-primary"></i></h3>
                    </div>
                    <div class="col-10">
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                    <div class="col-md-1 col-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 pt-3 ">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque facere delectus commodi eligendi ab
              atque
              accusantium aspernatur minima asperiores odio tenetur distinctio quae quasi repudiandae illo ullam,
              assumenda quibusdam magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti culpa
              voluptate explicabo accusamus quibusdam consequuntur repellat praesentium nam incidunt mollitia sed magni
              amet, ut obcaecati tempore nesciunt eaque aliquam?</p>
          </div>
        </div>
      </section>
      <!-- float pic and more -->
      <section :class="`lightBar-${themeValue}`" class="container-fluid pady ">
        <div class="row align-items-center ">
          <div class="col-md-4 col-12">
            <img class="img-fluid" :src="`${themeValue}`" alt="image">
          </div>
          <div class="col-md-8 col-12">
            <div class="row ps-5">
              <div class="col-1">
                <h1><span class="mdi mdi-shield-check text-primary "></span></h1>
              </div>
              <div class="col-11">
                <h4>Lorem ipsum dolor sit amet.</h4>
              </div>
            </div>
            <div class="row px-4">
              <div class="col-12">
                <h4>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero!
                </h4>
              </div>
            </div>
            <div class="row px-4 pe-5">
              <div class="col-12">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a, asperiores rem omnis doloremque quam
                  voluptatem expedita quod quidem quasi voluptas fuga eveniet, tenetur voluptatum consectetur maxime,
                  iusto magni explicabo? <b>Lorem ipsum dolor sit amet consectetur.</b></p>
              </div>
            </div>
            <div class="row justify-content-end pe-5">
              <div class="col-2">
                <button type="button" class="btn btn-primary rounded-3">MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- testimonials -->
      <section class="container pady">
        <div class="row text-center align-items-center justify-content-between  ">
          <div class="col-md-3 col-12 order-2 order-md-1 ">
            <div class="card">
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic!</p>
                <h6 class="text-primary">- blah blah mcblah</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 order-1 order-md-2">
            <div class="card">
              <div class="card-body">
                <h1><i class="mdi mdi-star-circle text-primary"></i><i class="mdi mdi-star-circle text-primary"></i><i
                    class="mdi mdi-star-circle text-primary"></i></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic!</p>
                <h6 class="text-primary">- blah blah mcblah</h6>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12 order-2 order-md-3 ">
            <div class="card">
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic!</p>
                <h6 class="text-primary">- blah blah mcblah</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- final words -->
      <section :class="`darkBar-${themeValue}`" class="container-fluid pady">
        <div class="row">
          <div class="col-12">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus facilis vitae voluptates, pariatur soluta
              reiciendis ullam dignissimos nobis.</p>
          </div>
        </div>
      </section>

    </main>


    <footer>
      <section>
        <div class="container-fluid  py-2 ">
          <div class="row text-center text-light">
            <div class="col-12">
              <p>Fictitious site made by Ivan Wagstaff</p>
            </div>
          </div>
        </div>
      </section>

    </footer>

  </body>
</template>


<style lang="scss" scoped>
body {
  background-color: rgb(0, 0, 110);
}

.darkBar-0 {
  background-color: gray;
}

.darkBar-1 {
  background-color: green;
}

.darkBar-2 {
  background-color: red;
}

.darkBar-3 {
  background-color: blue;
}

.lightBar-0 {
  background-color: rgb(182, 182, 182);
}

.lightBar-1 {
  background-color: rgb(0, 204, 0);
}

.lightBar-2 {
  background-color: rgb(243, 102, 102);
}

.lightBar-3 {
  background-color: rgb(127, 127, 253);
}

.bg-image-0 {
  background-image: url(https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
}

.bg-image-1 {
  background-image: url(https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
}

.bg-image-2 {
  background-image: url(https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
}

.bg-image-3 {
  background-image: url(https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
}

.bg-color-0 {
  background-color: black;
}

.bg-color-1 {
  background-color: rgb(1, 43, 0);
}

.bg-color-2 {
  background-color: rgb(94, 0, 62);
}

.bg-color-3 {
  background-color: rgb(0, 1, 75);
}

.pady {
  padding: 4rem 3rem;
}

.spill {
  position: absolute;
  top: 100px
}







@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

@media screen AND (max-width:767.98px) {
  .spill {
    position: static;
  }

  .pady {
    padding: .75rem .5rem;
  }
}
</style>