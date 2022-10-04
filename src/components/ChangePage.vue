<template>
  <div class="container-fluid">
    <div class="row justify-content-around mt-5">
      <button v-if="!newer" @click="changePage(Cpage.newer)" class="btn btn-success w-25">Previous Page
        (Broken)</button>
      <button @click="changePage(Cpage.older)" class="btn btn-success w-25 justify-self-end">Next Page (Broken)</button>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Cpage } from "../models/Cpage.js";
import { postsService } from "../services/PostsService.js";
export default {
  props: {
    Cpage: {
      type: Cpage,
      required: true
    }
  },
  setup() {
    return {
      Cpage: computed(() => AppState.Cpage),
      async changePage(Url = '') {
        Url = Url.substring(33)
        await postsService.getPostByUrl(Url)

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>