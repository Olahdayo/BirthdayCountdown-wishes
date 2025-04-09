<template>
  <div v-if="isLoading" class="loading">
    <div class="loading-spinner"></div>
    <div>Preparing Esther's Special Day...</div>
  </div>
  <div v-else class="app-container">
    <ThemeToggle />
    <AudioPlayer />
    <router-view />
  </div>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue'
import AudioPlayer from './components/AudioPlayer.vue'


export default {
  name: 'App',
  components: {
    ThemeToggle,
    AudioPlayer
  },
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>

<style>
/* Global styles are now in main.css */
</style>