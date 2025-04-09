<template>
  <div class="wishes-section">
    <h3 class="mb-4">Leave a Birthday Wish for Esther</h3>
    <div class="mb-3">
      <input 
        type="text" 
        class="form-control message-input mb-2" 
        v-model="newWish.name" 
        placeholder="Your Name"
      >
      <textarea 
        class="form-control message-input" 
        v-model="newWish.message" 
        rows="3" 
        placeholder="Your Birthday Message"
      ></textarea>
    </div>
    <button class="btn btn-custom mb-4" @click="addWish">Add Wish</button>

    <div class="wishes-list">
      <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
        <h5>From: {{ wish.name }}</h5>
        <p>{{ wish.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishesSection',
  data() {
    return {
      newWish: {
        name: '',
        message: ''
      },
      wishes: [
        {
          name: 'The Team',
          message: 'Happy Birthday Esther! You bring so much joy to everyone around you!'
        }
      ]
    }
  },
  methods: {
    addWish() {
      if (this.newWish.message.trim()) {
        this.wishes.unshift({
          name: this.newWish.name.trim() || 'Anonymous',
          message: this.newWish.message.trim()
        })
        this.newWish.name = ''
        this.newWish.message = ''
        
        // Launch confetti when a new wish is added
        this.launchConfetti()
      }
    },
    launchConfetti() {
      const canvas = document.getElementById('confettiCanvas')
      if (canvas) {
        const confetti = window.confetti
        if (confetti) {
          confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.8 }
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.wishes-section {
  max-width: 800px;
  margin: 3rem auto;
  background-color: rgba(10, 10, 32, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
}

.message-input {
  max-width: 500px;
  margin: 2rem auto;
  background-color: rgba(10, 10, 32, 0.7);
  border: 1px solid var(--primary-color);
  color: white;
  border-radius: 8px;
}

.message-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.message-input:focus {
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  border-color: var(--primary-color);
  background-color: rgba(10, 10, 32, 0.9);
  color: white;
}

.btn-custom {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: var(--secondary-color);
  color: var(--text-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 51, 153, 0.4);
}

.wish-card {
  background: rgba(0, 255, 204, 0.05);
  border-left: 3px solid var(--primary-color);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  text-align: left;
}

.wish-card h5 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.wish-card p {
  margin: 0;
  color: var(--text-color);
}
</style> 