<template>
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
</template>

<script>
export default {
  name: 'CountdownTimer',
  props: {
    birthday: {
      type: Date,
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
      }
    }
  },
  mounted() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      const updateCountdown = () => {
        const now = new Date()
        const distance = this.birthday - now

        if (distance <= 0) {
          this.countdown = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          }
          this.$emit('birthday-reached')
          return
        }

        this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24))
        this.countdown.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000)
      }

      // Update immediately
      updateCountdown()
      // Then update every second
      setInterval(updateCountdown, 1000)
    }
  }
}
</script>

<style scoped>
.countdown-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  background: red;
}

.countdown-unit {
  text-align: center;
  color: red;
}

.countdown-value {
  font-size: 3rem;
  font-weight: bold;
}

.countdown-label {
  font-size: 1rem;
  text-transform: uppercase;
}
</style> 