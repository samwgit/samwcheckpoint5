<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-dark">
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-end p-4">
      <strong>By Sam</strong>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { SandboxApiPosts } from './services/AxiosService.js'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
