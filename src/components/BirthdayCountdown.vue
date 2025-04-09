<template>
  <div class="container-fluid">
    <ConfettiEffect ref="confettiCanvas" />
    <ThemeToggle />
    <div class="bg-animation" ref="bgAnimation"></div>

    <div v-if="isLoading" class="loading">
      <div class="loading-spinner"></div>
      <div>Preparing Esther's Special Day...</div>
    </div>

    <div v-else-if="!isBirthday" class="main-content">
      <div class="headline">
        <span class="birthday-emoji">✨</span>
        Get Ready for Esther's Big Day!
        <span class="birthday-emoji">✨</span>
      </div>

      <div id="birthdayDate">
        April 14<span class="blinking-dot">.....</span>
      </div>

      <CountdownTimer :birthday="birthday" @birthday-reached="onBirthdayReached" />

      <div class="time-display" :class="{ blinking: isBlinking }" @click="toggleBlinking">
        14 | 04
      </div>
      <p class="text-white blinking-note">Click to toggle blinking</p>
    </div>

    <div v-else class="birthday-content">
      <PhotoCarousel :images="birthdayImages" />
      
      <div class="birthday-message">
        <h2>Happy Birthday Esther! 🎂</h2>
        <p>Today is all about celebrating the amazing person you are! Wishing you joy, love, and exciting tech adventures in the coming year and always! 🚀💖</p>
      </div>

      <AudioPlayer />
    </div>

    <BirthdayWish 
      :wishes="wishes"
      @add-wish="addWish"
    />
  </div>
</template>

<script>
import { useThemeStore } from '../stores/themeStore'
import ConfettiEffect from './ConfettiEffect.vue'
import ThemeToggle from './ThemeToggle.vue'
import PhotoCarousel from './PhotoCarousel.vue'
import AudioPlayer from './AudioPlayer.vue'
import CountdownTimer from './CountdownTimer.vue'
import BirthdayWish from './BirthdayWish.vue'

export default {
  name: 'BirthdayCountdown',
  components: {
    ConfettiEffect,
    ThemeToggle,
    PhotoCarousel,
    AudioPlayer,
    CountdownTimer,
    BirthdayWish
  },
  setup() {
    const themeStore = useThemeStore()
    themeStore.initializeTheme()
    return { themeStore }
  },
  data() {
    return {
      birthday: new Date('2025-04-14T00:00:00'),
      isBirthday: false,
      isLoading: true,
      isBlinking: false,
      wishes: [
        {
          name: 'The Team',
          message: 'Happy Birthday Esther! You bring so much joy to everyone around you!'
        }
      ],
      birthdayImages: [
        { src: '/images/birthday-1.jpg', alt: 'Happy Esther Day' },
        { src: '/images/birthday-2.jpg', alt: 'Birthday Smiles' },
        { src: '/images/birthday-3.jpg', alt: 'Best Moments' }
      ]
    }
  },
  mounted() {
    this.createStars()
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  methods: {
    createStars() {
      const bgAnimation = this.$refs.bgAnimation
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div')
        star.classList.add('star')
        star.style.left = `${Math.random() * screenWidth}px`
        star.style.top = `${Math.random() * screenHeight}px`
        star.style.animationDelay = `${Math.random() * 5}s`
        bgAnimation.appendChild(star)
      }
    },
    onBirthdayReached() {
      this.isBirthday = true
      this.$refs.confettiCanvas.launchConfetti()
    },
    toggleBlinking() {
      this.isBlinking = !this.isBlinking
    },
    addWish(wish) {
      this.wishes.unshift(wish)
    }
  }
}
</script>

<style scoped>
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
  background: var(--text-color);
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--text-color);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.headline {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin: 2rem auto;
  color: var(--accent-color);
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(255, 204, 0, 0.5);
  max-width: 800px;
}

.birthday-emoji {
  font-size: 2rem;
  margin: 0 0.5rem;
  animation: bounce 2s infinite;
}

#birthdayDate {
  font-family: 'Share Tech Mono', monospace;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: var(--secondary-color);
  margin: 2rem auto;
  background-color: rgba(255, 51, 153, 0.1);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 0 15px rgba(255, 51, 153, 0.3);
}

.blinking-dot {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.time-display {
  font-size: 2rem;
  color: var(--text-color);
  text-align: center;
  margin: 2rem 0;
  cursor: pointer;
}

.blinking {
  animation: blink 1s infinite;
}

.birthday-message {
  text-align: center;
  color: var(--text-color);
  margin: 2rem 0;
}
</style>