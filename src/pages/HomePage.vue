<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div v-if="!account.name">
        <h1 class="text-center text-success text-uppercase mb-5">Log in to post to DogeBook!</h1>
      </div>

      <div v-if="account.name" class="col-5 rounded-3">
        <!-- <img :src="account.picture" alt="userimg"> -->
        <h4 class="card inp-c user-post">
          <div class="card-header user-post rounded-3">
            Hello, {{account.name}} post something to <strong>DogeBook</strong>!!!
            <div class="card-body">
              <PostForm />
            </div>
          </div>
        </h4>
      </div>
      <div class="col-5 text-center">
        <h1>Welcome To DogeBook</h1>
        <h2 class="mb-5">Enjoy your stay</h2>
        <h4 class="text-center">⬇️ DogeBook is sponsored by ⬇️</h4>
        <span class="dancing-doggies">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
          <img class="dancing-doge" src="https://custom-progress-bar.com/cdn/images/64/doge-dance-meme.gif" alt="">
        </span>
        <!-- TODO add prop for the advertisement data to be passed to the advert -->

        <AdvertComp v-for="a in advert" :key="a.id" :advert="advert" />

      </div>
    </div>
  </div>
  <!-- SECTION POSTS HERE -->
  <div class="container">
    <div class="row justify-content-around">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>

  <!-- FIXME ChangePage is broken -->
  <ChangePage />
</template>

<script>
let page = 1
import { computed } from '@vue/reactivity';
import { onBeforeMount, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Post from '../components/Post.vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import PostForm from '../components/PostForm.vue';
import Advert from '../components/AdvertComp.vue';
import { SandboxApiPosts } from '../services/AxiosService.js';
import { logger } from '../utils/Logger.js';
import { advertService } from '../services/AdvertService.js';
import ChangePage from '../components/ChangePage.vue';
import AdvertComp from '../components/AdvertComp.vue';


export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.error("[Getting Posts Failed!]", error)
      }
    }


    async function getAdvert() {
      try {
        await advertService.getAdvert()
      } catch (error) {
        Pop.error("[Getting Adverts Failed!], error")
      }
    }
    onBeforeMount(() => {
      getPosts()
      getAdvert()
    })
    onMounted(() => {

    });
    return {
      // nextPage: computed(() => AppState.nextPage),
      // previousPage: computed(() => AppState.previousPage),
      advert: computed(() => AppState.advert),



      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      advert: computed(() => AppState.advert)
    };

  },
  components: { Post, PostForm, Advert, ChangePage, AdvertComp }
}
</script>

<style scoped lang="scss">
.user-img {
  min-height: 50px;
  min-width: 50px;
}

.ad-resize {
  height: 200px;
  width: 500px;
}

.user-panel {
  height: 500px;
}

.dancing-doge {
  height: 50px;
  width: 50px;
}

.user-post {
  background-color: rgba(12, 46, 26, 0.8);
  color: azure;
}
</style>
