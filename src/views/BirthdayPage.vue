<template>
  <div class="birthday-page">
    <div id="loadingState" v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading Birthday Surprise...</p>
    </div>
    
    <div id="bgAnimation" class="bg-animation"></div>
    <canvas id="confettiCanvas" class="confetti-canvas"></canvas>
    
    <div v-if="!isLoading">
      <main-component 
        v-if="!isBirthdayTime" 
        :countdown-date="countdownDate"
        @birthday-time="showBirthdayMessage" 
      />
      
      <birthday-content v-else />
      
      <wishes-section />
      
      <theme-toggle />
      
      <audio-player />
    </div>
  </div>
</template>

<script>
import MainComponent from '../components/MainComponent.vue';
import BirthdayContent from '../components/BirthdayContent.vue';
import WishesSection from '../components/WishesSection.vue';
import ThemeToggle from '../components/ThemeToggle.vue';
import AudioPlayer from '../components/AudioPlayer.vue';

export default {
  components: {
    MainComponent,
    BirthdayContent,
    WishesSection,
    ThemeToggle,
    AudioPlayer
  },
  data() {
    return {
      isLoading: true,
      isBirthdayTime: false,
      countdownDate: new Date("April 14, 2025 00:00:00").getTime()
    };
  },
  mounted() {
    this.createStars();
    
    // Simulating loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    
    // Check if it's already birthday time
    const now = new Date().getTime();
    if (now >= this.countdownDate) {
      this.showBirthdayMessage();
    }
  },
  methods: {
    createStars() {
      const bgAnimation = document.getElementById('bgAnimation');
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * screenWidth}px`;
        star.style.top = `${Math.random() * screenHeight}px`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        bgAnimation.appendChild(star);
      }
    },
    showBirthdayMessage() {
      this.isBirthdayTime = true;
      
      // Start playing music when birthday content is shown
      setTimeout(() => {
        const bgMusic = document.getElementById('bgMusic');
        if (bgMusic) {
          bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }
      }, 100);
    }
  }
};
</script>

<style scoped>
.birthday-page {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}
</style>
