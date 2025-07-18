<script setup>
import { AppState } from '@/AppState.js';
import PostCreate from '@/components/PostComponents/PostCreate.vue';
import PostFeed from '@/components/PostComponents/PostFeed.vue';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const posts = computed(() => AppState.posts)

onMounted(() => {
  getAllPosts()
})

async function getAllPosts() {
  try {
    await feedService.getAllPosts()
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-md-2">
        account component
        search bar here
      </div>
      <div class="col-md-10">
        <PostCreate />
        <div class="row">
          <div v-for="post in posts" :key="post.id" class="col-12">
            <PostFeed :post="post" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>