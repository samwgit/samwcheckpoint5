<template>
  <div class="component" v-if="creator">
    <router-link :to="{name: 'Profile', params: {id: creator.id}}">
      <img :src="creator.picture" :alt="creator.name" :title="creator.name" class="user-pfp"><span
        class="ms-2">{{creator.name}}</span>
    </router-link>
  </div>
</template>


<script>
import { Account } from "../models/Account.js"

export default {
  props: {
    creator: {
      type: Account,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.user-pfp {
  height: 25px;
  width: 25px;
}
</style>