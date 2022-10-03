<template>
  <form class="card bg-dark m-2" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Image Url:</label>
        <input type="url" class="form-control mt-2 bg-dark text-light" v-model="editable.imgUrl" required name="imgUrl">
      </div>
      <div>
        <label class="mt-2" for="picture">Body:</label>
        <input type="text" class="form-control mt-2 bg-dark text-light" v-model="editable.body" required name="body"
          placeholder="Type Stuffs here">
      </div>
      <p class="font-xx-small m-2"><strong class="text-danger">*WARNING*</strong> Supported extensions are JPEG, JPG,
        GIF, PNG.
      </p>
      <div>
        <button type="submit" class="btn btn-success mt-3 w-100 mb-1"><strong>POST TO
            DOGEBOOK!</strong></button>
        <button type="reset" class="btn btn-danger w-25">Reset Form</button>
      </div>
      <div>
      </div>
    </div>
  </form>

</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    const editable = ref({})

    watchEffect(() => {
      // MUTABLE DATA BAD!!!!! IMMUTABLE DATA GOOD
      //                 v BREAKS THE REFERENCE TO THE ORIGINAL OBJECT
      editable.value = { ...AppState.post }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.createPost(editable.value)
        } catch (error) {
          Pop.error(error, '[CreatePost]')
        }

      }
    }
  }
}
</script>


<style lang="scss" scoped>
.font-xx-small {
  font-size: 10px;
}
</style>
