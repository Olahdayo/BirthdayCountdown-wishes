<template>
  <div class="main-component">
    <div class="headline">
      <span class="birthday-emoji">✨</span>
      Get Ready for Esther's Big Day!
      <span class="birthday-emoji">✨</span>
    </div>

    <div id="birthdayDate">
      April 14<span class="blinking-dot">.....</span>
    </div>

    <div class="countdown-container">
      <div class="countdown-unit">
        <div class="countdown-value">{{ countdown.days }}</div>
        <div class="countdown-label">Days</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">{{ countdown.hours }}</div>
        <div class="countdown-label">Hours</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">{{ countdown.minutes }}</div>
        <div class="countdown-label">Minutes</div>
      </div>
      <div class="countdown-unit">
        <div class="countdown-value">{{ countdown.seconds }}</div>
        <div class="countdown-label">Seconds</div>
      </div>
    </div>

    <div class="time-display" :class="{ blinking: isBlinking }" @click="toggleBlinking">
      14 | 04
    </div>
    <p class="text-white blinking-note">Click to toggle blinking</p>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  props: {
    countdownDate: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      isBlinking: false
    }
  },
  mounted() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        const now = new Date().getTime()
        const distance = this.countdownDate - now

        if (distance <= 0) {
          this.$emit('birthday-time')
          return
        }

        this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24))
        this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000)
      }, 1000)
    },
    toggleBlinking() {
      this.isBlinking = !this.isBlinking
    }
  }
}
</script>

<style scoped>
.main-component {
  padding: 2rem;
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

.countdown-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}

.countdown-unit {
  text-align: center;
  color: white;
}

.countdown-value {
  font-size: 3rem;
  font-weight: bold;
}

.countdown-label {
  font-size: 1rem;
  text-transform: uppercase;
}

.time-display {
  font-size: 2rem;
  color: white;
  text-align: center;
  margin: 2rem 0;
  cursor: pointer;
}

.blinking {
  animation: blink 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style> 