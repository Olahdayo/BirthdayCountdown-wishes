<template>
  <div class="birthday-content">
    <div class="carousel-container">
      <div class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div v-for="(image, index) in birthdayImages" 
               :key="index" 
               class="carousel-item"
               :class="{ active: index === 0 }">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
    
    <div class="birthday-message">
      <h2>Happy Birthday Esther! 🎂</h2>
      <p>Today is all about celebrating the amazing person you are! Wishing you joy, love, and exciting tech adventures in the coming year and always! 🚀💖</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BirthdayContent',
  data() {
    return {
      birthdayImages: [
        { src: '/images/birthday-1.jpg', alt: 'Happy Esther Day' },
        { src: '/images/birthday-2.jpg', alt: 'Birthday Smiles' },
        { src: '/images/birthday-3.jpg', alt: 'Best Moments' }
      ]
    }
  }
}
</script>

<style scoped>
.birthday-content {
  padding: 2rem;
}

.carousel-container {
  max-width: 800px;
  margin: 2rem auto;
}

.carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

.birthday-message {
  text-align: center;
  color: white;
  margin: 2rem 0;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: rgba(255, 51, 153, 0.1);
  border-left: 4px solid var(--secondary-color);
  border-radius: 8px;
  animation: fadeIn 3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 