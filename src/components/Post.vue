<template>
  <div class="card user-post user-body m-2" style="width: 30rem; height: 35rem;">
    <div class="card-header">

      <PostCreator :creator="post.creator" />
      <span id="date">{{post.createdAt }}</span>
    </div>


    <img :src="post.imgUrl" alt="EITHER BAD IMAGE OR NO IMAGE" class="drake-400 text-danger fs-3">

    <div class="card-body">
      <div class="border bg-dark"></div>
      <p class="card-text">{{post.body}}</p>
    </div>
    <div class="card-footer justify-content-around d-flex">
      <div>

        <span @click="like(post.id)" class="mdi mdi-thumb-up-outline btn btn-success fs-5"></span>
        <span class="m-3 fs-4 align-self-center">
          {{post.likes.length}}
        </span>
      </div>
      <div @click="deletePost(post.id)" v-if="account.id == post.creator.id" class="btn btn-danger text-end">Delete!
      </div>
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
      account: computed(() => AppState.account),

      async deletePost(id) {
        try {
          if (await Pop.confirm('You sure you want to delete?')) {
            postsService.deletePost(id)
          }
        } catch (error) {
          Pop.error(error, '[Delete Post]')
        }
      },





      async formatDate(date) {
        let isoDate = this.createdAt
        date = isoDate.substring(0, 10)
        let datePicker = document.getElementById('date')
        datePicker.value = date
        datePicker.max = date
      },


      async like(id) {
        try {
          await postsService.likePost(id)
        } catch (error) {
          Pop.error('[You are not logged in!]', error)
        }
      }
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