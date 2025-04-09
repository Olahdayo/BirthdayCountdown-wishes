<template>
    <nav>
      <div class="logo">Celebrate<span>.</span></div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#example">Example</a>
      </div>
      <div class="auth-buttons">
        <app-button @click="$emit('open-modal', 'login')" variant="outline">Log In</app-button>
        <app-button @click="$emit('open-modal', 'signup')" variant="primary">Sign Up</app-button>
      </div>
    </nav>
  </template>
  
  <script>
  import AppButton from '../ui/AppButton.vue';
  
  export default {
    name: 'AppNavbar',
    components: {
      AppButton
    }
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
  }
  
  .logo span {
    color: var(--secondary-color);
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: var(--primary-color);
  }
  
  .auth-buttons {
    display: flex;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
  </style>