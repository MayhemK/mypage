<script setup>
import { ref } from 'vue';

const items = [
  {
    Name: "A",
    Price: "$10.99",
    Description: "stuff",
    Image: "https://images.unsplash.com/photo-1467139840664-96b244a66825?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    Name: "B",
    Price: "$14.99",
    Description: "More Stuff",
    Image: "https://images.unsplash.com/photo-1609041958269-fc44467d925d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, {
    Name: "C",
    Price: "$19.99",
    Description: "even more stuff",
    Image: "https://images.unsplash.com/photo-1474666488182-66ec723476c6?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    Name: "D",
    Price: "$24.99",
    Description: "even even more stuff",
    Image: "https://images.unsplash.com/photo-1674884283579-d6e496502be8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const cart = ref([])

function addToCart(item) {
  console.log(item);
  cart.value.push(item);
}

function removeFromCart(item) {
  console.log(item);
  cart.value.pop(item);
}
</script>


<template>
  <section class="container my-4">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="rounded-5 bg-dark text-light text-center fs-2 align-content-center" style="height: 100px;">
          Simple Store Template
        </div>
      </div>
    </div>
  </section>
  <section class="container mt-4">
    <div class="row">
      <div class="col-9">
        <div class="container">
          <div class="row">
            <div v-for="item in items" :key="item.Name" class="col-3 text-center my-2">
              <div>
                <div class="card">
                  <img :src="item.Image" alt="" class="card-img-top">
                  <div class="card-body">
                    <div class="card-title fw-bold">{{ item.Name }}</div>
                    <hr>
                    <div class="card-text">{{ item.Description }}</div>
                    <div class="card-text">{{ item.Price }}</div>
                    <button class="btn btn-primary mdi mdi-cart-plus" @click="addToCart(item)"> Add
                      to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="rounded-5 bg-dark text-light text-center fs-2 align-content-center" style="height: 100px;">
          Cart
        </div>
        <div class="card text-center">
          <div v-if="cart.length === 0">
            <div class="card-body">
              <div class="card-text">Cart is empty</div>
            </div>
          </div>
          <div v-else v-for="item in cart" :key="item.Name" class="card-body">
            {{ item.Name }} {{ item.Price }} X 45,000
            <hr>
            <button class="btn btn-danger mdi mdi-cart-plus" @click="removeFromCart(item)"> Remove from Cart</button>
          </div>
          <div class="card-footer">
            <div>Total: $0.00</div>
          </div>
        </div>
        <button class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  max-height: 200px;
}
</style>