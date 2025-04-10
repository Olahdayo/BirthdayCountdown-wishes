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
    <button class="btn btn-custom mb-4" @click="addWish" :disabled="isSubmitting">
      {{ isSubmitting ? 'Submitting...' : 'Add Wish' }}
    </button>

    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>

    <div class="wishes-list">
      <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
        <h5>From: {{ wish.name }}</h5>
        <p>{{ wish.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api'

export default {
  name: 'BirthdayWish',
  props: {
    wishes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newWish: {
        name: '',
        message: ''
      },
      isSubmitting: false,
      errorMessage: ''
    }
  },
  computed: {
    uniqueRoute() {
      return localStorage.getItem('uniqueRoute');
    }
  },
  methods: {
    async addWish() {
      if (!this.newWish.message.trim()) return;
      if (!this.uniqueRoute) {
        this.errorMessage = 'Unique route not found. Please refresh the page.';
        return;
      }
      
      this.isSubmitting = true;
      this.errorMessage = '';
      
      try {
        const wishData = {
          name: this.newWish.name.trim() || 'Anonymous',
          message: this.newWish.message.trim()
        };
        
        const response = await api.submitWish(this.uniqueRoute, wishData);
        
        if (response.success) {
          this.$emit('add-wish', wishData);
          this.newWish.name = '';
          this.newWish.message = '';
        } else {
          this.errorMessage = 'Failed to submit wish. Please try again.';
          console.error('Failed to submit wish:', response.message);
        }
      } catch (error) {
        if (error.message === 'Failed to fetch') {
          this.errorMessage = 'Unable to connect to the server. Please check your internet connection.';
        } else {
          this.errorMessage = 'An error occurred while submitting your wish. Please try again.';
        }
        console.error('Error submitting wish:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.wishes-section {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
}

.message-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white !important;
}

.btn-custom {
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  cursor: pointer;
}

.wish-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.alert-danger {
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.2);
  color: #dc3545;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style> 