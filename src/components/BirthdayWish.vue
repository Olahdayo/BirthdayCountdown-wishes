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
      }
    }
  },
  methods: {
    addWish() {
      if (this.newWish.message.trim()) {
        this.$emit('add-wish', {
          name: this.newWish.name.trim() || 'Anonymous',
          message: this.newWish.message.trim()
        })
        this.newWish.name = ''
        this.newWish.message = ''
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
  /* background: #3498db; */
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
</style> 