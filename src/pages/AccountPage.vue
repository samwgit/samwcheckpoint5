<template>
  <span class="text-center">
    <AdvertComp />
  </span>
  <div class="about text-center mt-5">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p class="mb-5">{{ account.email }}</p>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <AccountForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from '../components/AccountForm.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
