<template>
  <div class="container-fluid">
    <ConfettiEffect ref="confettiCanvas" />
    <div class="bg-animation" ref="bgAnimation"></div>

    <div v-if="!isBirthday" class="main-content">
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
import PhotoCarousel from './PhotoCarousel.vue'
import CountdownTimer from './CountdownTimer.vue'
import BirthdayWish from './BirthdayWish.vue'

export default {
  name: 'BirthdayCountdown',
  components: {
    ConfettiEffect,
    PhotoCarousel,
    CountdownTimer,
    BirthdayWish
  },
  setup() {
    const themeStore = useThemeStore()
    themeStore.initializeTheme()
    return { themeStore }
  },
  data() {
    const birthday = new Date("2025-04-08T15:54:00")
    console.log('Birthday date initialized:', birthday.toISOString())
    return {
      birthday,
      isBirthday: false,
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
    console.log(this.birthday)
    this.createStars()
  },
  methods: {
    createStars() {
      const bgAnimation = this.$refs.bgAnimation
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      console.log(this.birthday)
      
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

<style>
/* Component-specific styles only */
</style>