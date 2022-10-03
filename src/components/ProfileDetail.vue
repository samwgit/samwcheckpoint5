<template>
  <div class="cover-img text-shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
    <div class="mb-3 card bg-dark pfp-card d-flex justify-content-center">

      <div class="card-body">

        <img :src="profile.picture" alt="" height="120" class="">
      </div>
    </div>
    <div class="psc">
      <div class="-5">
        <h3 class="text-center text-success">{{ profile.name }}'s Profile



        </h3>
        <p class="m-3">Graduated? {{profile.graduated}}</p>
        <p class="m-3">Github: {{profile.github}}</p>
        <p class="m-3">Linkedin: {{profile.linkedin}}</p>
        <p class="m-3">Class: {{profile.class}}</p>
        <p class="m-3">Bio: {{ profile.bio }}</p>
      </div>
    </div>

  </div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Account } from '../models/Account.js';

export default {
  setup() {
    return {
      profile: computed(() => AppState.activeProfile)
    }
  }
}
</script>


<style lang="scss" scoped>
.psc {
  background-color: rgba(51, 51, 51, 0.468);
}

.pfp-card {
  height: fit-content;
  width: fit-content;
  right: -38.5rem;
  top: 0.5rem;
}
</style>