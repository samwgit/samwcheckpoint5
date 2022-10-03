<template>
  <div class="container-fluid">
    <div class="row justify-content-around mt-5">
      <button v-if="!newer" @click="changePage(newerPage)" class="btn btn-success w-25">Previous Page (Broken)</button>
      <button @click="changePage(olderPage)" class="btn btn-success w-25 justify-self-end">Next Page (Broken)</button>
    </div>
  </div>
</template>


<script>
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
      async changePage(pageUrl) {
        await postsService.getPosts(pageUrl)

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>