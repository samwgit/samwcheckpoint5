<template>
  <div class="about text-center bg-dark">
    <h1>Welcome to DogeBook</h1>
    <img
      src="https://jdsupra-html-images.s3-us-west-1.amazonaws.com/db4b8dbc-814c-4fb6-9e42-bfd5393fdace-doge-e1633357157847.png"
      alt="doge">
    <p>This website allows for CodeWorks alumni to be able to post and share images and text with one another</p>
    <h4>If you have questions about DogeBook feel free to contact me @
      <strong class="text-success">samuel.wilkins.official@gmail.com</strong>
    </h4>
    <h4 class="mb-5">Thank you and enjoy using my site!</h4>
  </div>
  <span class="text-center">
    <AdvertComp />
  </span>
</template>

<script>
import AdvertComp from '../components/AdvertComp.vue';
export default {
  setup() {
    return {};
  },
  components: { AdvertComp }
}
</script>

<style scoped>
.moveAdvert {
  top: 50em;
}
</style>
