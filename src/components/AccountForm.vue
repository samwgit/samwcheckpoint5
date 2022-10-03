<template>
  <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start bg-dark">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control bg-dark mb-3" v-model="editable.name" required name="name">
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control bg-dark mb-3" v-model="editable.picture" required name="picture"
          placeholder="picture">
      </div>
      <div>
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control bg-dark mb-3" v-model="editable.coverImg" required name="coverImg">
      </div>
      <div>
        <label for="github">GitHub:</label>
        <textarea type="text" class="form-control bg-dark mb-3 text-light" v-model="editable.github" name="github"
          rows="1" style="resize:none"></textarea>
      </div>
      <div>
        <label for="linkedin">LinkedIn:</label>
        <textarea type="text" class="form-control bg-dark mb-3 text-light" v-model="editable.linkedin" name="linkedin"
          rows="1" style="resize:none"></textarea>
      </div>
      <div>
        <label for="class">Class:</label>
        <textarea type="text" class="form-control bg-dark mb-3 text-light" v-model="editable.class" name="class"
          rows="1" style="resize:none"></textarea>
      </div>
      <div>
        <label for="class">Graduated?:</label>
        <textarea type="checkbox" class="form-control bg-dark mb-3 text-light" v-model="editable.graduated" name="class"
          rows="1" style="resize:none"></textarea>
      </div>
      <div>
        <label for="bio">Bio:</label>
        <textarea type="text" class="form-control bg-dark  mb-3 text-light" v-model="editable.bio" name="bio" rows="4"
          style="resize:none"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-success w-100 p-3">Save</button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
import AdvertComp from './AdvertComp.vue';

export default {
  setup() {
    const editable = ref({});
    watchEffect(() => {
      // MUTABLE DATA BAD!!!!! IMMUTABLE DATA GOOD
      //                 v BREAKS THE REFERENCE TO THE ORIGINAL OBJECT
      editable.value = { ...AppState.account };
    });
    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value);
        }
        catch (error) {
          Pop.error(error, "[EditAccount]");
        }
      }
    };
  },
  components: { AdvertComp }
}
</script>


<style lang="scss" scoped>

</style>
