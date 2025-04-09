<template>
  <div class="music-controls">
    <button class="music-btn" @click="$emit('toggle-play')">
      <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
    </button>
    <input 
      type="range" 
      min="0" 
      max="1" 
      step="0.1" 
      :value="volume"
      @input="$emit('volume-change', $event.target.value)" 
      class="volume-slider"
    >
    <span>Birthday Tunes</span>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
  props: {
    isPlaying: {
      type: Boolean,
      required: true
    },
    volume: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.music-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.music-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.volume-slider {
  width: 200px;
}
</style> 