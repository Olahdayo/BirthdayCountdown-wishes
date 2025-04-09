<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Share+Tech+Mono&display=swap');

:root {
      --primary-color: #00ffcc;
      --secondary-color: #ff3399;
      --accent-color: #ffcc00;
      --bg-color: #0a0a20;
      --text-color: #ffffff;
    }

  body {
      background-color: var(--bg-color);
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(0, 255, 204, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 80% 10%, rgba(255, 51, 153, 0.05) 0%, transparent 20%);
      color: var(--text-color);
      font-family: 'Poppins', sans-serif;
      margin: 0;
      min-height: 100vh;
      overflow-x: hidden;
      text-align: center;
      position: relative;
    }

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-fluid {
  padding: 2rem;
}

.time-display {
  font-family: 'Share Tech Mono', monospace;
  font-size: clamp(2rem, 8vw, 8rem);
  cursor: pointer;
  user-select: none;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.7);
  margin-top: 4vh;
}

.blinking {
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.carousel-container {
  width: 90%;
  max-width: 800px;
  margin: 3rem auto 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
}

.carousel-item img {
  max-height: 400px;
  object-fit: cover;
  width: 100%;
}

.birthday-message {
  color: var(--text-color);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin: 2rem auto;
  max-width: 800px;
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

.countdown-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 5vh auto;
  max-width: 800px;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  background-color: rgba(10, 10, 32, 0.8);
  padding: 1rem;
  border-radius: 12px;
  min-width: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 255, 204, 0.3);
}

.countdown-value {
  font-family: 'Share Tech Mono', monospace;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--accent-color);
  font-weight: bold;
}

.countdown-label {
  font-size: 0.9rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.loading {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 255, 204, 0.3);
  border-radius: 50%;
  border-top-color: var(--primary-color);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.headline {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin: 2rem auto;
  color: var(--accent-color);
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(255, 204, 0, 0.5);
  max-width: 800px;
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

.birthday-emoji {
  font-size: 2rem;
  margin: 0 0.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
}

.message-input {
  max-width: 500px;
  margin: 2rem auto;
  background-color: rgba(10, 10, 32, 0.7);
  border: 1px solid var(--primary-color);
  color: var(--text-color);
  border-radius: 8px;

}

.message-input:focus {
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  border-color: var(--primary-color);
  background-color: rgba(10, 10, 32, 0.9);
  color: var(--text-color);
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

.wishes-section {
  max-width: 800px;
  margin: 3rem auto;
  background-color: rgba(10, 10, 32, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
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

/* Light theme styles */
body.light-theme {
  --bg-color: #f0f0f0;
  --text-color: #333;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(0, 255, 204, 0.1) 0%, transparent 20%),
    radial-gradient(circle at 80% 10%, rgba(255, 51, 153, 0.1) 0%, transparent 20%);
}

body.light-theme .countdown-unit {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 255, 204, 0.5);
}

body.light-theme .wish-card {
  background: rgba(0, 255, 204, 0.1);
}

body.light-theme .message-input {
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--bg-color);
}

body.light-theme .message-input:focus {
  background-color: rgba(255, 255, 255, 0.9);
}

/* Dark and Light Theme Classes */
.light-theme {
  --bg-color: #f0f8ff;
  --text-color: #333344;
  --primary-color: #009988;
  --secondary-color: #ff3366;
}

.blinking-dot {
  font-size: 24px;
  animation: blink 1s step-start infinite;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .countdown-unit {
    min-width: 80px;
    padding: 0.7rem;
  }
  
  .carousel-container {
    width: 95%;
  }
  
  .birthday-message {
    width: 95%;
  }
}

/* Fancy background animation */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;
}

.star {
  position: absolute;
  background-color: var(--primary-color);
  width: 2px;
  height: 2px;
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; transform: scale(1.5); }
}
</style>