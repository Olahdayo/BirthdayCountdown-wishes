import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isLightTheme: localStorage.getItem('theme') === 'light'
  }),
  
  actions: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme
      localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark')
      document.body.classList.toggle('light-theme', this.isLightTheme)
    },
    
    initializeTheme() {
      document.body.classList.toggle('light-theme', this.isLightTheme)
    }
  }
}) 