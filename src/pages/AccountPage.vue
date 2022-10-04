<template>
  <span class="text-center">
    <AdvertComp v-for="a in advert" :key="a.id" :advert="advert" />

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
import AdvertComp from '../components/AdvertComp.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm, AdvertComp, }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
