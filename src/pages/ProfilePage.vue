<template>
  <ProfileDetail />
  <div class="container-fluid">
    <div class="row d-flex justify-content-around">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
  <span class="text-center">
    <AdvertComp />
  </span>
  <!-- <ChangePage /> -->
</template>


<script>
import ProfileDetail from '../components/ProfileDetail.vue';
import { profilesService } from '../services/ProfilesService.js'
import Pop from '../utils/Pop.js';
import { useRoute } from "vue-router";
import { onBeforeMount, onMounted } from 'vue';
import Post from "../components/Post.vue";
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import AdvertComp from '../components/AdvertComp.vue';
import ChangePage from '../components/ChangePage.vue';
import { advertService } from '../services/AdvertService.js';
export default {
  setup() {
    async function getAdvert() {
      try {
        await advertService.getAdvert()
      } catch (error) {
        Pop.error("[Getting Adverts Failed!], error")
      }
    }

    const route = useRoute();


    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id)
      } catch (error) {
        Pop.error(error, "[GetProfile]")
      }
    }

    async function getPostsByCreatorId() {
      try {
        await postsService.getPostsByCreatorId(route.params.id)
      } catch (error) {
        Pop.error(error, '[GettingPostsByCreatorId]')
      }
    }

    async function getPosts() {
      try {
        await postsService.getPosts(route.params.id)
      } catch (error) {
        Pop.error(error, '[GetProfilePosts]')
      }
    }
    onBeforeMount(() => {
      // getProfileById()
      // getPostsByCreatorId()
      getAdvert()

    })

    onMounted(() => {
      // getProfileById()
      // getPostsByCreatorId()
      // getPosts()

    });
    getProfileById()

    getPostsByCreatorId()
    return {

      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      advert: computed(() => AppState.advert)
    };
  },
  components: { ProfileDetail, Post, AdvertComp, ChangePage }
}
</script>


<style lang="scss" scoped>

</style>