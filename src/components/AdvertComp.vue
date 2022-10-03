<template>
  <div class="">
    <!-- FIXME Line Below -->
    <!-- <img :src="advert.banner" alt="broken."> -->
    <img src="https://us.coca-cola.com/static-src/content/dam/coke2016/navheader/nav_coke.jpg" alt="bad">
  </div>
  <h5>Check Network tab they are there just not here...</h5>
</template>

<!-- FIXME replace src with :src="advert.banner" when it does not come back as undefined for some reason... -->
<script>
import { Advert } from '../models/Advert.js';
export default {
  props: {
    advert: {
      type: Advert,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.resize {
  height: 50px;
  width: 50px;
}
</style>