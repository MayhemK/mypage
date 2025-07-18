<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { feedService } from '@/services/FeedService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const account = computed(() => AppState.account)
const props = defineProps({
  post: { type: Post, required: true },
})

async function deletePost(postId) {
  try {
    const confirmed = await Pop.confirm('yah sure?')
    if (!confirmed) { return }
    await feedService.deletePost(postId)

  }
  catch (error) {
    Pop.error(error);
  }
}
async function likePost(postId) {
  try {
    await feedService.likePost(postId)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <div class="card txt-grn">
    <!-- <RouterLink :to="{ name: 'Profile', params: { profileId: post.creatorId } }">
    </RouterLink> -->
    <div class="card-header fs-5 align-items-end mb-0">
      <img :src="post.picture" alt="Profile Picture" class="prof-img d-flex justify-content-between">
      {{ post.creator }}
    </div>
    <div>{{ new Date(post.createdAt).toLocaleString() }}</div>
    <div class="card-body fs-3 mt-0">
      <div>{{ post.body }}</div>
      <img :src="post.imgUrl" alt="">
      <hr>
      <div @click="likePost(post.id)" type="button">👍</div>
      <div class="text-decoration-underline">
        <div v-for="like in post.likes" :key="like.id" class="fs-6">
          <span>{{ like.name }}</span>
        </div>
      </div>
      <div class="text-end">
        <button v-if="post.creatorId == account?.id" @click="deletePost(post.id)" class="btn btn-green"
          type="button">Delete Post</button>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
img {
  height: auto;
  width: 100%;
}

.prof-img {
  max-width: 64px;
  aspect-ratio: 1;
}

.txt-grn {
  color: #00601d;
}

.btn-green {
  background-color: #00fe4d;
  color: black;
}
</style>