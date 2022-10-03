<template>
  <div>
    <!-- FIXME Line Below -->
    <span class="ad-resize">
      <img :src="advert[0].square" alt="broken.">
      <img :src="advert[1].square" alt="broken.">
    </span>
    <!-- <img src="https://us.coca-cola.com/static-src/content/dam/coke2016/navheader/nav_coke.jpg" alt="bad"> -->
  </div>

</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Advert } from '../models/Advert.js';
export default {
  props: {
    advert: {
      type: Advert,
      required: true
    }
  },
  setup() {
    return {
      // NOTE THIS IS HOW YOU PASS A PROP FROM THE APP STATE
      advert: computed(() => AppState.advert),
    }
  }
}
</script>


<style lang="scss" scoped>
.resize {
  height: 50px;
  width: 50px;
}

.ad-resize {
  height: 200px;
  width: 500px;
}
</style>