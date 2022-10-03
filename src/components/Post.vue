<template>
  <div class="card user-post user-body m-2" style="width: 30rem; height: 35rem;">
    <div class="card-header">

      <PostCreator :creator="post.creator" />
      <span>{{post.createdAt}}</span>
    </div>


    <img :src="post.imgUrl" alt="EITHER BAD IMAGE OR NO IMAGE" class="drake-400 text-danger fs-3">

    <div class="card-body">
      <div class="border bg-dark"></div>
      <p class="card-text">{{post.body}}</p>
    </div>
    <div class="card-footer">
      <span @click="like()" class="mdi mdi-thumb-up-outline btn btn-success fs-5"></span>
      <span class="m-3 fs-4 align-self-center">
        {{post.likes.length}}
      </span>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { Post } from '../models/Post.js';
import PostCreator from './PostCreator.vue';
import { AppState } from "../AppState.js";
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';

export default {

  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup() {
    return {
      // like() {
      //   try {
      //     await postsService.likePost
      //   } catch (error) {
      //     Pop.error('[Like Failed]', error)
      //   }
      // }
    };
  },
  components: { PostCreator }
};
</script>


<style lang="scss" scoped>
.user-post {
  background-color: rgba(0, 36, 27, 0.8);
  color: azure;
}

.user-body {
  min-width: 250px;
  min-height: 250px;
}

.drake-400 {
  background-image: url('https://i.imgur.com/GpY6bTJ_d.webp?maxwidth=760&fidelity=grand');
  height: 266px;
}
</style>