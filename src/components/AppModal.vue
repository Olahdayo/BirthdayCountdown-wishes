<template>
    <div class="modal" :class="{ active: isActive }">
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>
        
        <div class="modal-tabs">
          <div 
            class="modal-tab" 
            :class="{ active: activeTab === 'login' }" 
            @click="activeTab = 'login'"
          >
            Log In
          </div>
          <div 
            class="modal-tab" 
            :class="{ active: activeTab === 'signup' }" 
            @click="activeTab = 'signup'"
          >
            Sign Up
          </div>
        </div>
        
        <form 
          class="modal-form" 
          :class="{ active: activeTab === 'login' }" 
          id="login-form"
          @submit.prevent="handleLoginSubmit"
        >
          <div class="form-group">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" v-model="loginForm.email" required>
          </div>
          <div class="form-group">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" v-model="loginForm.password" required>
          </div>
          <app-button type="submit" variant="primary" style="width: 100%;">Log In</app-button>
          <div class="form-footer">
            <p>Don't have an account? <a href="#" @click.prevent="activeTab = 'signup'">Sign up</a></p>
          </div>
          <div class="success-message" :class="{ show: loginSuccess }">Successfully logged in!</div>
        </form>
        
        <form 
          class="modal-form" 
          :class="{ active: activeTab === 'signup' }" 
          id="signup-form"
          @submit.prevent="handleSignupSubmit"
        >
          <div class="form-group">
            <label for="signup-name">Full Name</label>
            <input type="text" id="signup-name" v-model="signupForm.name" required>
          </div>
          <div class="form-group">
            <label for="signup-email">Email</label>
            <input type="email" id="signup-email" v-model="signupForm.email" required>
          </div>
          <div class="form-group">
            <label for="signup-password">Password</label>
            <input type="password" id="signup-password" v-model="signupForm.password" required>
          </div>
          <div class="form-group">
            <label for="birthday-date">Your Birthday</label>
            <input type="date" id="birthday-date" v-model="signupForm.birthday" required>
          </div>
          <app-button type="submit" variant="primary" style="width: 100%;">Sign Up</app-button>
          <div class="form-footer">
            <p>Already have an account? <a href="#" @click.prevent="activeTab = 'login'">Log in</a></p>
          </div>
          <div class="success-message" :class="{ show: signupSuccess }">Account created successfully!</div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import AppButton from './AppButton.vue';
  
  export default {
    name: 'AppModal',
    components: {
      AppButton
    },
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      initialTab: {
        type: String,
        default: 'login'
      }
    },
    data() {
      return {
        activeTab: this.initialTab,
        loginForm: {
          email: '',
          password: ''
        },
        signupForm: {
          name: '',
          email: '',
          password: '',
          birthday: ''
        },
        loginSuccess: false,
        signupSuccess: false
      };
    },
    watch: {
      initialTab(newVal) {
        this.activeTab = newVal;
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      handleLoginSubmit() {
        // Here you would normally handle authentication
        // For demo purposes, just show success message
        this.loginSuccess = true;
        setTimeout(() => {
          this.loginSuccess = false;
          this.closeModal();
        }, 2000);
      },
      handleSignupSubmit() {
        // Here you would normally handle registration
        // For demo purposes, just show success message
        this.signupSuccess = true;
        setTimeout(() => {
          this.signupSuccess = false;
          this.closeModal();
        }, 2000);
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    position: relative;
  }
  
  .close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #777;
  }
  
  .close-modal:hover {
    color: var(--dark-color);
  }
  
  .modal-tabs {
    display: flex;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
  }
  
  .modal-tab {
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-weight: 500;
  }
  
  .modal-tab.active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
  
  .modal-form {
    display: none;
  }
  
  .modal-form.active {
    display: block;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    text-align: left;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: var(--font-main);
  }
  
  .form-footer {
    margin-top: 1.5rem;
    text-align: center;
  }
  
  .form-footer a {
    color: var(--primary-color);
    text-decoration: none;
  }
  
  .success-message {
    color: var(--success-color);
    text-align: center;
    margin-top: 1rem;
    display: none;
  }
  
  .success-message.show {
    display: block;
  }
  </style>